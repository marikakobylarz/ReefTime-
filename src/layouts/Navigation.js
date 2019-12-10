import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  { name: "home", path: "/", exact: true },
  { name: "about", path: "/about" },
  { name: "gallery", path: "/gallery" },
  { name: "contacts", path: "/contact" },
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ))

  return (
    <nav className="menu">
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;
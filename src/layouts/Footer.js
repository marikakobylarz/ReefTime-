import React from 'react';
import "../styles/Footer.css";
import Icon from "../components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer = () => {
  return (
    <div className="footer">
      <h3>Get in touch</h3>
      <section className="footer_contact">
        <div className='media'>
          <h4>Contact us on social media</h4>
          <ul className="footer__icon-container">
            <Icon
              icon={<FontAwesomeIcon icon={["fab", "facebook"]} />}
              url={"http://facebook.com"}
              alt={"faceook-contact"}
            />
            <Icon
              icon={<FontAwesomeIcon icon={["fab", "twitter"]} />}
              url={"http://twitter.com"}
              alt={"twitter-contact"}
            />
            <Icon
              icon={<FontAwesomeIcon icon={["fab", "instagram"]} />}
              url={"http://instagram.com"}
              alt={"instagram-contact"}
            />
          </ul></div>
        <div className="addres">Address:<br />
          10 Bouverie Street <br />
          London EC4Y 8AX<br />
          United Kindom<br />
          reeftime@gmail.com</div></section>

      <p>Created by Marika Kobylarz 2019</p>
    </div>
  );
};



export default Footer;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import About from '../pages/About';
import MyGallery from '../pages/MyGallery';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';



const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={MyGallery} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;
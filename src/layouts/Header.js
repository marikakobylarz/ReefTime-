import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../styles/Header.css";

import img1 from '../images/shark1.jpg';
import img2 from '../images/coral2.jpg';
import img3 from '../images/coral.jpg';
import img4 from '../images/coral6.jpg';

const Header = () => {


    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="coral" />
                )} />
                <Route path="/about" render={() => (
                    <img src={img2} alt="coral" />
                )} />
                <Route path="/gallery" render={() => (
                    <img src={img3} alt="fish" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img4} alt="fish" />
                )} />
                <Route render={() => (
                    <img src={img4} alt="coral" />
                )} />
            </Switch>

        </>
    );
}

export default Header;
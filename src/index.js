import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './layouts/App';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faCheckSquare,
    faHome,
    faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, fab, faHome, faBars);


ReactDOM.render(<App />, document.getElementById('root'));



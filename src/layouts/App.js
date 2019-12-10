import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import MobileNav from "./MobileNav";
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <div className='logo'>ReefTime</div>
            <aside>
              {<Navigation />}
              <MobileNav />
            </aside>
            <div className='banner'>
              {<Header />}</div>
          </header>
          <main>
            <section className="page">
              {<Page />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;

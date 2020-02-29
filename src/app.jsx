/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import logo from './public/images/LOGO-OLKARIA.png';
import hamburger from './public/images/hamburger.svg';

export function App() {
  const [ham, setHam] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="nav-bar">
          <img alt="logo" className="nav-logo" src={logo} />
          <div className="nav-buttons">
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/">
                Holidays
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/kite">
                Kitesurfing
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/offer">
                Offers
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/shop">
                Shop
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/contact">
                Contact
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/about">
                About
              </NavLink>
            </div>
          </div>
          <img src={hamburger} alt="hamburger" className="nav-ham" onClick={() => setHam(prev => !prev)} />
        </div>
        <div className={`nav-sidebar ${ham && 'active'}`}>
          <div className="nav-sidebar-container">
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/" onClick={() => setHam(prev => !prev)}>
                Holidays
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/kite" onClick={() => setHam(prev => !prev)}>
                Kitesurfing
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/offer" onClick={() => setHam(prev => !prev)}>
                Offers
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/shop" onClick={() => setHam(prev => !prev)}>
                Shop
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/contact" onClick={() => setHam(prev => !prev)}>
                Contact
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink exact activeClassName="selected" to="/about" onClick={() => setHam(prev => !prev)}>
                About
              </NavLink>
            </div>
          </div>
        </div>

        <div className="Container">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default hot(App);

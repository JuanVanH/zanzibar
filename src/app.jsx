/* eslint-disable global-require */
import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import logo from './public/images/LOGO-OLKARIA.png';

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
          <button type="button" className="nav-ham" onClick={() => setHam(prev => !prev)}>
            ham
          </button>
        </div>
        <div className={`nav-sidebar ${ham && 'active'}`}>
          <button type="button" className="nav-sidebar-close" onClick={() => setHam(prev => !prev)}>
            X
          </button>
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

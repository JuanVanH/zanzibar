import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';

export function App() {
  return (
    <>
      <BrowserRouter>
        <div className="Navbar">
          <img alt="logo" className="LogoPicture" src="./public/images/logo.png" />
          <ul>
            <li>
              <NavLink exact activeClassName="selected" to="/">
                Kite
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to="/members">
                Safari
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to="/admin">
                Dive
              </NavLink>
            </li>
          </ul>
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

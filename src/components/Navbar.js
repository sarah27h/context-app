import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../App.css';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => (
          <AuthContext.Consumer>
            {authContext => {
              const { isLightTheme, light, dark } = themeContext;
              const { isAuthentication, authToggle } = authContext;
              const status = isAuthentication ? 'Logged in' : 'Logged out';
              const actionBtn = isAuthentication ? 'Log out' : 'Log in';
              const theme = isLightTheme ? light : dark;
              return (
                <nav className={`${theme}`}>
                  <h1>Context App</h1>
                  <p>{`${status}`}</p>
                  <button onClick={authToggle}>{`${actionBtn}`}</button>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </AuthContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;

import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthentication: false
  };

  authToggle = () => {
    this.setState((prevState, props) => {
      return { isAuthentication: !prevState.isAuthentication };
    });
  };

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, authToggle: this.authToggle }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;

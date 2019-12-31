import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ToggleTheme extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(Object.getOwnPropertyNames(ToggleTheme));
    const { handleToggleTheme } = this.context;
    return <button onClick={handleToggleTheme}>Toggle the theme</button>;
  }
}

export default ToggleTheme;

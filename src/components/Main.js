import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import BookList from './BookList';
import ToggleTheme from './ToggleTheme';
import ThemeContextProvider from '../contexts/ThemeContext';
import AuthContextProvider from '../contexts/AuthContext';

function Main() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <BookList />
        <ToggleTheme />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default Main;

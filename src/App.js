import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <p>
        Welcome to iSeries.com!
      </p>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>Author: Hege Refsnes</p>
      <p><a href="mailto:hege@example.com">hege@example.com</a></p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './template/header/NavBar';
import Footer from './template/footer/Footer';
import Main from './Router/Main';
import MainInfo from './Router/MainInfo';
import Location from './Router/Location';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MainInfo" element={<MainInfo />} />
        <Route path="/Location" element={<Location />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
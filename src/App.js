import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Routing } from './Routing';
import { Footer } from './Footer/Footer';
import { withThemeProvider } from "./contexts/theme-context";
import AOS from 'aos';

function App() {
  
  AOS.init();


  return (
    <div className="App">
     <Navbar />
     <Routing />
     <Footer />
    </div>
  );
}

export default withThemeProvider(App);

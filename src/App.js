import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Routing } from './Routing';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routing />
     <Footer />
    </div>
  );
}

export default App;

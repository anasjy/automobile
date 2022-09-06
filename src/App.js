import React from 'react'
import Driver from './components/driver/Driver';
import Find from './components/find/Find';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import styles from './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
    </div>
  );
}

export default App;

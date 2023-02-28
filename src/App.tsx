import React from 'react';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Newsletter from './components/Newsletter';
import Project from './components/project/Project';
import Welcome from './components/welcome/Welcome';


function App() {
  return (
    <div>
      <Navbar />
      <Welcome /> 
      <Home />
      <Newsletter />
      <Project />  
      <Features />
      <Footer />

    </div>
  );
}

export default App;

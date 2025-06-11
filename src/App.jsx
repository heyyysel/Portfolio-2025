import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Challenges from './components/Challenges';
import FuturePlans from './components/FuturePlans';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Challenges />
      <FuturePlans />
      <Resume />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-text-dark text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-2">© 2024 Hazel Baldava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
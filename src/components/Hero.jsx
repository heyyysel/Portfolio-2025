import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-lavender via-pastel-blue to-pastel-mint relative"
    >
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <img
            src="https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/457458544_8478062415584448_5766051916160929740_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHA5DyvbTwmR8XW1gvX4I7P-Gr2FwLSP7j4avYXAtI_uLNViw8MJTS3Y9cbFr9NUB2gS_5TtswkrucjmR9UhBGT&_nc_ohc=LeSN-4Xf7AsQ7kNvwEm1mzQ&_nc_oc=AdlNdPelmSYHX8U-3CUKemnFnalwYsCOemb-45aGDGb_UeKjiyY9AIwHKheE5iEdpkw&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=5NRdCVKeJlYw079Pi68rHg&oh=00_AfMDILM1jlZniJhcDeiZb1EKDxXbcc0J6eOim8YZBBoMMA&oe=6852E71C"
            alt="Hazel Baldava"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-text-dark mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hazel Baldava
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-text-dark/80 mb-8 space-y-2">
          <p className="font-medium">Computer Science Student</p>
          <div className="flex items-center justify-center space-x-4">
            <span className="w-8 h-px bg-text-dark/30"></span>
            <span>Process Associate</span>
            <span className="w-8 h-px bg-text-dark/30"></span>
          </div>
          <p className="font-medium">Aspiring Software Developer</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="animate-bounce-gentle">
          <button
            onClick={() => scrollToSection('about')}
            className="text-text-dark/60 hover:text-text-dark transition-colors duration-300"
          >
            <FaChevronDown size={24} />
          </button>
        </div>
      </div>

      {/* Floating Pastel Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pastel-peach/30 rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-pastel-pink/40 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pastel-yellow/50 rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-12 w-24 h-24 bg-pastel-mint/30 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Hero;

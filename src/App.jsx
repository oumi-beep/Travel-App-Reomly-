import React, { useState } from 'react';
import Head from './Head.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';
import Popular from './Popular.jsx';
import Offer from './Offer.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import WeatherSearch from './WeatherSearch';  

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up modals
  const [user, setUser] = useState(null); // Store user info
  const [isWeatherSearchVisible, setIsWeatherSearchVisible] = useState(false); // Manage WeatherSearch visibility

  const openLoginModal = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const openSignupModal = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  const showWeatherSearch = () => {
    setIsWeatherSearchVisible(true);
  };

  const closeWeatherSearch = () => {
    setIsWeatherSearchVisible(false);
  };

  return (
    <>
      <Head 
        isModalOpen={isModalOpen} 
        openLoginModal={openLoginModal} 
        openSignupModal={openSignupModal} 
        closeModal={closeModal} 
        user={user} 
        onLogin={handleLogin} 
        onSignOut={handleSignOut} 
        showWeatherSearch={showWeatherSearch} // Pass the handler to Head
      />
      <Body />
      <Popular />
      <Offer />
      {isWeatherSearchVisible && <WeatherSearch onClose={closeWeatherSearch} />}
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

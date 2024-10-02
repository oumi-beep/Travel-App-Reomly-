import { useState, useEffect } from 'react';
import Head from './Head.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';
import Popular from './Popular.jsx';
import Offer from './Offer.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import WeatherSearch from './WeatherSearch';
import SavedFavorites from './SavedFavorites'; 
import BookingForm from './BookingForm';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isWeatherSearchVisible, setIsWeatherSearchVisible] = useState(false);
  const [isSavedFavoritesVisible, setIsSavedFavoritesVisible] = useState(false);
  const [savedFavorites, setSavedFavorites] = useState([]);
  
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);
  const [bookingData, setBookingData] = useState(null); // Store booking data

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  const openSignupModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    retrieveFavorites();
  };

  const handleSignOut = () => {
    setUser(null);
    setSavedFavorites([]);
  };

  const showWeatherSearch = () => {
    setIsWeatherSearchVisible(true);
  };

  const closeWeatherSearch = () => {
    setIsWeatherSearchVisible(false);
  };

  const showSavedFavorites = () => {
    setIsSavedFavoritesVisible(true);
  };

  const closeSavedFavorites = () => {
    setIsSavedFavoritesVisible(false);
  };

  const retrieveFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setSavedFavorites(favorites);
  };

  const handleAddToFavorite = (offer) => {
    const favorite = {
      offerId: offer.id,
      city: offer.city,
      price: offer.price,
      discount: offer.discount,
      location: offer.location,
      amenities: offer.amenities,
    };

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.offerId === offer.id)) {
      favorites.push(favorite);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setSavedFavorites(favorites);
      alert('Added to favorites!');
    } else {
      alert('This offer is already in your favorites!');
    }
  };

  const handleBooking = (result) => {
    setBookingData(result); // Set the booking data
    setIsBookingFormVisible(true); // Show the BookingForm
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
        showWeatherSearch={showWeatherSearch}
        showSavedFavorites={showSavedFavorites} 
        onAddToFavorite={handleAddToFavorite}
          
      /> 
        <div>
    <Body onBooking={handleBooking} />
    {isBookingFormVisible && (
      <div className="booking-form-overlay">
        <BookingForm onClose={() => setIsBookingFormVisible(false)} />
      </div>
    )}
  </div>
      <Popular />
      <Offer/> 
      {isWeatherSearchVisible && <WeatherSearch onClose={closeWeatherSearch} />}
      {isSavedFavoritesVisible && <SavedFavorites favorites={savedFavorites} onClose={closeSavedFavorites} />}
      <About />
      <Contact/>
      <Footer />
    </>
  );
};

export default App;

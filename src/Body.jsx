import  { useState } from "react";
import axios from 'axios';
import "./body_css.css";
import video from "./image/video.mp4";
import { GrLocation } from "react-icons/gr";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdKingBed, MdBathtub, MdPool, MdLocalParking } from "react-icons/md";
import { FaWifi } from "react-icons/fa";

import img from "./Offer_Image/Marrakech.jpg";
import img2 from "./Offer_Image/Casablanca.jpg";
import img3 from "./Offer_Image/Rabat.jpg";
import img4 from "./Offer_Image/img2.jpg";
import img5 from "./Offer_Image/img3.jpg";
import img6 from "./Offer_Image/img4.jpg";
import img7 from "./Offer_Image/img5.jpg";
import img8 from "./Offer_Image/img2.jpg";
import img9 from "./Offer_Image/img1.jpg";

const offers = [
  { id: 1, imgSrc: img, city: "Marrakech", price: '400€', discount: '20% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdPool className="icon" />, label: 'Pool' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Marrakech' },
  { id: 2, imgSrc: img2, city: "Casablanca", price: '300€', discount: '30% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Casablanca' },
  { id: 3, imgSrc: img3, city: "Casablanca", price: '200€', discount: '10% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Rabat' },
  { id: 4, imgSrc: img4, city: "Casablanca", price: '350€', discount: '15% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdPool className="icon" />, label: 'Pool' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Agadir' },
  { id: 5, imgSrc: img5, city: "Casablanca", price: '320€', discount: '25% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Chefchaouen' },
  { id: 6, imgSrc: img6, city: "Desert Oasis", price: '280€', discount: '18% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Desert Oasis' },
  { id: 7, imgSrc: img7, city: "Fez", price: '360€', discount: '12% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdPool className="icon" />, label: 'Pool' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Fez' },
  { id: 8, imgSrc: img8, city: "Tangier", price: '340€', discount: '22% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Tangier' },
  { id: 9, imgSrc: img9, city: "Essaouira", price: '390€', discount: '17% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Essaouira' },
  { id: 10, imgSrc: img8, city: "Essaouira", price: '30€', discount: '50% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Essaouira' }

];
const Body = ({ onBooking }) => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(5000);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const results = []; 
  const cities = Array.from(new Set(offers.map(offer => offer.city)));

  const handleSearch = () => {
    const results = offers.filter(offer => offer.city.toLowerCase() === destination.toLowerCase());
    setSearchResults(results);
    setShowResults(results.length > 0);
  };

  const handleInputChange = (e) => {
    setDestination(e.target.value);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  const onAddToFavorite = (offer) => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = existingFavorites.some(favorite => favorite.id === offer.id);

    if (!isFavorite) {
      existingFavorites.push(offer);
      localStorage.setItem('favorites', JSON.stringify(existingFavorites));
      alert(`Offer ${offer.id} in ${offer.city} has been added to your favorites!`);
      // Send the favorite to the backend to save it in MongoDB (if applicable)
    } else {
      alert(`Offer ${offer.id} in ${offer.city} is already in your favorites!`);
    }
  };

  const handleAddToFavorite = (offer) => {
    onAddToFavorite(offer);
  };

  

  return (
    <>
      <div className="body-container">
        <video className="video" width="100%" muted autoPlay loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="homeContent">
          <div className="textOiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle">Search your Holiday.</h1>
          </div>
          <div className="cardDiv">
            {/* Input Fields */}
            <div className="inputFields">
              {/* Existing input fields */}
              <div className="destinationInput">
                <label htmlFor="city">Search your destination</label>
                <div className="Input">
                  <input 
                    type="text" 
                    placeholder="Enter the name ..." 
                    value={destination}
                    onChange={handleInputChange}
                    list="cities"
                  />
                  <GrLocation className="icon"/>
                  <datalist id="cities">
                    {cities.map((city, index) => (
                      <option key={index} value={city} />
                    ))}
                  </datalist>
                </div>
              </div>
              <div className="dateInput">
                <label htmlFor="date">Select your date:</label>
                <div className="Input">
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="priceInput">
                <div className="label_total">
                  <label htmlFor="price">Max price:</label>
                  <h3 className="total">{price}€</h3>
                </div>
                <div className="input">
                  <input 
                    type="range" 
                    max="5000" 
                    min="100" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="searchButton" onClick={handleSearch}>Search</button>
          </div>
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaFacebook className="icon" />
            <FaWhatsapp className="icon" />
          </div>
        </div>
      </div>

      {showResults && (
        <div className="searchResultsContainer">
          <button className="closeResultsButton" onClick={handleCloseResults}>Close</button>
          {searchResults.length === 0 ? (
            <div className="searchResult">
              <h2>No offers available for {destination}</h2>
            </div>
          ) : (
            searchResults.map((result) => (
              <div key={result.id} className="searchResult">
                <h2>Offer in {result.city}:</h2>
                <div className="offer-details">
                  <img src={result.imgSrc} alt={result.city} className="offer-image" />
                  <p>Price: {result.price}</p>
                  <p>Discount: {result.discount}</p>
                  <p>Status: {result.status}</p>
                  <div className="amenities">
                    {result.amenities.map((amenity, index) => (
                      <div key={index} className="amenity">
                        {amenity.icon}
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="location">Location: {result.location}</p>
                  <div className="result-actions">
                    <button className="favorite-button" onClick={() => handleAddToFavorite(result)}>Add to Favorite</button>
                    <button className="booking-button" onClick={() => onBooking(result)}>Booking</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

    
    </>
  );
}

export default Body;
import React, { useState } from "react";
import "./offer_css.scss";
import { MdKingBed, MdPool, MdBathtub, MdLocalParking, MdLocationPin } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

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
  { id: 1, imgSrc: img, price: '400€', discount: '20% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdPool className="icon" />, label: 'Pool' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Marrakech' },
  { id: 2, imgSrc: img2, price: '300€', discount: '30% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Casablanca' },
  { id: 3, imgSrc: img3, price: '200€', discount: '10% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Rabat' },
  { id: 4, imgSrc: img4, price: '350€', discount: '15% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdPool className="icon" />, label: 'Pool' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Agadir' },
  { id: 5, imgSrc: img5, price: '320€', discount: '25% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Chefchaouen' },
  { id: 6, imgSrc: img6, price: '280€', discount: '18% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Desert Oasis' },
  { id: 7, imgSrc: img7, price: '360€', discount: '12% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdPool className="icon" />, label: 'Pool' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Fez' },
  { id: 8, imgSrc: img8, price: '340€', discount: '22% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Tangier' },
  { id: 9, imgSrc: img9, price: '390€', discount: '17% Off', status: 'For Rent', amenities: [{ icon: <MdKingBed className="icon" />, label: 'Beds' }, { icon: <MdBathtub className="icon" />, label: 'Bath' }, { icon: <FaWifi className="icon" />, label: 'Wi-fi' }, { icon: <MdLocalParking className="icon" />, label: 'Parking' }], location: '450 Vine #120, Essaouira' }
];

const Offer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(offers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOffers = offers.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secInfo">
          <h2 className="secTitle">Special Offers</h2>
          <p>From historical cities to natural spectacles, come see the best of the world!</p>
        </div>

        <div className="mainContent">
          <div className="offersGrid">
            {currentOffers.map(({ id, imgSrc, price, discount, status, amenities, location }) => (
              <div key={id} className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt="Offer" />
                  <span className="discount">{discount}</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">{status}</span>
                  </div>

                  <div className="amenities flex">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="singleAmenity flex">
                        {amenity.icon}
                        <small>{amenity.label}</small>
                      </div>
                    ))}
                  </div>

                  <div className="location flex">
                    <MdLocationPin className="icon" />
                    <small>{location}</small>
                  </div>

                  <button className="btn flex">
                    View More
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="revealButton left" onClick={handlePrevPage} disabled={currentPage === 1}>
              <BsArrowLeftShort />
            </button>
            <button className="revealButton right" onClick={handleNextPage} disabled={currentPage === totalPages}>
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

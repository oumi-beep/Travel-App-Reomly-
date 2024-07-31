import {React,useState}  from "react";
import "./Popular_css.scss";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import Mar from "./image/Marrakech.jpg";
import Casablanca from "./image/Casablanca.jpg";
import Rabat from "./image/Rabat.jpg";
import Chefchaouen from "./image/Chefchaouen.jpg";
import Fes from "./image/Fes.jpg";
import Agadir from "./image/Agadir.jpg";
import Tanger from "./image/Tanger.jpg";
import Desert_Oasis from "./image/Desert_Oasis.jpg";


const Data =[
  {
    id:1,
    imgSrc:Mar,
    destTitle:'Marrakech',
    location:'Morocco',
    grade:'Souks, Culture, Traditional food'

  },
  {
    id:2,
    imgSrc:Casablanca,
    destTitle:'Casablanca',
    location:'Morocco',
    grade:'City walks, Restaurants, Shopping '

  },
  {
    id:3,
    imgSrc:Rabat,
    destTitle:'Rabat',
    location:'Morocco',
    grade:'Old Town, City walks, Culture'

  },
  {
    id:4,
    imgSrc:Tanger,
    destTitle:'Tanger',
    location:'Morocco',
    grade:' Old Town, City walks, Beach walks'

  },
  {
    id:5,
    imgSrc:Agadir,
    destTitle:'Agadir',
    location:'Morocco',
    grade:'Beach walks, Sunny weather, Beaches'

  },
  {
    id:6,
    imgSrc:Fes,
    destTitle:'Fes',
    location:'Morocco',
    grade:'Old Town, Culture, History '

  },
  {
    id:7,
    imgSrc:Chefchaouen,
    destTitle:'Chefchaouen',
    location:'Morocco',
    grade:'Photography, Scenery, Old Town '

  },
  {
    id:8,
    imgSrc:Desert_Oasis,
    destTitle:'Desert Oasis',
    location:'Morocco',
    grade:'Photography, Scenery, Old Town '

  },
  {
    id:9,
    imgSrc:Chefchaouen,
    destTitle:'Essaouira',
    location:'Morocco',
    grade:'Coastal town, Fortifications, Beach'
  },
  {
    id:10,
    imgSrc:Rabat,
    destTitle:'Ouarzazate',
    location:'Morocco',
    grade:'Film studios, Desert, History'
  },
  {
    id:11,
    imgSrc:Desert_Oasis,
    destTitle:'Merzouga',
    location:'Morocco',
    grade:'Desert, Camel rides, Dunes'
  },
  {
    id:12,
    imgSrc:Tanger,
    destTitle:'Ifrane',
    location:'Morocco',
    grade:'Mountain, Skiing, European architecture'
  },
  {
    id:13,
    imgSrc:Rabat,
    destTitle:'Meknes',
    location:'Morocco',
    grade:'Imperial city, History, Architecture'
  },
  {
    id:14,
    imgSrc:Fes,
    destTitle:'Asilah',
    location:'Morocco',
    grade:'Coastal town, Art, Beaches'
  },
  {
    id:15,
    imgSrc: Desert_Oasis,
    destTitle:'Dakhla',
    location:'Morocco',
    grade:'Water sports, Lagoon, Desert'
  },
  {
    id:16,
    imgSrc:Fes,
    destTitle:'El Jadida',
    location:'Morocco',
    grade:'Portuguese architecture, Beach, History'
  }
];
const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 8) % Data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 8 + Data.length) % Data.length);
  };

  const currentData = Data.slice(currentIndex, currentIndex + 8);

  return (
    <section className='popular section container'>
      <div className="secContainer cont">
        <div className="secHeader flex ">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination ...</h2>
            <p>From historical cities to natural spectacles, come see the best of the world!</p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" onClick={handlePrev} />
            <BsArrowRightShort className="icon rightIcon" onClick={handleNext} />
          </div>
        </div>

        <div className="mainContent grid">
          {currentData.map(({ id, imgSrc, destTitle, location, grade }) => (
            <div className="singleDestination" key={id}>
              <div className="destImage">
                <img src={imgSrc} alt="Image title" />
                <div className="overLayInfo">
                  <h3>Welcome to {destTitle}</h3>
                  <p>{grade}.</p>
                  <BsArrowRightShort className='icon' />
                </div>
              </div>

              <div className="destFooter">
                <div className="number">0{id}</div>
                <div className="destText flex">
                  <h6>{destTitle}</h6>
                  <span className="flex">
                    <span className="dot">
                      <BsDot className="icon" /> {location}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
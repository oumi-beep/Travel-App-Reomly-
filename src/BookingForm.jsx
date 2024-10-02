import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm.jsx';
import AccommodationForm from './AccommodationForm.jsx';
import PaymentForm from './PaymentForm.jsx';
import Confirmation from './Confirmation.jsx';
import './BookingForm.scss';

const BookingForm = ({ onClose }) => { // Accept onClose prop
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: 1,
    checkInDate: '',
    checkOutDate: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log('Booking Confirmed:', formData);
    alert('Booking confirmed!');
    setStep(1); // Reset to step 1 after submission
  };

  // Determine the component to render based on the current step
  let currentForm;
  switch (step) {
    case 1:
      currentForm = <PersonalInfoForm formData={formData} handleChange={handleChange} nextStep={nextStep} />;
      break;
    case 2:
      currentForm = <AccommodationForm formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      break;
    case 3:
      currentForm = <PaymentForm formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      break;
    case 4:
      currentForm = <Confirmation formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />;
      break;
    default:
      currentForm = <h2>Booking Form</h2>;
  }

  return (
    <div className="booking-form-content">
      <button className="close-button" onClick={onClose}>Close</button>
      {currentForm}
    </div>
  );
  
};

export default BookingForm;

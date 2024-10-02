import React from 'react';
import './confirmation.scss'; // Ensure to import the SCSS file

const Confirmation = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className="confirmation">
      <h2>Step 4: Confirmation</h2>
      <p>Please review your booking details before confirming:</p>
      <ul>
        <li><strong>Name:</strong> {formData.firstName} {formData.lastName}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Guests:</strong> {formData.guests}</li>
        <li><strong>Check-in:</strong> {formData.checkInDate}</li>
        <li><strong>Check-out:</strong> {formData.checkOutDate}</li>
        <li><strong>Payment Card:</strong> **** **** **** {formData.cardNumber.slice(-4)}</li>
      </ul>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
};

export default Confirmation;

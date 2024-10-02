import React from 'react';
import './AccommodationForm.scss';

const AccommodationForm = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="accommodation-form">
      <h2>Step 2: Accommodation Details</h2>
      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Check-in Date:
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          required
        />
      </label>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default AccommodationForm;

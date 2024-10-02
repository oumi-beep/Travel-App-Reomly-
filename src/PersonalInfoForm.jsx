import React from 'react';
import './PersonalInfoForm.scss';

const PersonalInfoForm = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="personal-info-form">
      <h2>Step 1: Personal Information</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PersonalInfoForm;

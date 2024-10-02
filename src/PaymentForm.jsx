import React from 'react';
import './PaymentForm.scss'; // Ensure to import the SCSS file

const PaymentForm = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="payment-form">
      <h2>Step 3: Payment Information</h2>
      <label>
        Credit Card Number:
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Expiry Date:
        <input
          type="month"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
      </label>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PaymentForm;

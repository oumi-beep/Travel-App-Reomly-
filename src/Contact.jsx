import  { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact_css.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailData = {
      from_name: formData.name,    
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send('service_c3pdutg', 'template_87o618k', emailData, 'pch_sJn9NtjmaxAFb')
      .then((response) => {
        console.log('Success:', response);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      }, (error) => {
        console.log('Error:', error);
        setStatus('Failed to send message.');
        console.error('Error details:', error);
      });
  };

  return (
    <section className="contact container section">
      <div className="secContainer">
        <div className="secInfo">
          <h2 className="secTitle">Contact Us</h2>
          <p>We&apos;d love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>

        <div className="mainContent grid">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn">Send</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

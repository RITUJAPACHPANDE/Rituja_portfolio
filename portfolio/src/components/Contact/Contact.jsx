import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title-text">Contact Me</h2>
        <div className="title-underline"></div>
      </div>

      <div className="contact-grid">
        {/* Contact info side */}
        <div className="contact-info-panel">
          <div className="info-intro-card">
            <h3>Let's start a conversation</h3>
            <p>I am looking for full-time Software Developer / Java Developer roles. If you have an exciting opening, want to discuss projects, or just want to connect, feel free to drop a message!</p>
          </div>

          <div className="info-details-list">
            <div className="info-detail-item">
              <span className="info-detail-icon"><FaEnvelope /></span>
              <div className="info-detail-text">
                <h4>Email</h4>
                <a href="mailto:ritujapachpane12@gmail.com">ritujapachpane12@gmail.com</a>
              </div>
            </div>

            <div className="info-detail-item">
              <span className="info-detail-icon"><FaPhoneAlt /></span>
              <div className="info-detail-text">
                <h4>Phone</h4>
                <a href="tel:+916268635941">+91 6268635941</a>
              </div>
            </div>

            <div className="info-detail-item">
              <span className="info-detail-icon"><FaMapMarkerAlt /></span>
              <div className="info-detail-text">
                <h4>Location</h4>
                <span>Saikheda Khurd, Nepanagar, Madhya Pradesh, India</span>
              </div>
            </div>

            <div className="info-detail-item">
              <span className="info-detail-icon"><FaLinkedin /></span>
              <div className="info-detail-text">
                <h4>LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/rituja-pachpande-25771a316" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Rituja Pachpande
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form side */}
        <div className="contact-form-panel">
          <form className="glass-contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send Message</h3>
            
            <div className="input-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required 
                placeholder=" "
                id="form-name"
              />
              <label htmlFor="form-name">Your Name</label>
            </div>

            <div className="input-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder=" "
                id="form-email"
              />
              <label htmlFor="form-email">Your Email</label>
            </div>

            <div className="input-group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required 
                placeholder=" "
                rows="5"
                id="form-msg"
              />
              <label htmlFor="form-msg">Your Message</label>
            </div>

            <button type="submit" className="form-submit-btn">
              {submitted ? (
                <span>Sent Successfully!</span>
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

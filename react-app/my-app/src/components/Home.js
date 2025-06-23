import React from 'react';
import './Home.css';
import libraryImage from '../asset/lib1.jpg'

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        Library Management System
        <div className="login">
            <a href="#home">Home</a>&nbsp;
            <a href="#about">About Us</a>&nbsp;
            <a href="#services">Services</a>&nbsp;
            <a href="#contact">Contact Us</a>&nbsp;
            <a href="/login">Login</a>
        </div>
      </nav>

      <main id="home" >
        <h2>Library is a treasure house<br /> of knowledge</h2>
      </main>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={libraryImage} alt="Library" />
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p> A library is a collection of books, and possibly other materials and media, that is accessible for use by its members and members of allied institutions. Libraries provide physical (hard copies) or digital (soft copies) materials, and may be a physical location, a virtual space, or both. A library's collection normally includes printed materials which may be borrowed, and usually also includes a reference section of publications which may only be utilized inside the premises. Resources such as commercial releases of films, television programmes, other video recordings, radio, music and audio recordings may be available in many formats. These include DVDs, Blu-rays, CDs, cassettes, or other applicable formats such as microform. They may also provide access to information, music or other content held on bibliographic databases.</p>
            
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Services We Offer</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Online Book Lending</h3>
            <p>Borrow e-books for a specified period through our digital platform.</p>
          </div>
          <div className="service-card">
            <h3>Digital Resources</h3>
            <p>Access a wide range of digital materials including e-books, journals, and more.</p>
          </div>
          <div className="service-card">
            <h3>Online Catalog Search</h3>
            <p>Advanced search options to locate books and materials by title.</p>
          </div>
        </div>
      </section>

      <section id="contact" >
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information:</h3>
            <div className='info'>
            <p><strong>Address:</strong><br />123 Library Street...</p>
            <p><strong>Phone:</strong><br />Main Office: +1 (123) 456-7890</p>
            <p><strong>Email:</strong><br />info@examplelibrary.com</p>
         
            </div>
             </div>
          <div className="feedback">
            <h3>Feedback Form:</h3>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>

      <footer >
        <p>&copy; 2024 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

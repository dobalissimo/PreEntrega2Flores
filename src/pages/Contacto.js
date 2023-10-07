import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import ContactForm from '../components/conctactform/ContactForm'; // Import the ContactForm component

function Contacto() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        {/* Navbar content */}
        {/* ... */}
      </nav>

      {/* Main content */}
      <main>
        <ContactForm /> {/* Render the ContactForm component */}
      </main>
    </div>
  );
}

export default Contacto;

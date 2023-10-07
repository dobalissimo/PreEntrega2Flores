import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  return (
    <Form>
      <h1>Contactanos</h1>
      <div className="main-block contacto">
        <div className="left-part">
          {/* Icons */}
          <i className="fas fa-envelope"></i>
          <i className="fas fa-at"></i>
          <i className="fas fa-mail-bulk"></i>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control type="text" placeholder="Nombre y apellido" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="tel" placeholder="Telefono" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;

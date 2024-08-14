import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ProductImage from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const firstName = "Sarah"; // Add your first name here or leave it empty
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Card style={{ width: '18rem' }} className="text-center">
        <Card.Body>
          <ProductImage />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3 text-center">
        <h4>{greeting}</h4>
        {firstName && (
          <img
            src="https://images.unsplash.com/photo-1496433998859-da21e208bd42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Personalized"
            className="mt-2"
          />
        )}
      </div>
    </Container>
  );
};

export default App;

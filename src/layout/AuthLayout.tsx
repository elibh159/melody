import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Register from "../components/register";
import Login from "../components/login";

const AuthLayout: () => JSX.Element = () => {
  return (
    <Container fluid className='text-center p-3'>
      <h1>🎶Melody🎶</h1>
      <hr/>
      <Row className='justify-content-center align-items-center m-4 '>
        <Col md={6} className="order-2">
          <Register />
        </Col>
        <Col md={6} className="order-1">
          <Login />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
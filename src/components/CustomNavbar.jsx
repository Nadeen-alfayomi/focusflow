import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

export const CustomNavbar = () => {
  return (
    <Navbar bg="white" className="border-bottom shadow-sm py-2">
      <Container className="d-flex justify-content-between align-items-center">

        <Navbar.Brand href="#" className="fw-bold fs-4 text-maroon d-flex align-items-center gap-2">
          FocusFlow ✨
        </Navbar.Brand>

       
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill fs-7 d-none d-sm-inline">
            v1.0
          </span>
          
     
          <a 
            href="https://github.com/nadeen.alfayomi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
          >
            <span>GitHub</span>
            <span style={{ fontSize: "1rem" }}>↗</span>
          </a>
        </div>
      </Container>
    </Navbar>
  );
};
import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

export const CustomNavbar = () => {
  return (
    <Navbar bg="white" className="border-bottom shadow-sm py-2">
      <Container className="d-flex justify-content-between align-items-center">
        {/* الشعار واسم التطبيق */}
        <Navbar.Brand href="#" className="fw-bold fs-4 text-maroon d-flex align-items-center gap-2">
          FocusFlow ✨
        </Navbar.Brand>

        {/* زر GitHub ورقم النسخة */}
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill fs-7 d-none d-sm-inline">
            v1.0
          </span>
          
          {/* رابط حسابك أو مشروعك على GitHub */}
          <a 
            href="https://github.com/YOUR_GITHUB_USERNAME" 
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
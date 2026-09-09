import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
// 1. استيراد الصورة من مجلد assets (تأكدي من صيغة الملف png أو jpg)
import logoImg from '../assets/logo.png'; 

export const CustomNavbar = () => {
  return (
    <Navbar bg="white" className="border-bottom shadow-sm py-2">
      <Container className="d-flex justify-content-between align-items-center">

      
<div className="d-flex align-items-center gap-2">
  <img 
    src={logoImg} 
    alt="FocusFlow Logo" 
    style={{ 
      height: '35px',         /* تحديد ارتفاع مناسب وصغير للناف بار */
      width: 'auto',          /* الحفاظ على النسبة */
      objectFit: 'contain'
    }} 
  />
  <span style={{ 
    fontWeight: '700', 
    fontSize: '1.25rem', 
    color: '#5c061c', 
    letterSpacing: '-0.5px' 
  }}>
    FocusFlow
  </span>
</div>

        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill fs-7 d-none d-sm-inline">
            v1.0
          </span>
          
          <a 
            href="https://github.com/nadeen-alfayomi" 
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
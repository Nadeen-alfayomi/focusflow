import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Habits from "./pages/Habits";
import { CustomNavbar } from "./components/CustomNavbar";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <CustomNavbar />

      <main className="flex-grow-1 p-3 p-md-4">
        {/* المكون الرئيسي الذي يحتوي على البطاقات والجداول */}
        <Habits />
      </main>

      <footer className="bg-white border-top py-3 mt-auto text-center">
        <div className="container">
          <div className="mb-2">
            <span 
              className="badge px-3 py-2 rounded-pill fw-normal" 
              style={{ backgroundColor: "#fce8eb", color: "#7a0c2e", fontSize: "0.8rem" }}
            >
              🌱 My First React Project
            </span>
          </div>

          <p className="mb-0 text-muted fs-7">
            © {new Date().getFullYear()} <strong>FocusFlow</strong> — Built with ❤️ by{" "}
            <span className="fw-bold text-dark">Nadeen M. Alfayomi</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
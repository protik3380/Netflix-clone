import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://lh3.googleusercontent.com/proxy/CgmRf3Z2N3bzHxZV2eY1mJRBygFRzg2Po-0GhyQ45icom8_pYu2pTIr78T10TWMr0SZY76UX9Up6HoUXq_MJAH-sTzIF6So0VgkzuJJiCWC4WWEt7pw"
        alt="Netflix Logo"
      />

      <img
        className="nav__avater"
        src="https://toppng.com/uploads/preview/netflix-logo-png-11593869495odtwahwmzn.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;

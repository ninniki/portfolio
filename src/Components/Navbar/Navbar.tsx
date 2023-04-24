import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <nav className="navbar">
        <div id="logo">
          <span className="logo">PORTFOLIO</span>
          </div>
          <div className="navs">
            <a
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              HOME
            </a>
            <a
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              SKILLS
            </a>
            <a
              href="#works"
              className={
                activeLink === "works" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("works")}
            >
              WORKS
            </a>
          </div>
        
      </nav>
    </Router>
  );
};

export default Navbar;

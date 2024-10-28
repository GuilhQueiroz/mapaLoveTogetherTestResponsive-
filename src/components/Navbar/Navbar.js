import React from 'react';
import './Navbar.css';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#" className="highlight">Por que apoiar?</a></li>
        <li><a href="#">EN</a></li>
      </ul>
      <div className="menu-icon" onlclick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;

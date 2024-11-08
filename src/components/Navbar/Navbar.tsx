import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        < FaSearch />
      </button>
      <div className="nav-links">
        <a href="#">Товары</a>
        <a href="#">Склады</a>
        <a href="#">О системе</a>
      </div>
      <div className="user-profile">
        <a href="#">Личная страница пользователя</a>
      </div>
    </nav>
  );
};

export default Navbar;

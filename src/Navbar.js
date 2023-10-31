import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import your CSS for styling

function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ top: visible ? '0' : '-54px' }}>
      <ul className='nav-name'>
        <li className="nav-item-name">Jeffrey Bon Auster A. Villasenor</li>
      </ul>
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#aboutme">About me</a></li>
        <li className="nav-item"><a href="#contactinformation">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

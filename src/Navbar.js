import React from 'react';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    padding: '2px 5px',
    color: '#FFF5C0',
  };

  return (
    <nav>
      <ul style={navStyle}>
        <li><a style={linkStyle} href="#About_Photo">About</a></li>
        <li><a style={linkStyle} href="#experience">Experience</a></li>
        <li><a style={linkStyle} href="#Project_Landing">Work</a></li>
        <li><a style={linkStyle} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

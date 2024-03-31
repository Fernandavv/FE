import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo2.png'; // Importe a imagem do logotipo
import navicon1 from '../assets/nav-icon1.png'; // Importe a imagem do logotipo
import navicon2 from '../assets/nav-icon2.webp'; // Importe a imagem do logotipo


const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remover o listener do evento de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" /> {/* Use a imagem do logotipo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>
              Home
            </Nav.Link>
            <Nav.Link href="#sobre" className={`nav-link ${activeLink === 'sobre' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('sobre')}>
              Sobre
            </Nav.Link>
            <Nav.Link href="#projetos" className={`nav-link ${activeLink === 'projetos' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('projetos')}>
              Projetos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href='#'><img src={navicon1} alt=""></img></a>
              <a href='#'><img src={navicon2} alt=""></img></a>
              <a href='#'><img src={navicon2} alt=""></img></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Conectar</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

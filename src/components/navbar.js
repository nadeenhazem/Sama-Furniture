import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/Home.css'
import { FaSistrix, FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";

import { FiMenu } from "react-icons/fi";
function Navbaritem() {
    
    return (
        <>
          
         
       <Navbar bg="light" expand="lg">
      <Container>
      <Nav id='nav-content1'>
          <Nav.Link href="/" id='nav-Link1'>Home</Nav.Link>
            <Nav.Link href="/newfurnature "id='nav-Link1'>New</Nav.Link>
            <Nav.Link href="#Categoure"id='nav-Link1'>Categoure</Nav.Link>
            <Nav.Link href="#pricing"id='nav-Link1'>Contact</Nav.Link>
            
          </Nav>
        
        <Navbar.Brand id='appName'>S<b>/\</b>M<b>/\</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <FaSistrix className='nav-icons'/>
            <FaRegHeart className='nav-icons'/>
            <BsCart4 className='nav-icons'/>
            
            <button className='lang-btn'><GiWorld/>Language</button>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </>
    )
}

export default Navbaritem;

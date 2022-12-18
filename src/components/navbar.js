import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Sass/Nav.scss'
import {  FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";

function Navbaritem() {
  const [datafetch, setDataFetch] = useState([])
  useEffect(() => {
    fetchData()

  }, [])
  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/Cart');
    setDataFetch(await res.json())
  }


  
  return (
    <>


      <Navbar bg="light" expand="lg">
        <Container>
          <Nav id='nav-content1'>
            <Link to={'/'} id='nav-Link1'>Home</Link>
            <Link to={'/newfurnature'} id='nav-Link1'>New</Link>
            <Link to={'/Categoure'} id='nav-Link1'>Categoure</Link>


          </Nav>

          <Navbar.Brand id='appName'>S<b>/\</b>M<b>/\</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             

              <Link to={'/fav'} style={{ color: 'black' }}><FaRegHeart className='nav-icons' /></Link>
              <Link to={'/Cart'} style={{ color: 'black' }}><BsCart4 className='nav-icons' />
              </Link>

              <span style={{ backgroundColor: ' #B4CDE6', marginLeft: '-15px', marginTop: '-3px', height: '20px', padding: '0px 5px', borderRadius: '50px', textAlign: 'center', maxWidth: '20px' }}>
                {datafetch.length}</span>


              <Form className="d-flex" id='search-form'>
                <InputGroup >
                  <Form.Control
                    type="search"
                    style={{ borderRadius: '20px' }}
                    aria-label="search"
                    className="search-input"
                  />
                  <div className="search-icon">
                    <CiSearch />
                  </div>
                  <label className='search-label'>  search</label>

                </InputGroup>
              </Form>


              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Navbaritem;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/Home.css'
import { FaSistrix, FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import {  GiWorld } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useEffect ,useState } from 'react';

function Navbaritem() {
  // const Count=localStorage.getItem('cartcount')
  const [datafetch,setDataFetch]= useState([])
    useEffect(()=>{
        fetchData()
  
    },[])
    const fetchData=async()=>{
        const res=await fetch('http://localhost:5000/bed');
        setDataFetch(await res.json())    
    } 


    const AllCartitems=datafetch.filter(Cartitem=>{
        return Cartitem.addToCart === true;
      })
      console.log(AllCartitems.length)
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
            <Link to={'/fav'} style={{ color: 'black'}}><FaRegHeart className='nav-icons'/></Link>
            <Link to={'/Cart'} style={{ color: 'black'}}><BsCart4 className='nav-icons'/>
            </Link>
            <span style={{backgroundColor:' #B4CDE6',marginLeft:'-15px',marginTop:'-3px',height:'20px',padding:'0px 5px',borderRadius:'50px',textAlign:'center',maxWidth:'20px'}}>
 {AllCartitems.length}</span>
            
            
            
            <button className='lang-btn'><GiWorld/>Language</button>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </>
    )
}

export default Navbaritem;

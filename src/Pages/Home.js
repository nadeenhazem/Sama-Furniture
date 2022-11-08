import React from 'react'
import NewFurnature from './NewFurnature';
import {MDBContainer, 
    MDBCol, MDBRow, MDBBtn, 
   }
     from 'mdb-react-ui-kit';
     import sofa from '../Imgs/sofa3.png'
     import '../styling/Home.css'
     import Categoure from './Categoure';

function Home() {
  return (
    <>
    <MDBContainer fluid className="p-3 my-0 h-custom" style={{backgroundColor:'#D8D8D8'}}>

      <MDBRow>

        <MDBCol col='10' md='6'className='Home-img'>
     
          <img src={sofa} className="img-fluid"  />
        </MDBCol>

        <MDBCol col='4' md='6' style={{paddingLeft:'10%'}}>
          <div className="divider d-flex align-items-center my-4" style={{}}>
            
            <p className="text-center  mx-5 mb-0" style={{fontSize:'20px',backgroundColor:' #B4CDE6',borderRadius:'100%'}}>Sofa<br/>Collection<br/>2022</p>
            </div>
            <br/>
            <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-5 mb-0" style={{fontSize:'50px'}}>Wood Cloth <br/>Sofa</p>
          </div>


          

          <div className='text-center text-md-start mt-4 pt-5' style={{paddingLeft:'10%'}}>
            <MDBBtn id='Home-btn' size='lg'>Go Shop Now</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

      
     
    </MDBContainer>
    <NewFurnature/>

    <Categoure/>
    <br></br>
    <br></br>
    </>
  )
}

export default Home
 
import React from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import sofa1 from '../Imgs/sofa1.png'
import bed from '../Imgs/bed.png'
import table1 from '../Imgs/table1.png'
import capin from '../Imgs/capin (3).png';
import chair1 from '../Imgs/chair1.png';
import tree from '../Imgs/tree.png'
import lamp from '../Imgs/lamp.png'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Categoure() {
  const img = [sofa1, lamp, tree, capin, bed, chair1, table1];
  const catName = ['Sofa', 'lights', 'Tree', 'Capin', 'Bed', 'Chair', 'Table']
  const backColor = ['orange', ' #98b2cc', ' #B7B7B7', '#A1C298', '#7882A4', '#7D9D9C', 'black'];
  const length = img.length
  return (
    <>


      <Container className='container-cag' id='Categoure'>
      <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>-- Our Category</h1>
      <br></br>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length }).map((_, idx) => (

            <Col key={idx} >

              <Card className='cag-img' style={{ border: '20px solid whitesmoke', backgroundColor: 'whitesmoke' }}>
                <Card.Title style={{ fontSize: '40px', color: backColor[idx] }}>{catName[idx]}
                </Card.Title>
                <div key={idx} style={{ borderRadius: '50%' }} >

                  <a href='https://play.anghami.com/mymusic' >
                    <Card.Img variant="top" src={img[idx]} style={{ height: '300px' }} />

                  </a>
                </div>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Categoure

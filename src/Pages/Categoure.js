import React from 'react'

import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Categoure() {

  const [datafetch, setDataFetch] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/categoure');
        setDataFetch(await res.json())
    }

  return (
    <>


      <Container className='container-cag' id='Categoure'>
      <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>-- Our Category --</h1>
      <br></br>
        <Row xs={1} md={3} className="g-4">
          {datafetch.map((items) => (

            <Col key={items.id} >

              <Card className='cag-img' style={{ border: '20px solid whitesmoke', backgroundColor: 'whitesmoke' }}>
                <Card.Title style={{ fontSize: '40px', color: items.nameColor }}>{items.name}
                </Card.Title>
                <div key={items.id} style={{ borderRadius: '50%' }} >

                  <Link to='/beds' >
                    <Card.Img variant="top" src={items.img} style={{ height: '300px' }} />

                  </Link>
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

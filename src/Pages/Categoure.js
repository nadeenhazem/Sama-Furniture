import React from 'react'

import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategory } from '../Redux/Slices/CategorySlice';
import { useSelector, useDispatch } from 'react-redux';
function Categoure() {

  const Category = useSelector(state => state.Category.data.payload);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  return (
    Category == null ? 'null' :
      <>
        <Container className='container-cag' id='Categoure'>
          <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>-- Our Category --</h1>
          <br></br>
          <Row xs={1} md={3} className="g-4">
            {Category.map((items) => (
              <section className=" my-5 " key={items.id} style={{ maxWidth: '30rem' }}>
                <Col key={items.id} >

                  <Card className='cag-img' style={{ border: '20px solid whitesmoke', backgroundColor: 'whitesmoke' }}>
                    <Card.Title style={{ fontSize: '40px', color: items.nameColor }}>{items.name}
                    </Card.Title>
                    <div key={items.id} style={{ borderRadius: '50%' }} >

                      <Link to={{
                        pathname: `/OneCategoury/${items.name}`,
                        state: { items }
                      }}>
                        <Card.Img variant="top" src={items.img} style={{ height: '300px' }} />

                      </Link>
                    </div>

                  </Card>
                </Col>
              </section>
            ))}
          </Row>
        </Container>
      </>
  )
}

export default Categoure

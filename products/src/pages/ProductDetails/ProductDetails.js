import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import productsdata from '../../assets/productsdata'
import { useParams } from 'react-router-dom';



  const ProductDetails=()=> {
    const products= productsdata.products
    let id = useParams();
    console.log(parseInt(id.productid))
    const desiredProduct= products.find(product => product.id === parseInt(id.productid))
  return (
    <Container>
    <Row>
      <Col>
        <img src={desiredProduct.images[0]} alt="cover" style={{ height: '300px' }} className="img-fluid m-1" />
      </Col>
    </Row>
    <Row className='m-2'>
      <Col>
        <img src={desiredProduct.images[1]} alt="first" style={{ height: '300px', width:'300px' ,marginRight:"10px" }} className="img-fluid border" />
      </Col>
      <Col>
        <img src={desiredProduct.images[2]} alt="second" style={{ height: '300px', width:'300px' ,marginRight:"10px" }} className="img-fluid border" />
      </Col>
      <Col>
        <img src={desiredProduct.images[3]} alt="third" style={{  height: '300px', width:'300px' }} className="img-fluid border" />
      </Col>
    </Row>
    <Row>
      <p>Name: {desiredProduct.title}</p>
      <p>Category: {desiredProduct.category} </p>
      <p>Price: {desiredProduct.price}</p>
    </Row>
  </Container>
  )
}
export default ProductDetails
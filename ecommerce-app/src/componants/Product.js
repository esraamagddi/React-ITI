
import Button from './Button';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product,showButton}=props;
  return (
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={product.thumbnail} fluid alt={product.title} style={{ height: '200px' }} />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>
            {product.description}
        </MDBCardText>
        {showButton && (
  <Link to={`products/${product.id}`}>
    <Button color={"black"} name={"details"} />
  </Link>
)}

     </MDBCardBody>
    </MDBCard>
  );
}
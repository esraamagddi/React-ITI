import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const CardComponent = ({ title, text, id, img }) => {
  return (
    <MDBCard style={{ height: 400, marginBottom: '20px' }}>
      <MDBCardImage src={img} alt={title} position='top' style={{ height: 250 }} />
      <MDBCardBody>
        {title && <MDBCardTitle>{title}</MDBCardTitle>}
        {text && <MDBCardText>{text}</MDBCardText>}
        {id && (
          <a href={`/${id}`}>
            <MDBBtn color='primary'>Go Details</MDBBtn>
          </a>
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export default CardComponent;

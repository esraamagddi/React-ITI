import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const ButtonComponent = ({ onClick, children, variant }) => {
  return (
    <MDBBtn onClick={onClick} color={variant}>
      {children}
    </MDBBtn>
  );
};

export default ButtonComponent;

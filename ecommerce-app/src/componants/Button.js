import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Button(props) {
  return (
    <MDBBtn rounded className='mx-2' color={props.color} onClick={props.onClick}>
      {props.name}
    </MDBBtn>
  );
}

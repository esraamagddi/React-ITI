import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
function Input(props) {
    return <MDBInput name={props.name} value={props.value} onChange={props.onchange} type={props.type} />;
}

export default Input;




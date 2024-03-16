import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

export default function Skills() {
  return (
    <div style={{ backgroundColor: '#343a40', padding: '20px'}}>
      <h2 style={{ color: 'white' }}>Skills</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 0.5, textAlign: 'right', marginRight: '10px', color: 'white' }}>HTML:</div>
        <MDBProgress style={{ flex: 3, marginBottom: '1rem' }}>
          <MDBProgressBar striped width='70' bgColor='success' valuemin={0} valuemax={100} />
        </MDBProgress>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 0.5, textAlign: 'right', marginRight: '10px', color: 'white' }}>CSS:</div>
        <MDBProgress style={{ flex: 3, marginBottom: '1rem' }}>
          <MDBProgressBar striped width='60' bgColor='info' valuemin={0} valuemax={100} />
        </MDBProgress>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 0.5, textAlign: 'right', marginRight: '10px', color: 'white' }}>JavaScript:</div>
        <MDBProgress style={{ flex: 3, marginBottom: '1rem' }}>
          <MDBProgressBar striped width='80' bgColor='warning' valuemin={0} valuemax={100} />
        </MDBProgress>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 0.5, textAlign: 'right', marginRight: '10px', color: 'white' }}>React:</div>
        <MDBProgress style={{ flex: 3, marginBottom: '1rem' }}>
          <MDBProgressBar striped width='75' bgColor='primary' valuemin={0} valuemax={100} />
        </MDBProgress>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 0.5, textAlign: 'right', marginRight: '10px', color: 'white' }}>Node.js:</div>
        <MDBProgress style={{ flex: 3, marginBottom: '1rem' }}>
          <MDBProgressBar striped width='50' bgColor='secondary' valuemin={0} valuemax={100} />
        </MDBProgress>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 0.5, textAlign: 'right', marginRight: '10px', color: 'white' }}>MongoDB:</div>
        <MDBProgress style={{ flex: 3, marginBottom: '1rem' }}>
          <MDBProgressBar striped width='40' bgColor='dark' valuemin={0} valuemax={100} />
        </MDBProgress>
      </div>
    </div>
  );
}

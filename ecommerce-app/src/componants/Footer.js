import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  MDBFooter,
  MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div  className="content-wrapper">
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faFacebookF} />
            </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faTwitter} />
                    </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faGoogle} /> 
                   </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faInstagram} />
                    </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faLinkedinIn} /> 
                   </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faGithub} />     
               </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Esraa magdy
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}
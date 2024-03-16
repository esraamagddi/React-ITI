import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
export default function Button() {
  const handleDownload = () => {
    const pdfUrl = '../../assets/pdf/resume.pdf';

    const link = document.createElement('a');

    link.href = pdfUrl;

    link.setAttribute('download', 'resume.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MDBBtn onClick={handleDownload} rounded className='mx-2' color='white'>
      Download Resume
    </MDBBtn>
  );
}

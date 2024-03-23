 
import React from 'react';
import { useSelector } from 'react-redux';

const FormDataPage = () => {
  
  const formData = useSelector((state) => state.form.formData);

  return (
    <div>
      <h2>Form Data</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>Confirm Password: {formData.confirmPassword}</p>
    </div>
  );
};

export default FormDataPage;

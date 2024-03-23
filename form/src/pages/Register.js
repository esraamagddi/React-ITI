import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateFormData } from '../slices/formReducer';

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    img: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    img: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImgChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const validateForm = () => {
    setFormErrors({
      name: !formData.name
        ? 'Name is required'
        : /\s/.test(formData.name)
        ? 'Name should not contain spaces'
        : '',
      email: !formData.email
        ? 'Email is required'
        : !/\S+@\S+\.\S+/.test(formData.email)
        ? 'Email should be in email format'
        : '',
      password: !formData.password
        ? 'Password is required'
        : formData.password.length < 8
        ? 'Password should be at least 8 characters'
        : formData.password.length > 12
        ? 'Password should be at most 12 characters'
        : '',
      confirmPassword: !formData.confirmPassword
        ? 'Confirm Password is required'
        : formData.password !== formData.confirmPassword
        ? 'Confirm Password should match the password'
        : '',
      img: !formData.img ? 'Image is required' : ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    dispatch(updateFormData(formData));
    console.log(formData);
    console.log(formData.password.length > 8);
  };

  return (
    <Container>
      <h3 className="mt-5 mb-4">Register Page</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
          {formErrors.name && <Alert variant="danger">{formErrors.name}</Alert>}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <Alert variant="danger">{formErrors.email}</Alert>}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
          {formErrors.password && <Alert variant="danger">{formErrors.password}</Alert>}
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {formErrors.confirmPassword && <Alert variant="danger">{formErrors.confirmPassword}</Alert>}
        </Form.Group>

        <Form.Group controlId="img">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" name="img" onChange={handleImgChange} />
          {formErrors.img && <Alert variant="danger">{formErrors.img}</Alert>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default Register;

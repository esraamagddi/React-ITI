import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavbar = () => {
    setOpenNav(!openNav);
  };

  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer>
        <MDBNavbarBrand href='#'>
          <FontAwesomeIcon icon={faHouse} />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleNavbar}
        />
        <MDBCollapse navbar show={openNav}>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <NavLink
                exact
                to='/'
                className='nav-link'
                activeClassName='active'
                onClick={toggleNavbar}
              >
                Home
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to='/login'
                className='nav-link'
                activeClassName='active'
                onClick={toggleNavbar}
              >
                Login
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

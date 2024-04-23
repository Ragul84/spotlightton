import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Navigate, useNavigate } from 'react-router-dom'
import { Select, MenuItem } from '@mui/material'
import { TonConnectButton } from '@tonconnect/ui-react'

function Header() {
  return (
    <Navbar expand="lg" className="bg-blue-700 header">
      <Container fluid>
        <Navbar.Brand
          style={{ fontFamily: 'Bruno Ace SC', marginLeft: '3px' }}
          href="#"
          className="text-white fs-2"
          //   onClick={() => {
          //    navigate('/')
          // }}
        >
          Ton<span  style={{ fontFamily: 'Bruno Ace SC', marginLeft: '3px' }} className='text-red-400 fs-2 font-extrabold'>Resistance</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              style={{ fontFamily: 'poppins' }}
              className="text-white"
              href="learn"
            > <h2 className='hover:text-white text-gray-300 text-md font-bold'>Resistance Hub</h2>
              
            </Nav.Link>
            <Nav.Link
              style={{ fontFamily: 'poppins' }}
              className="hover:text-white text-gray-300 text-md font-bold"
              href="coins/:id"
            >
              Profile
            </Nav.Link>
          </Nav>
          <TonConnectButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

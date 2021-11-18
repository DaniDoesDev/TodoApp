import React, { useContext } from 'react'
import UserBar from '../user/UserBar'
import Header from '../Header'
import { Link } from 'react-navi';
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function HeaderBar() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><Header text="My Todo List - Homepage" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link href="/users">Access Users Page</Link></Nav.Link>
          </Nav>
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
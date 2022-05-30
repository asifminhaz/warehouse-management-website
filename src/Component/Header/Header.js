import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
}
          return (
   <div>
<Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >MotoDeal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/manageInventory">Manage Inventory</Nav.Link>
   
    </Nav>
    <Nav>
    {
                                user ? <>
                                   
                                    <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                                    <Nav.Link as={Link} to="/addItems">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link>
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    </>

                                :
      <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>     
 </div>
          );
};

export default Header;
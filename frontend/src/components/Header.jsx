import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux'
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {/* <LinkContainer to='/'> */}
          <Navbar.Brand href='/'>MERN App</Navbar.Brand>
          {/* </LinkContainer> */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <NavDropdown.Item href='/profile'>profile</NavDropdown.Item>
                    <NavDropdown.Item>log out</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  {/* <LinkContainer to='/login'> */}
                  <Nav.Link href='/login'>
                    <FaSignInAlt /> Sign In
                  </Nav.Link>
                  {/* </LinkContainer> */}
                  {/* <LinkContainer to='/register'> */}
                  <Nav.Link href='/register'>
                    <FaSignOutAlt /> Sign Up
                  </Nav.Link>
                  {/* </LinkContainer> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  );
};

export default Header;
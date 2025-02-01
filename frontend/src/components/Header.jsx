import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import {useNavigate} from 'react-router-dom';
import { logout } from '../slices/AuthSlices';
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] =  useLogoutMutation();
  const logoutHandler = async() => {
    try{
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/')
    } catch(e){
      console.log(e);
    }
  }
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
                    <NavDropdown.Item onClick={logoutHandler}>log out</NavDropdown.Item>
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
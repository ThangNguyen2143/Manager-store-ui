import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Nav, Form, Container, Navbar, Button, ButtonGroup } from 'react-bootstrap';
import LoginForm from '~/pages/User/LoginForm';
import { Link } from 'react-router-dom';

function Header({ isLogin = false }) {
  var userControl;
  if (isLogin) {
    userControl = (
      <ButtonGroup aria-label="Basic example">
        <Button className="buttonColor">
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button className="buttonColor">
          <FontAwesomeIcon icon={faCartShopping} />
        </Button>

        <Dropdown as={ButtonGroup} drop="down">
          <Dropdown.Toggle className="buttonColor">
            <FontAwesomeIcon icon={faUser} />
          </Dropdown.Toggle>
          <Dropdown.Menu align={{ lg: 'end' }}>
            <Dropdown.Item href="#action3">Action</Dropdown.Item>
            <Dropdown.Item href="#action4">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#action5">Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    );
  } else {
    userControl = (
      <div className="flex">
        <LoginForm />
        <Link to={'/register'} className="mx-2">
          <Button>Đăng kí</Button>
        </Link>
      </div>
    );
  }
  return (
    <header>
      <Navbar expand="xxl" className="bg-body-tertiary Header">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="logo" src="/images/Logo.ico" width="140" height="100" className="d-inline-block align-center" />
            <span className="ml-5 text-3xl text-[#3cf]">Nhà Sách Thiên Lân</span>
          </Navbar.Brand>
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search for book"
              className="me-2 "
              aria-label="Search"
              spellCheck={false}
            />
            <button className="searchBtn ml-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form>
          <Nav>{userControl}</Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    // TODO add highlighting when a route is selected.
    <div>
      <div className='fixed w-full z-10'>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Zachary Seidner</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about">Experience</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div style={{ height: "56px" }}></div>
    </div>


  );
}

export default NavbarComponent;
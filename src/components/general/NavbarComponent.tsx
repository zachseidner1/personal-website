import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import Mail from "../../assets/svg/mail.svg"
import Resume from "../../assets/svg/resume.svg"


function NavbarComponent() {
  return (
    // TODO add highlighting when a route is selected.
    // TODO consider adding GitHub, LinkedIn, email
    <div>
      <div className='fixed w-full z-10'>
        <Navbar bg="dark" variant="dark" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Zachary Seidner</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about">Experience</Nav.Link>
            </Nav>
            <Navbar.Brand href="https://github.com/zachseidner1" target="_blank">
              <img src={Github} width={30} height={30} />
            </Navbar.Brand>
            <Navbar.Brand href="mailto:zachary.seidner@gmail.com">
              <img src={Mail} width={30} height={30} />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.linkedin.com/in/zachary-seidner-921a94219/" target="_blank">
              <img src={LinkedIn} width={25} height={25} />
            </Navbar.Brand>
            <Navbar.Brand href="https://drive.google.com/file/d/1v5vvGNqSdn1W2doYIfYkI8_LCrnFhi73/view?usp=share_link" target="_blank">
              <img src={Resume} width={30} height={30} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div style={{ height: "56px" }}></div>
    </div>


  );
}

export default NavbarComponent;
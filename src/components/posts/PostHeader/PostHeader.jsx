import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./PostHeader.css";
import { MdGroups } from "react-icons/md";
import { useLocation } from "react-router-dom";
import img1 from "../../../assets/images/Vector.png";
const PostsHeader = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="mt-2 row">
        <Navbar.Brand className=" col-md-12 col-lg-2 fw-bolder d-flex justify-content-between">
          <span> All Posts (32)</span>
          <NavDropdown
            title="Filter-All"
            id="collasible-nav-dropdown"
            className="filter d-block d-sm-block d-md-block d-lg-none "
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">action2</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="d-none "
        />
        <Navbar.Collapse
          className=" col-lg-10  d-none d-sm-none d-md-none d-lg-flex  justify-content-between    "
          id="responsive-navbar-nav"
        >
          <Nav className="">
            <Nav.Link href="#features">Artical</Nav.Link>
            <Nav.Link href="#pricing">Event</Nav.Link>
            <Nav.Link href="#pricing">Education</Nav.Link>
            <Nav.Link href="#pricing">Job</Nav.Link>
          </Nav>
          <Nav className="d-flex gap-3">
            <NavDropdown
              title="Write a Post"
              id="collasible-nav-dropdown"
              className="fw-bolder leavegroup"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">action2</NavDropdown.Item>
            </NavDropdown>

            {pathname === "/" && (
              <Nav.Link eventKey={2} className="joingroup text-light">
                <MdGroups /> Join Group
              </Nav.Link>
            )}
            {pathname === "/register" && (
              <Nav.Link eventKey={2} className="leavegroup">
                <img src={img1} alt="" /> Leave group
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PostsHeader;

import { Navbar, Container, Nav, Button, Form, Image } from "react-bootstrap";
import img3 from "../../assets/images/Rectangle.png";
import img4 from "../../assets/images/Oval.png";
import img5 from "../../assets/images/Path.png";
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import img1 from "../../assets/images/Union1.png";
import img2 from "../../assets/images/pp.png";
import "./Header.css";
import { useEffect, useState } from "react";
import SignupModal from "../signupModal/SignupModal";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [user, setUser] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/register") {
      setUser(true);
    }
  }, [location]);
  return (
    <Navbar className="position-relative" bg="light" expand="lg">
      {/* navbar for mobile nd tablet */}
      <Navbar className="container d-lg-none  w-100">
        <div
          onClick={() => setModalShow(true)}
          className="d-flex flex-grow-1 justify-content-end gap-3 me-3 "
        >
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </Navbar>

      {/* navbar for laptop ,computer and big screen */}

      <Container className="d-none d-sm-none d-md-none d-lg-flex gap-5  justify-content-between">
        <Navbar.Brand className="heading d-flex align-items-center" href="">
          <span className="letter1">A</span>
          <span className="letter1">T</span>
          <span className="letter1">G</span>
          <span className="letter2">W</span>
          <img src={img1} alt=" name" />
          <span className="letter2">R</span>
          <span className="letter2">L</span>
          <span className="letter2">D</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-between"
          id="basic-navbar-nav"
        >
          <Nav className=" w-50 d-flex">
            <Form className="searchContainer">
              <Button className="ms-3" variant="">
                <FaSearch />
              </Button>
              <input
                type="text"
                placeholder="Search for your favourite grpoups in ATG"
                className=" border-0 input"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="">
              {user ? (
                <div className="profile">
                  <Image src={img2} roundedCircle className="bg-danger" />
                  <span className=" m-0">Siddharth Goyal</span>
                  <span className="">
                    <AiFillCaretDown />
                  </span>
                </div>
              ) : (
                <div
                  onClick={() => setModalShow(true)}
                  className="d-flex gap-1 fw-bolder"
                >
                  <p>create account , </p>
                  <p className="text-info">Its free</p>
                  <span>
                    <AiFillCaretDown />
                  </span>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  );
};

export default Header;

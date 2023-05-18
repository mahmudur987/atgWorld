import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import img1 from "../../assets/images/banner.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SignupModal from "../signupModal/SignupModal";
import { BiArrowBack } from "react-icons/bi";
const Banner = () => {
  const { pathname } = useLocation();
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container>
      <Row>
        <Col>
          <div className="banner-container">
            <img src={img1} alt="Banner" className="banner-image" />
            <div className="banner-text">Computer Engineering</div>
            <div className="banner-text1">
              142,765 Computer engeneers follow this
            </div>
            {pathname === "/" ? (
              <button
                onClick={() => setModalShow(true)}
                className="joinnow d-lg-none"
              >
                Join Now
              </button>
            ) : (
              <button className="joinnow d-lg-none">Leave Now</button>
            )}
            <button className="back d-lg-none">
              <BiArrowBack />{" "}
            </button>
          </div>
        </Col>
      </Row>
      <SignupModal show={modalShow} onHide={() => setModalShow(false)} />;
    </Container>
  );
};

export default Banner;

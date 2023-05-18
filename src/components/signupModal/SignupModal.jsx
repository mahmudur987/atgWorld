/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import img1 from "../../assets/images/f_logo_RGB-Blue_1024.png";
import img2 from "../../assets/images/signup.png";
import img3 from "../../assets/images/Vector (1).png";
import img4 from "../../assets/images/Vector (2).png";
import "./SignupModal.css";
import LoginModal from "../LoginModal/LoginModal";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignupModal = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="position position-relative ">
          <button
            onClick={() => props.onHide()}
            className="cross d-none d-sm-none d-md-none d-lg-block"
          >
            <img src={img3} alt="" />
          </button>

          <Modal.Title id="contained-modal-title-vcenter" closeButton>
            <p className="fs-6 text-info d-none d-sm-none d-md-none d-lg-block">
              Lets learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="row w-100">
          <div className="col-12 col-lg-6  d-flex flex-column align-items-center  ">
            <div className="w-75 d-flex justify-content-between">
              <h2 className="fw-bolder mb-1  ">Create account</h2>
              <button
                onClick={() => props.onHide()}
                className="cross1  d-lg-none"
              >
                <img src={img4} alt="" />
              </button>
            </div>
            <Form className="w-75">
              <Form.Group className="d-flex radius" controlId="formBasicEmail">
                <Form.Control
                  className="form rounded-0"
                  type="text"
                  placeholder="First Name"
                />
                <Form.Control
                  className="form  rounded-0"
                  type="text"
                  placeholder="last Name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="form rounded-0"
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className=" d-flex form rounded-0"
                controlId="formBasicPassword"
              >
                <Form.Control
                  className="border-0"
                  type="password"
                  placeholder="Password"
                />
                <span className="me-5">
                  {" "}
                  <AiOutlineEye />
                </span>
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Control
                  className="form rounded-0"
                  type="password"
                  placeholder=" Confirm Password"
                />
              </Form.Group>

              {/* create account button */}

              <p className="d-flex gap-2 justify-content-between align-items-center  ">
                <Link to={"/register"} className="w-100">
                  <Button
                    className="w-100  rounded-pill mt-2 mt-lg-5"
                    variant="primary"
                    type="submit"
                  >
                    create account
                  </Button>
                </Link>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setModalShow(true);
                    props.onHide();
                  }}
                  className="d-lg-none  w-50 text-decoration-underline  text-end mt-3"
                >
                  or signIn
                </p>
              </p>
            </Form>
            {/* facebook signup button */}

            <Button
              style={{ border: "0.6px solid #D9D9DB" }}
              className="w-100 rounded-pill my-2 "
              variant=""
              type="submit"
            >
              <img src={img1} alt="" className="mx-2" />
              SignUp with facebook
            </Button>
            {/* google sign up */}
            <Button
              style={{ border: "0.6px solid #D9D9DB" }}
              className="w-100 rounded-pill "
              variant=""
              type="submit"
            >
              <span className="mx-2 text-danger">
                {" "}
                <BsGoogle />{" "}
              </span>{" "}
              SignUp with Google
            </Button>

            <span className="p-1 d-lg-none text-center">
              By signing up, you agree to our Terms & conditions, Privacy policy{" "}
            </span>
          </div>

          <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block">
            <h6 className="text-end mt-3">
              alrady have an account ?{" "}
              <button
                onClick={() => {
                  setModalShow(true);
                  props.onHide();
                }}
                className="text-info text-decoration-none border-0"
              >
                SignIn
              </button>
            </h6>
            <div className="d-flex justify-content-center align-items-center h-75">
              <img src={img2} alt="" className="w-75 h-100" />
            </div>
            <span>
              By signing up, you agree to our Terms & conditions, Privacy policy{" "}
            </span>
          </div>
        </Modal.Body>
      </Modal>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default SignupModal;

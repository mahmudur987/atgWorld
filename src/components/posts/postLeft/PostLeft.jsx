import "./postLeft.css";
import { Card, Image } from "react-bootstrap";
import img1 from "../../../assets/images/picture1.png";
import img2 from "../../../assets/images/✍️ Article.png";
import img3 from "../../../assets/images/pp.png";
import img4 from "../../../assets/images/picture2.png";
import img5 from "../../../assets/images/🔬️ Education.png";
import img6 from "../../../assets/images/Rectangle 5.png";
import img7 from "../../../assets/images/🗓️ Meetup.png";
import img8 from "../../../assets/images/💼️ Job.png";

import { AiFillEye } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  BsBag,
  BsFillShareFill,
  BsThreeDots,
  BsCalendar2,
} from "react-icons/bs";
import { useState } from "react";

const PostLeft = () => {
  const [show, Setshow] = useState(true);
  return (
    <div className="container d-flex flex-column gap-lg-3 mb-lg-5">
      <Card className="card">
        <Card.Img variant="top" src={img1} alt="Card Image" />
        <Card.Body>
          <p>
            {" "}
            <img src={img2} alt="" />
          </p>
          <div className="d-flex justify-content-between ">
            <h4 className="w-75">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </h4>
            <p className="fs-2 d-flex ">
              <BsThreeDots className="dot" />
            </p>
          </div>
          <Card.Text>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between border-0">
          <p>
            <Image src={img3} roundedCircle width={30} height={30} />
            <span className="ms-2 fw-bolder">Sarthak Kamra</span>
          </p>
          <div className="d-flex gap-4">
            <p className="ms-auto">
              {" "}
              <AiFillEye /> 1.4k views
            </p>
            <p>
              <BsFillShareFill />{" "}
            </p>
          </div>
        </Card.Footer>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={img4} alt="Card Image" />
        <Card.Body>
          <p>
            {" "}
            <img src={img5} alt="" />
          </p>
          <div className="d-flex justify-content-between">
            <h4 className="w-75">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h4>
            <p className="fs-2 d-flex">
              <BsThreeDots className="dot" />
            </p>
          </div>
          <Card.Text>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between border-0">
          <p>
            <Image src={img3} roundedCircle width={30} height={30} />
            <span className="ms-2 fw-bolder">Sarthak Kamra</span>
          </p>
          <div className="d-flex gap-4">
            <p className="ms-auto">
              {" "}
              <AiFillEye /> 1.4k views
            </p>
            <p>
              <BsFillShareFill />{" "}
            </p>
          </div>
        </Card.Footer>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={img6} alt="Card Image" />
        <Card.Body className="position-relative">
          <p>
            {" "}
            <img src={img7} alt="" />
          </p>
          <div className="d-flex justify-content-between gap-lg-5">
            <h4 className="w-75 ">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h4>
            <p onClick={() => Setshow(!show)} className="fs-2 d-flex">
              <BsThreeDots className="dot" />
            </p>
          </div>
          <div className={show ? " option" : "d-none"}>
            <p>Edit</p>
            <p>Report</p>
            <p>Bloct</p>
          </div>
          <div className={show ? " option" : "d-none"}>
            <p>Edit</p>
            <p>Report</p>
            <p>Bloct</p>
          </div>

          <Card.Text className="w-75 d-flex justify-content-between">
            <span className="fw-bolder">
              {" "}
              <HiOutlineLocationMarker /> Fri,22 Oct,2018
            </span>
            <span className="fw-bolder">
              <BsCalendar2 /> Ahmedbad,India
            </span>
          </Card.Text>
          <p className="text-center fw-bolder text-danger border border-1 py-2">
            Visit website
          </p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between border-0">
          <p>
            <Image src={img3} roundedCircle width={30} height={30} />
            <span className="ms-2 fw-bolder">Sarthak Kamra</span>
          </p>
          <div className="d-flex gap-4">
            <p className="ms-auto">
              {" "}
              <AiFillEye /> 1.4k views
            </p>
            <p>
              <BsFillShareFill />{" "}
            </p>
          </div>
        </Card.Footer>
      </Card>

      <Card className="card">
        <Card.Body className="">
          <p>
            {" "}
            <img src={img8} alt="" />
          </p>
          <div className="d-flex justify-content-between gap-lg-5">
            <h4 className="w-75 ">Software Developer</h4>
            <p onClick={() => Setshow(!show)} className="fs-2 d-flex">
              <BsThreeDots className="dot" />
            </p>
          </div>

          <Card.Text
            style={{ width: "85%" }}
            className=" fw-bolder gap-2 d-flex "
          >
            <span style={{ fontSize: "15px" }}>
              {" "}
              <BsBag /> Innovaccer Analytics Private Ltd.
            </span>
            <span>
              {" "}
              <HiOutlineLocationMarker /> Ahmedbad,India
            </span>
          </Card.Text>
          <p className="text-center text-info fw-bolder  border border-1 py-2">
            Apply on Times job
          </p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between border-0">
          <p>
            <Image src={img3} roundedCircle width={30} height={30} />
            <span className="ms-2 fw-bolder">Sarthak Kamra</span>
          </p>
          <div className="d-flex gap-4">
            <p className="ms-auto">
              {" "}
              <AiFillEye /> 1.4k views
            </p>
            <p>
              <BsFillShareFill />{" "}
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PostLeft;

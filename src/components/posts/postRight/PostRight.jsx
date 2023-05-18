import "./PostRight.css";
import { GrFormLocation } from "react-icons/gr";
import { MdModeEditOutline } from "react-icons/md";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { Image } from "react-bootstrap";
import img2 from "../../../assets/images/pp.png";

const PostRight = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return (
      <div className="container">
        <div className="d-flex justify-content-between w-75 mx-auto mt-lg-5">
          <p className="fw-bolder">
            <GrFormLocation /> Nodia India
          </p>
          <p>
            {" "}
            <MdModeEditOutline />
          </p>
        </div>
        <div className="d-flex gap-1 w-75 mx-auto mt-lg-5 ">
          <p>
            <FaCreativeCommonsBy />
          </p>
          <p>
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
    );
  }
  if (pathname === "/register") {
    return (
      <div className="container">
        <div className="d-flex justify-content-between align-items-center  w-75 mx-auto mt-lg-5">
          <p className="fw-bolder">
            <GrFormLocation />
          </p>
          <p>
            <input
              type="text"
              className="border-0"
              placeholder="Enter your location"
            />
          </p>
          <p>
            {" "}
            <MdModeEditOutline />
          </p>
        </div>
        <div className="d-flex gap-1 w-75 mx-auto mt-lg-2 ">
          <p>
            <FaCreativeCommonsBy />
          </p>
          <p>
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
        <div className="d-flex flex-column gap-1 w-75  mx-auto mt-lg-2 ">
          <h6 className="recommendgroup">
            {" "}
            <span>
              {" "}
              <AiFillLike />{" "}
            </span>{" "}
            RCOMMENDED GROUPS
          </h6>
          <div className="d-flex flex-column gap-5">
            <div className=" profile">
              <p>
                <Image src={img2} roundedCircle width={30} height={30} />
                <span className="ms-2">Laisure</span>
              </p>
              <button className="border-0">Follow</button>
            </div>
            <div className=" profile">
              <p>
                <Image src={img2} roundedCircle width={30} height={30} />
                <span className="ms-2">Activisim</span>
              </p>
              <button className="border-0">Follow</button>
            </div>
            <div className=" profile">
              <p>
                <Image src={img2} roundedCircle width={30} height={30} />
                <span className="ms-2">MBA</span>
              </p>
              <button className="border-0">Follow</button>
            </div>
            <div className=" profile">
              <p>
                <Image src={img2} roundedCircle width={30} height={30} />
                <span className="ms-2">Philosophy</span>
              </p>
              <button className="border-0">Follow</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PostRight;

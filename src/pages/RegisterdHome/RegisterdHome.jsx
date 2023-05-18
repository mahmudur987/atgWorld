import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Posts from "../../components/posts/Posts";
import { BiPencil } from "react-icons/bi";

import "../Home/Home.css";
const RegisterdHome = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Posts />
      <button className="edit d-lg-none">
        <BiPencil />
      </button>
    </div>
  );
};

export default RegisterdHome;

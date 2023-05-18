import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/Posts";
import { BiPencil } from "react-icons/bi";
import "./Home.css";
const Home = () => {
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

export default Home;

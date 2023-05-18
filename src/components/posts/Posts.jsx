import PostsHeader from "./PostHeader/PostHeader";
import PostLeft from "./postLeft/PostLeft";
import PostRight from "./postRight/PostRight";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="container">
      <div className="posts">
        <PostsHeader />
        <div className="row ">
          <div className="col-lg-8 ">
            <PostLeft />
          </div>
          <div className="col-lg-4 d-none d-sm-none d-md-none d-lg-block">
            <PostRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

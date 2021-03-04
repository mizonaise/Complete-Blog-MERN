import PostItem from "./PostItem";
import Pagination from "./Pagination";

const Posts = () => {
  //   const postItems = posts.map((post) => <PostItem post={post} />);

  return (
    <div className="col-lg-8">
      <div className="blog-box list-style">
        <PostItem />
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;

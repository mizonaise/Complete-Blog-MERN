import { posts } from "../data";
import { Pagination, PostItem } from ".";

const Posts = () => {
  const postItems = posts.map((post) => <PostItem post={post} />);
  return (
    <div className="col-lg-8">
      <div className="blog-box list-style">
        {postItems}
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;

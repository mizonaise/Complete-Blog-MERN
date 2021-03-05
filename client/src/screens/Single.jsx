import { Comment, Footer, HeaderTwo, PostDesc } from "../components";

function SingleScreen() {
  return (
    <>
      <HeaderTwo />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comment />
      </div>
      <Footer />
    </>
  );
}

export default SingleScreen;

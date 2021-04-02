import { Link } from "react-router-dom";

function TrendingPosts(props) {
  console.log(props);
  const trendingPosts = props.trendingPosts;
  console.log(trendingPosts);
  return (
    <section className="top-home-section">
      <div className="container">
        <div className="title-section text-center">
          <h1>Trending Posts</h1>
        </div>
        <div className="top-home-box">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="news-post image-post">
                <img src={trendingPosts[0]?.imgUrl} alt="" />
                <div className="hover-post">
                  <a className="category-link" href="/">
                    {trendingPosts[0]?.category.name}
                  </a>
                  <h2>
                    <Link to="/single">{trendingPosts[0]?.title}</Link>
                  </h2>
                  <ul className="post-tags">
                    <li>3 days ago</li>
                    <li>
                      <a href="/">2 comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <Link to="/single">
                        <img src={trendingPosts[1]?.imgUrl} alt="" />
                      </Link>
                    </div>
                    <a className="text-link" href="/">
                      {trendingPosts[1]?.category.name}
                    </a>
                    <h2>
                      <Link to="/single">{trendingPosts[1]?.title}</Link>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="/">Stan Enemy</a>
                      </li>
                      <li>3 days ago</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <Link to="/single">
                        <img src={trendingPosts[2]?.imgUrl} alt="" />
                      </Link>
                    </div>
                    <a className="text-link" href="/">
                      {trendingPosts[2]?.category.name}
                    </a>
                    <h2>
                      <Link to="/single">{trendingPosts[2]?.title}</Link>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="/">Stan Enemy</a>
                      </li>
                      <li>3 days ago</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <Link to="/single">
                        <img src={trendingPosts[3]?.imgUrl} alt="" />
                      </Link>
                    </div>
                    <a className="text-link" href="/">
                      {trendingPosts[3]?.category.name}
                    </a>
                    <h2>
                      <Link to="/single">{trendingPosts[3]?.title}</Link>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="/">Stan Enemy</a>
                      </li>
                      <li>2 weeks ago</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <Link to="/single">
                        <img src={trendingPosts[4]?.imgUrl} alt="" />
                      </Link>
                    </div>
                    <a className="text-link" href="/">
                      {trendingPosts[4]?.category.name}
                    </a>
                    <h2>
                      <Link to="/single">{trendingPosts[4]?.title}</Link>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="/">Stan Enemy</a>
                      </li>
                      <li>2 weeks ago</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingPosts;

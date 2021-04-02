import { Link } from "react-router-dom";

function FrechStories(props) {
  console.log(props);
  const freshStories = props.freshStories;
  console.log(freshStories);
  return (
    <section className="fresh-section on-trend-mode">
      <div className="container">
        <div className="title-section text-center">
          <h1>Fresh Stories</h1>
        </div>
        <div className="fresh-box owl-wrapper">
          <div className="owl-carousel" data-num="2">
            {/* {freshStories.map((item, i) => (
                <a key={i} href="/">
                  <div className="ic-follow">{item.title}</div>
                </a>
              ))} */}
            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src={freshStories[0]?.imgUrl} alt="" />
                </div>
                <a className="text-link" href="/">
                  {freshStories[0]?.category.name}
                </a>
                <h2>
                  <Link to="/single">{freshStories[0]?.title}</Link>
                </h2>
                <ul className="post-tags">
                  <li>3 days ago</li>
                  <li>
                    <a href="/">3 comments</a>
                  </li>
                  <li>
                    by <a href="/">John Smith</a>
                  </li>
                </ul>
                <p>{freshStories[0]?.description}</p>
                <Link className="text-link" to="/single">
                  Read More
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src={freshStories[1]?.imgUrl} alt="" />
                </div>
                <a className="text-link" href="/">
                  {freshStories[1]?.category.name}
                </a>
                <h2>
                  <Link to="/single">{freshStories[1]?.title}</Link>
                </h2>
                <ul className="post-tags">
                  <li>3 days ago</li>
                  <li>
                    <a href="/">3 comments</a>
                  </li>
                  <li>
                    by <a href="/">John Smith</a>
                  </li>
                </ul>
                <p>{freshStories[1]?.description}</p>
                <Link className="text-link" to="/single">
                  Read More
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src={freshStories[2]?.imgUrl} alt="" />
                </div>
                <a className="text-link" href="/">
                  {freshStories[2]?.category.name}
                </a>
                <h2>
                  <Link to="/single">{freshStories[2]?.title}</Link>
                </h2>
                <ul className="post-tags">
                  <li>3 days ago</li>
                  <li>
                    <a href="/">3 comments</a>
                  </li>
                  <li>
                    by <a href="/">John Smith</a>
                  </li>
                </ul>
                <p>{freshStories[2]?.description}</p>
                <Link className="text-link" to="/single">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrechStories;

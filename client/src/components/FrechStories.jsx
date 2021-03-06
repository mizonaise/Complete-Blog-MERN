import { Link } from "react-router-dom";

function FrechStories() {
  return (
    <section className="fresh-section on-trend-mode">
      <div className="container">
        <div className="title-section text-center">
          <h1>Fresh Stories</h1>
        </div>
        <div className="fresh-box owl-wrapper">
          <div className="owl-carousel" data-num="2">
            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src="upload/blog/home5/a2.jpg" alt="" />
                </div>
                <a className="text-link" href="/">
                  Travel
                </a>
                <h2>
                  <Link to="/single">Vivamus vestibulum ntulla necante.</Link>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra donec nec justo eget
                  felis facilisis fermentum ...{" "}
                </p>
                <Link className="text-link" to="/single">
                  Read More
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src="upload/blog/home5/a3.jpg" alt="" />
                </div>
                <a className="text-link" href="/">
                  Food
                </a>
                <h2>
                  <Link to="/single">Praesent placerat risus quis eros.</Link>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra donec nec justo eget
                  felis facilisis fermentum ...{" "}
                </p>
                <Link className="text-link" to="/single">
                  Read More
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src="upload/blog/home5/a4.jpg" alt="" />
                </div>
                <a className="text-link" href="/">
                  Food
                </a>
                <h2>
                  <Link to="/single">Morbi in sem quisdui placerat ornare.</Link>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra donec nec justo eget
                  felis facilisis fermentum ...{" "}
                </p>
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

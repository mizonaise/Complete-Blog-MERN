import { Link } from "react-router-dom";
import { Footer, Header } from "../components";

const NotFound = () => {
  return (
    <>
      <Header />

      <section className="page-banner-section">
        <div className="container">
          <h1>Page Could Not Be Found</h1>
        </div>
      </section>

      <section className="error-section">
        <div className="container">
          <div className="error-box">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
              We are sorry. But the page you are looking for cannot be found.{" "}
            </p>
            <Link className="button-one" to="/">
              Go To HomePage
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;

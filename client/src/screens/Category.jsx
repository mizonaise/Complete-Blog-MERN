import { Footer, Breadcrumb, Posts, Sidebar, HeaderTwo } from "../components";

function CategoryScreen() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CategoryScreen;

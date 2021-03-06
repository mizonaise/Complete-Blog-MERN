// function NavBar() {
//   return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand" href="index.html">
//             <img src="images/logo.png" alt="" />
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav m-auto">
//               <li className="drop-link">
//                 <a href="index.html">
//                   Home <i className="fa fa-angle-down" aria-hidden="true"></i>
//                 </a>
//                 <ul className="dropdown">
//                   <li>
//                     <a href="index.html">Homepage 01</a>
//                   </li>
//                   <li>
//                     <a href="home2.html">Homepage 02</a>
//                   </li>
//                   <li>
//                     <a href="home3.html">Homepage 03</a>
//                   </li>
//                   <li>
//                     <a href="home4.html">Homepage 04</a>
//                   </li>
//                   <li>
//                     <a href="home5.html">Homepage 05</a>
//                   </li>
//                   <li>
//                     <a href="home6.html">Homepage 06</a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="drop-link">
//                 <a className="active" href="/">
//                   Features{" "}
//                   <i className="fa fa-angle-down" aria-hidden="true"></i>
//                 </a>
//                 <ul className="dropdown">
//                   <li>
//                     <a href="category-grid.html">
//                       Category Pages <i className="fa fa-angle-right"></i>
//                     </a>
//                     <ul className="dropdown level2">
//                       <li>
//                         <a href="category-list.html">List style</a>
//                       </li>
//                       <li>
//                         <a href="category-grid.html">Grid style</a>
//                       </li>
//                       <li>
//                         <a href="category-mix.html">Mix style</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a to="/single">
//                       Post Styles <i className="fa fa-angle-right"></i>
//                     </a>
//                     <ul className="dropdown level2">
//                       <li>
//                         <a to="/single">classNameic sidebar</a>
//                       </li>
//                       <li>
//                         <a href="single-post2.html">fullwidth sidebar</a>
//                       </li>
//                       <li>
//                         <a href="single-post3.html">alt no sidebar</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="about.html">
//                       Pages <i className="fa fa-angle-right"></i>
//                     </a>
//                     <ul className="dropdown level2">
//                       <li>
//                         <a href="about.html">about us</a>
//                       </li>
//                       <li>
//                         <a href="archives.html">Archive</a>
//                       </li>
//                       <li>
//                         <a href="error-404.html">error 404</a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="category-mix.html">Lifestyle</a>
//                 <div className="mega-dropdown">
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/c10.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">
//                         Aliquam tincidunt mauris eu risus.
//                       </a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/c11.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">Cras ornare tristique elit.</a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/c12.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">Praesent placerat risus.</a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/c13.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">
//                         Morbi in sem quis dui placerat ornare.
//                       </a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/c15.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">
//                         Quisque volutpat mattis semper suscipit eros.
//                       </a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <a href="category-grid.html">Travel</a>
//                 <div className="mega-dropdown">
//                   <ul className="filter-list">
//                     <li>
//                       <a href="/">Travel</a>
//                     </li>
//                     <li>
//                       <a href="/">Trending</a>
//                     </li>
//                     <li>
//                       <a href="/">Latest</a>
//                     </li>
//                   </ul>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/p5.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">Cras ornare tristique elit.</a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/p6.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">Praesent placerat risus.</a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/p7.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">
//                         Morbi in sem quis dui placerat ornare.
//                       </a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                   <div className="news-post standard-post">
//                     <div className="image-holder">
//                       <img src="upload/blog/p8.jpg" alt="" />
//                     </div>
//                     <h2>
//                       <a to="/single">
//                         Quisque volutpat mattis semper suscipit eros.
//                       </a>
//                     </h2>
//                     <ul className="post-tags">
//                       <li>
//                         by <a href="/">John Smith</a>
//                       </li>
//                       <li>1 days ago</li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <a href="contact.html">Contacts</a>
//               </li>
//             </ul>
//           </div>
//           <a className="search-button" href="/">
//             <i className="fa fa-search"></i>
//           </a>
//           <form className="form-search">
//             <input type="search" placeholder="Search:" />
//           </form>
//         </div>
//       </nav>
//   );
// }

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          COMPLETE BLOG
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">All Posts</Link>
            </li>
            <li>
              <Link to="/single">Category Name 1</Link>
            </li>
            <li>
              <Link to="/single">Category Name 2</Link>
            </li>
          </ul>
        </div>
        <a className="search-button" href="/">
          <i className="fa fa-search"></i>
        </a>
        <form className="form-search">
          <input type="search" placeholder="Search:" />
        </form>
      </div>
    </nav>
  );
}

function HeaderTwo() {
  return (
    <header className="clearfix">
      <NavBar />
    </header>
  );
}

export default HeaderTwo;

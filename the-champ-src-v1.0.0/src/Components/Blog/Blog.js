import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";
import { BiLike, BiComment, BiShare } from "react-icons/bi";
import { Link } from "react-router-dom";

const Blog = () => {

  return (
    <div id="blog" className="blogContainer py-5">
      <Container>
      <div className="sub-heading border-end border-1 text-light border-light pe-3 text-end">
            <span>My Blog</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        <div className="row my-5">
          <div className="col-12 col-md-12 col-lg-7 col-xl-7">
            <div>
              <img src={require('../../utilities/images/layout/blogBanner.jpg')} alt="" className="blog-image w-100" />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-xl-5">
            <div>
                <span className="subTitle">Copa America, Brazil 2022</span>
                <h4>Big game willbe held on brazil our team and the champ</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime itaque ea esse quasi beatae cum cumque laboriosam quam. Dolores alias minus quae doloremque obcaecati ut porro debitis velit exercitationem a eius iste nobis, repellat ullam dolore praesentium? Earum optio in provident ducimus!... <Link className="text-primary" to="/blogDetails">Read More</Link></p>
            </div>
            <div className="user-blog-container">
                <div className="d-flex">
                  <div className="user-photo">
                    <img
                      src={require("../../utilities/images/comments/home-comment-two.png")}
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="user-text ms-3">
                    <h5 className="fw-light m-0">Mark Otto</h5>
                    <p className="fw-light">02 February 2022</p>
                  </div>
                </div>
                <div className="socials">
                  <span className="mx-2">3.4K<BiLike className="ms-1"/></span>
                  <span className="mx-2">3.4K<BiComment className="ms-1"/></span>
                  <span className="mx-2">62<BiShare className="ms-1"/></span>
                </div>
              </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className="single-post">
              <div className="blog-image">
                <img
                  src={require("../../utilities/images/layout/gall.jpg")}
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="blog-text">
              <div className="mt-3">
                <span className="subTitle">Friendly match</span>
                <h4>
                  Are you ready for the next battle.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  voluptatum temporibus suscipit ad hic dolore repudiandae vero...
                  lib! <Link className="text-primary" to="/blogDetails">Read More</Link>
                </p>
              </div>
              <div className="user-blog-container">
                <div className="d-flex">
                  <div className="user-photo">
                    <img
                      src={require("../../utilities/images/comments/home-comment-one.png")}
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="user-text ms-3">
                    <h5 className="fw-light m-0">Mark Otto</h5>
                    <p className="fw-light">02 February 2022</p>
                  </div>
                </div>
                <div className="socials">
                  <span className="mx-2">3.4K<BiLike className="ms-1"/></span>
                  <span className="mx-2">3.4K<BiComment className="ms-1"/></span>
                  <span className="mx-2">62<BiShare className="ms-1"/></span>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="single-post">
                  <div className="blog-image">
                    <img
                      src={require("../../utilities/images/blog/blog-two.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="blog-text">
                    <div className="mt-3">
                      <span className="subTitle">Win match</span>
                      <p>
                        Lorem ipsum dolor sit amet consecteicia!...<Link className="text-primary" to="/blogDetails">Read More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="single-post">
                  <div className="blog-image">
                    <img
                      src={require("../../utilities/images/blog/blog-two.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="blog-text">
                    <div className="mt-3">
                      <span className="subTitle">4-0 Goals and hattric</span>
                      <p>
                        Lorem ipsum dolor sit amet consecteicia!...<Link className="text-primary" to="/blogDetails">Read More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="single-post">
                  <div className="blog-image">
                    <img
                      src={require("../../utilities/images/blog/blog-three.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="blog-text">
                    <div className="mt-3">
                      <span className="subTitle">Weekand match</span>
                      <p>
                        Lorem ipsum dolor sit amet consecteicia!...<Link className="text-primary" to="/blogDetails">Read More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="single-post">
                  <div className="blog-image">
                    <img
                      src={require("../../utilities/images/blog/blog-two.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="blog-text">
                    <div className="mt-3">
                      <span className="subTitle">Player of the game</span>
                      <p>
                        Lorem ipsum dolor sit amet consecteicia!...<Link className="text-primary" to="/blogDetails">Read More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;

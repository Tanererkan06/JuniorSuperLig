import React from "react";
import { Container, Button, Badge } from "react-bootstrap";
import "./BlogContent.css";
import { BsArrowRight } from "react-icons/bs";
import { BiPlay } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const BlogContent = () => {
  
  return (
    <div className="blog-content py-5">
      <Container>
        <div className="row">
        <div className="col-12 col-md-12 col-lg-3 col-xl-3">
            <div>
              <div className="blog-category">
                <h4>Category</h4>
                <ul>
                  <li>
                    <HashLink to="#recentblog">Recent Blog</HashLink>
                  </li>
                  <li>
                  <HashLink to="#winmatch">Win Matches</HashLink>
                  </li>
                  <li>
                    <HashLink to="#lastgoal">Last Goals</HashLink>
                  </li>
                  <li>
                    <Link to="#">Match Goals</Link>
                  </li>
                  <li>
                    <Link to="#">Upcomming Tournaments</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <div className="blog-category">
                <h4>Related Posts</h4>
                <div className="row mt-2">
                  <div className="col-3">
                    <div>
                      <img
                        src={require("../../utilities/images/blog/blog-one.png")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <div>
                      <h5>Won By 2-0 Goals with Brothers United</h5>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <div>
                      <img
                        src={require("../../utilities/images/blog/blog-two.png")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <div>
                      <h5>Won By 2-0 Goals with Brothers United</h5>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <div>
                      <img
                        src={require("../../utilities/images/blog/blog-three.png")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <div>
                      <h5>Won By 2-0 Goals with Brothers United</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="blog-category">
                <h4>Popular Tags</h4>
                <div className="tags mt-2">
                  <Button variant="secondary" className="m-1">
                    Football <Badge bg="secondary">9</Badge>
                  </Button>
                  <Button variant="secondary" className="m-1">
                    Goals <Badge bg="secondary">23</Badge>
                  </Button>
                  <Button variant="secondary" className="m-1">
                    Win <Badge bg="secondary">11</Badge>
                  </Button>
                  <Button variant="secondary" className="m-1">
                    Review <Badge bg="secondary">06</Badge>
                  </Button>
                  <Button variant="secondary" className="m-1">
                    Champions <Badge bg="secondary">10</Badge>
                  </Button>
                  <Button variant="secondary" className="m-1">
                    Man Of The Match <Badge bg="secondary">2</Badge>
                  </Button>
                  <Button variant="secondary" className="m-1">
                    Top <Badge bg="secondary">20</Badge>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="blog-category">
                <h4>Mini Gallery</h4>
                <div className="mini-gallery mt-2">
                  <div>
                    <img
                      src={require("../../utilities/images/blog/blog-one.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../utilities/images/blog/blog-two.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../utilities/images/blog/blog-three.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../utilities/images/blog/blog-one.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../utilities/images/blog/blog-two.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../utilities/images/blog/blog-three.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-12 col-md-12 col-lg-9 col-xl-9">
            <div className="blogScroller py-5">

              <div id="recentblog">
              <h3 className="text-light border-start ps-3">Recent Blog</h3>
              <div className="single-blog-content mb-5">
                <div className="blog-page-image mt-3">
                  <img
                    src={require("../../utilities/images/blog/blog-image.png")}
                    alt=""
                    className="w-100"
                  />
                  <div className="date">
                    <h5>23 March 2022</h5>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="subTitle">My Blog</span>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores? <Link to="blogDetails"><BsArrowRight className="fs-1 text-success" /></Link>
                  </p>
                </div>

                <div className="single-blog-content border border-1 border-light p-3 my-5">
                  <h1>
                    <span>
                      <FaQuoteLeft />
                    </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam maxime voluptatibus nemo!
                    <span>
                      <FaQuoteRight />
                    </span>
                  </h1>
                  <span className="subTitle">My Blog</span>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laborio elit. Cum provident corrupti sint
                    quam maiores eaque, numquam nobis error delectus beatae ut
                    eligendi tenetur fuga, qui id iusto odio omnis laboriosam
                    asperiores dolorem optio qu elit. Cum provident corrupti
                    sint quam maiores eaque, numquam nobis error delectus beatae
                    ut eligendi tenetur fuga, qui id iusto odio omnis laboriosam
                    asperiores dolorem optio qusam asperiores dolorem optio qu
                    elit. Cum provident corrupti sint quam maiores eaque,
                    numquam nobis error delectus beatae ut eligendi tenetur
                    fuga, qui id iusto odio omnis laboriosam asperiores dolorem
                    optio qu elit. Cum provident corrupti sint quam maiores
                    eaque, numquam nobis error delectus beatae ut eligendi
                    tenetur fuga, qui id iusto odio omnis laboriosam asperiores
                    dolorem optio quas dolores?
                    <Link to="blogDetails"><BsArrowRight className="fs-1 text-success" /></Link>
                  </p>
                </div>
                <div className="single-blog-content my-5">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 py-2">
                      <div className="previous-game">
                        <img
                          src={require("../../utilities/images/gallery/gallery-two.png")}
                          className="w-100 h-100"
                          alt=""
                        />
                        <BiPlay />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 py-2">
                      <div className="previous-game">
                        <img
                          src={require("../../utilities/images/gallery/gallery-one.png")}
                          className="w-100 h-100"
                          alt=""
                        />
                        <BiPlay />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 py-2">
                      <div className="previous-game">
                        <img
                          src={require("../../utilities/images/gallery/gallery-three.png")}
                          className="w-100 h-100"
                          alt=""
                        />
                        <BiPlay />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="subTitle">My Blog</span>
                    <h3>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cum provident corrupti sint quam maiores eaque, numquam
                      nobis error delectus beatae ut eligendi tenetur fuga, qui
                      id iusto odio omnis laboriosam asperiores dolorem optio
                      quas dolores?
                      <Link to="blogDetails"><BsArrowRight className="fs-1 text-success" /></Link>
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div id="winmatch">
              <h3 className="text-light border-start ps-3">Win Matches</h3>
              <div className="single-blog-content mb-5">
                <div className="blog-page-image mt-3">
                  <img
                    src={require("../../utilities/images/gallery/gallery-six.png")}
                    alt=""
                    className="w-100"
                  />
                  <div className="date">
                    <h5>23 March 2022</h5>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="subTitle">My Blog</span>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores?dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores? dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores? dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores?   <Link to="blogDetails"><BsArrowRight className="fs-1 text-success" /></Link>
                  </p>
                </div>

                <div className="single-blog-content border border-1 border-light p-3 my-5">
                  <h1>
                    <span>
                      <FaQuoteLeft />
                    </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam maxime voluptatibus nemo!
                    <span>
                      <FaQuoteRight />
                    </span>
                  </h1>
                  <span className="subTitle">My Blog</span>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laborio elit. Cum provident corrupti sint
                    quam maiores eaque, numquam nobis error delectus beatae ut
                    eligendi tenetur fuga, qui id iusto odio omnis laboriosam
                    asperiores dolorem optio qu elit. Cum provident corrupti
                    sint quam maiorLorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores?dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores? dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores? dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores?es eaque, numquam nobis error delectus beatae
                    ut eligendi tenetur fuga, qui id iusto odio omnis laboriosam
                    asperiores dolorem optio qusam asperiores dolorem optio qu
                    elit. Cum provident corrupti sint quam maiores eaque,
                    numquam nobis error delectus beatae ut eligendi tenetur
                    fuga, qui id iusto odio omnis laboriosam asperiores dolorem
                    optio qu elit. Cum provident corrupti sint quam maiores
                    eaque, numquam nobis error delectus beatae ut eligendi
                    tenetur fuga, qui id iusto odio omnis laboriosam asperiores
                    dolorem optio quas dolores?
                    <Link to="blogDetails"><BsArrowRight className="fs-1 text-success" /></Link>
                  </p>
                </div>
                <div className="single-blog-content my-5">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 py-2">
                      <div className="previous-game">
                        <img
                          src={require("../../utilities/images/gallery/gallery-two.png")}
                          className="w-100 h-100"
                          alt=""
                        />
                        <BiPlay />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 py-2">
                      <div className="previous-game">
                        <img
                          src={require("../../utilities/images/gallery/gallery-one.png")}
                          className="w-100 h-100"
                          alt=""
                        />
                        <BiPlay />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 py-2">
                      <div className="previous-game">
                        <img
                          src={require("../../utilities/images/gallery/gallery-three.png")}
                          className="w-100 h-100"
                          alt=""
                        />
                        <BiPlay />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="subTitle">My Blog</span>
                    <h3>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cum provident corrupti sint quam maiores eaque, numquam
                      nobis error delectus beatae ut eligendi tenetur fuga, qui
                      id iusto odio omnis laboriosam asperiores dolorem optio
                      quas dolores?
                      <Link to="blogDetails"><BsArrowRight className="fs-1 text-success" /></Link>
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div id="lastgoal">
              <h3 className="text-light border-start ps-3">Last Goal</h3>
              <div className="blog-page-image mt-3">
                  <img
                    src={require("../../utilities/images/blog/Capture.PNG")}
                    alt=""
                    className="w-100"
                  />
                  <div className="date">
                    <h5>23 March 2022</h5>
                  </div>
                </div>
                <div className="single-blog-content p-3 my-5">
                  <h1>
                    <span>
                      <FaQuoteLeft />
                    </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam maxime voluptatibus nemo!
                    <span>
                      <FaQuoteRight />
                    </span>
                  </h1>
                  <span className="subTitle">My Blog</span>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laborio elit. Cum provident corrupti sint
                    quam maiores eaque, numquam nobis error delectus beatae ut
                    eligendi tenetur fuga, qui id iusto odio omnis laboriosam
                    asperiores dolorem optio qu elit. Cum provident corrupti
                    sint quam maiorLorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores?dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores? dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores? dolor sit amet consectetur, adipisicing elit.
                    Cum provident corrupti sint quam maiores eaque, numquam
                    nobis error delectus beatae ut eligendi tenetur fuga, qui id
                    iusto odio omnis laboriosam asperiores dolorem optio quas
                    dolores?es eaque, numquam nobis error delectus beatae
                    ut eligendi tenetur fuga, qui id iusto odio omnis laboriosam
                    asperiores dolorem optio qusam asperiores dolorem optio qu
                    elit. Cum provident corrupti sint quam maiores eaque,
                    numquam nobis error delectus beatae ut eligendi tenetur
                    fuga, qui id iusto odio omnis laboriosam asperiores dolorem
                    optio qu elit. Cum provident corrupti sint quam maiores
                    eaque, numquam nobis error delectus beatae ut eligendi
                    tenetur fuga, qui id iusto odio omnis laboriosam asperiores
                    dolorem optio quas dolores?
                    <Link to="blogDetails"><BsArrowRight className="fs-1 text-success" /></Link>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogContent;

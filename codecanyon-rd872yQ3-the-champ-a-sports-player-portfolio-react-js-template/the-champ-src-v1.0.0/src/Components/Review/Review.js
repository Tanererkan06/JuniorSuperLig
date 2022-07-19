import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./Review.css";
const Review = () => {
  const settings3 = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrow:false,
    dots:true,
    autoplay:true,
    
  };
  return (
    <div className="comment py-5">
      <Container>
        <div className="sub-heading border-start border-dark ps-3 text-start mb-5">
          <span>Top Review</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6 p-3">
            <div className="reviewText">
            <span className="subTitle">Lorem, ipsum doloricing.</span>
              <h2>What People Say <br /> About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                possimus unde cupiditate molestias quisquam nesciunt?
              </p>
              <button className="button2">Read All</button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6 p-3">
            <Slider {...settings3}>
              {
                ['home-comment-one.png','home-comment-two.png','home-comment-three.png','home-comment-four.png'].map(comment => <div key={comment}>
                  <div className="mb-5">
                    <div className="reviewImage">
                      <img
                        src={require(`../../utilities/images/comments/${comment}`)}
                        alt=""
                        className="w-100 h-100"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="fw-light mt-2">Rodie Johnson</h3>
                      <span>(Full Stack Developer)</span>
                      <div className="d-flex align-items-center justify-content-center">
                        <AiFillStar className="text-warning" />
                        <AiFillStar className="text-warning" />
                        <AiFillStar className="text-warning" />
                        <AiFillStar className="text-warning" />
                        <AiFillStar className="text-warning" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p>
                        <span>
                          <FaQuoteLeft className="fs-1" />
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                        Alias laborum saepe maxime <br /> veritatis harum dolorum
                        consequuntur exercitationem, <br /> aliquam aperiam architecto
                        fugit reiciendis sunt earum autem? Maxime enim corrupti
                        eveniet nam.
                        <span>
                          <FaQuoteRight className="fs-1" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>)
              }
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;

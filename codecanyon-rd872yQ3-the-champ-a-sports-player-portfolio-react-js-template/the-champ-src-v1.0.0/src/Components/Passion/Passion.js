import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../utilities/images/layout/home-passion-layout.png";
import "./Passion.css";
const Passion = () => {

  return (
    <div>
      <div className="sub-banner py-5">
        <Container>      
          <div className="sub-heading text-start border-start border-1 ps-3">
          <span>My Passion</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
          <div className="row align-items-center py-5">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="backText">
                <h1>
                  Passion Dreams
                </h1>
              </div>
              <div className="galleryFeatureImage2">
                <img src={image1} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="subBannerTexts">
                <span className="subTitle">My Passion</span>
                <h2 className="section-heading">From An Early age...</h2>
                <p>
                 I have been playing football from an early age.Since 7 years of my playing i am very confident to join to a good ranked team. <br />
                 And make a contribution for my team also...
                </p>
                <button className="button1"><Link to="/blogDetails">View More...</Link></button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Passion;

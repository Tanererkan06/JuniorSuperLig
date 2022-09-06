/* import React from 'react'
 
import '../assets/css/style.css';
import '../assets/css/style.css.map';


export default function Slider() {
  return (
    <div><div className="intro">
    <div id="home-slider" className="owl-carousel owl-theme">
      <div className="item">
        <img src={require("../assets/img/slider/bg1.jpg")} alt="" />
        <div className="slide-content col-lg-6 col-lg-offset-3 col-md-12 col-sm-12 text-center">
          <h1>One Team. One Dream</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita sequi, harum. Tenetur cumque dolorem laboriosam,
            similique dicta quaerat quasi quisquam vitae. Quasi placeat
            voluptates perferendis iure modi, ea animi ipsam.
          </p>
          <a href="#" className="button">
            <span>Read More</span>
            <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="item">
        <img src={require("../assets/img/slider/bg2.jpg")} alt="" />
        <div className="slide-content col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 text-center">
          <h1>One Team. One Dream</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita sequi, harum. Tenetur cumque dolorem laboriosam,
            similique dicta quaerat quasi quisquam vitae. Quasi placeat
            voluptates perferendis iure modi, ea animi ipsam.
          </p>
          <a href="#" className="button">
            <span>Read More</span>
            <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="item">
        <img src={require("../assets/img/slider/bg3.jpg")} alt="" />
        <div className="slide-content col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 text-center">
          <h1>One Team. One Dream</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita sequi, harum. Tenetur cumque dolorem laboriosam,
            similique dicta quaerat quasi quisquam vitae. Quasi placeat
            voluptates perferendis iure modi, ea animi ipsam.
          </p>
          <a href="#" className="button">
            <span>Read More</span>
            <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="item">
        <img src={require("../assets/img/slider/bg4.jpg")} alt="" />
        <div className="slide-content col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 text-center">
          <h1>One Team. One Dream</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita sequi, harum. Tenetur cumque dolorem laboriosam,
            similique dicta quaerat quasi quisquam vitae. Quasi placeat
            voluptates perferendis iure modi, ea animi ipsam.
          </p>
          <a href="#" className="button">
            <span>Read More</span>
            <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="customNavigation">
      <a className="btn prev">
        <i className="fa fa-angle-left"></i>
      </a>
      <a className="btn next">
        <i className="fa fa-angle-right"></i>
      </a>
    </div>
  </div></div>
  )
}
 */

import Carousel from 'react-bootstrap/Carousel';
import '../assets/bootstrap.slider.css'

function Slider() {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100"
          src={require("../assets/img/slider/bg1.jpg")}
          alt="First slide" style={{width: "100%"}}
        />
        <Carousel.Caption>
          <h3>Küçük Adımlarla,
              BÜYÜK HEDEFLERE...</h3>
      {/*     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/img/slider/bg2.jpg")}
          alt="Second slide" style={{width: "100%"}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/img/slider/bg3.jpg")}
          alt="Third slide" style={{width: "100%"}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}

export default Slider;
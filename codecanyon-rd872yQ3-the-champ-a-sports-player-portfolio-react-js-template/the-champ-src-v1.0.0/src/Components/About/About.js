import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import { BsFillSuitClubFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { FaTshirt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const About = () => {
  const { aboutInfo } = useAuth();
  return (
    <div id="about" className="aboutSection">
      <Container>
        <div className="sub-heading text-end border-end border-light border-1 pe-3">
          <span>About Me</span>
          <p>My details and information</p>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6"></div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className="aboutText">
              <span className="subTitle">Personal Information</span>
              <h2>
                {aboutInfo?.title
                  ? aboutInfo?.title
                  : "Information about me."}
              </h2>
              <p>
                {aboutInfo?.paragraph
                  ? aboutInfo?.paragraph
                  : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos temporibus quibusdam at, provident quam incidunt eaque eligendi, fugit rerum sed voluptatem magnam fuga ex porro."}
              </p>
              <button className="button2">
                <Link to="/about">Read More...</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="profileInfo mt-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              <div className="info">
                <ImLocation />
                <h5>Birth Date & Place</h5>
                <p>{aboutInfo?.date ? aboutInfo?.date : "Berlin,Germany"}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              <div className="info">
                <GiSkills />
                <h5>Height & Weight</h5>
                <p>{aboutInfo?.height ? aboutInfo?.height : "6.3 ft, 58 Kg"}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              <div className="info">
                <BsFillSuitClubFill />
                <h5>Club & Position</h5>
                <p>
                  {aboutInfo?.club ? aboutInfo?.club : "The Champ, Left Wings"}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              <div className="info">
                <FaTshirt />
                <h5>Jersey Number</h5>
                <p>{aboutInfo?.jersey ? aboutInfo?.jersey : "7/10/5"}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

import React from "react";
import {
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Slider from "react-slick";
import "./Skills.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Skills = () => {
  const settings2 = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Contact Button
    </Tooltip>
  );

  const {skillInfo} = useAuth()
  const skills = [
    {
      name:skillInfo?.first,
      img:"home-skill-run.png",
      option:'Run',
      range:50
    },
    {
      name:skillInfo?.second,
      img:"home-skill-accuracy.png",
      option:'Accuracy',
      range:95
    },
    {
      name:skillInfo?.first,
      img:"home-skill-dribbling.png",
      option:'Carry',
      range:88
    },
    {
      name:skillInfo?.first,
      img:"home-skill-kick.png",
      option:'Kick',
      range:100
    },
  ]
  return (
    <div className="skillContainer">
      <div className="skill">
        <Container>
          <div className="py-5 d-flex justify-content-between">
            <div className="text-end">
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <button className="btn text-light border">
                  <Link to="/contact" className="text-light">
                    Contact<span className="sm-none">With Me</span>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div className="sub-heading text-end border-end border-1 pe-3">
              <span>My Skill</span>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <Slider {...settings2}>
            {[
              "home-skill-one.png",
              "home-skill-two.png",
              "home-skill-three.png",
              "home-skill-one.png",
              "home-skill-two.png",
              "home-skill-three.png",
            ].map((img, x) => (
              <div key={x} className="p-2 text-center">
                <div key={x} className="singleSkill">
                  <div>
                    <img
                      src={require(`../../utilities/images/skills/${img}`)}
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
      <div className="subSkill">
        <Container>
          <div className="mt-5">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                <div>
                  <span className="subTitle">Professional Stuff</span>
                  <div>
                    <span className="fs-3 fw-light">{skillInfo?.title ? skillInfo?.title : 'My skill of Professionals.'}</span>
                  </div>
                  <p>
                  {skillInfo?.paragraph ? skillInfo?.paragraph : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem  expedita consectetur officia provident alias nihil cum volusit amet consectetur adipisicing elit. Quo eveniet dolorem expedita consectetur officia provident alias nihil cum volu'}</p>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <div className="grid-gallery2">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="d-flex">
                    <div className="skillImage">
                      <img
                        src={require(`../../utilities/images/skills/${skill?.img}`)}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="skillText">
                      <h5>{skill?.name ? skill?.name : skill?.option}</h5>
                      <h4>{skill?.range}%</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Skills;

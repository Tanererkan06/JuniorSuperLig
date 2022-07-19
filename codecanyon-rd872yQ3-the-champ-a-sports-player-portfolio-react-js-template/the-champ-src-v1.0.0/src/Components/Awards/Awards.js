import React from "react";
import { Container } from "react-bootstrap";
import "./Awards.css";
import cup1 from '../../utilities/images/prizes/cup_1.png'
import cup2 from '../../utilities/images/prizes/cup_2 (1).png'
import cup3 from '../../utilities/images/prizes/cup_2.png'
import cup4 from '../../utilities/images/prizes/cup_3.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Awards = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id="achievement" className="achievement">
        <div className="backText">
          <h1>
            Awards
          </h1>
        </div>
      <Container>
        <div className="sub-heading text-start border-start border-1 ps-3 border-light">
          <span>All Awards</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      <div>
        <Slider {...settings}>
          <div>
            <div className="prize">
              <div className="prizeImage">
                  <img src={cup1} alt="" className="w-100 h-100" />
              </div>
              <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem ipsum dolor sit .</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="prize">
              <div className="prizeImage">
                <img src={cup2} alt="" className="w-100 h-100" />
              </div>
              <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem ipsum dolor .</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="prize">
              <div className="prizeImage">
                <img src={cup3} alt="" className="w-100 h-100" />
              </div>
              <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem ipsum dr.</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="prize">
              <div className="prizeImage">
                <img src={cup4} alt="" className="w-100 h-100" />
              </div>
              <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem iet consectetur.</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="prize">
                <div className="prizeImage">
                  <img src={cup1} alt="" className="w-100 h-100" />
                </div>
                <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem ipsum t consectetur.</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="prize">
              <div className="prizeImage">
                <img src={cup2} alt="" className="w-100 h-100" />
              </div>
              <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem ipsumsectetur.</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="prize">
              <div className="prizeImage">
                <img src={cup3} alt="" className="w-100 h-100" />
              </div>
              <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem ipsumonsectetur.</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="prize">
              <div className="prizeImage">
                <img src={cup4} alt="" className="w-100 h-100" />
              </div>
              <div className="prizeText text-center mt-2">
                <h6>La-Liga,Brazil</h6>
                <h5 className="fw-light mb-2">Lorem ipsconsectetur.</h5>
                <span>(1995-1998)</span>
              </div>
            </div>
          </div>

        </Slider>
      </div>
      </Container>
    </div>
  );
};

export default Awards;

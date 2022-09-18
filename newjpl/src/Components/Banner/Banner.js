import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
  const {bannerInfo} = useAuth()
  const goBottom = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <div id="home" className="banner d-flex align-items-center justify-content-center">
      <div onClick={goBottom} className="goBottom">
        <div className="goBottomInner">
          <AiOutlineArrowDown className="fs-3 text-light" />
        </div>
      </div>
      <Container>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="profileContent">
              <span className="m-0">Küçük Adımlarla, BÜYÜK HEDEFLERE...</span>
              <h1>{bannerInfo?.name ? bannerInfo?.name : "Junior Süper Lig"}</h1>
              <p className="text-light">
                <p>2022 yılında Sakarya'da kurulan ve Türkiye'de ilk olan Junior Süper Lig kurulduğu il olan Sakarya'nın çocuklarına yönelik başlattığı U9, U10 ve U11 ligleri ile birlikte Türkiye'deki futbol camiası tarafından tanınmıştır.</p>
                <p>Çocukların ve gençlerin geleceğine yön vermeyi hedefliyor ve gelişimlerini gururla takip ediyoruz.</p>
                <p>Ülke genelinde hedeflediğimiz liglerin oluşumu için çalışmalarımızı tüm hızıyla sürdürmekteyiz.</p>
              </p>
              <div className="signature w-50 mb-3">
                <img src={require('../../utilities/images/layout/deneme1.png')} alt="" className="w-100" />
              </div>
              {/* <div className="buttonGroup">
                <button className="me-1 button1"><Link className="text-decoration-none" to="/blog">Read More</Link></button>
                <button className="ms-1 button2"><Link className="text-decoration-none" to="/contact">Contact Me</Link></button>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="profileImage">
              <img src={require('../../utilities/images/layout/kurumsal-removebg.png')} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

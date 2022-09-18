import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="text-center">
          <h2>Junior Süper Lig</h2>
          <ul className="footerList d-flex align-items-center justify-content-center">
            <li>
              <Link to="/home">Anasayfa</Link>
            </li>
            <li>
              <Link to="/about">Kurumsal</Link>
            </li>
            {/* <li>
              <Link to="/events">Events</Link>
            </li> */}
            <li>
              <Link to="/gallery">Galeri</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
        <div className="socials py-3">
          <ul className="footerList d-flex align-items-center justify-content-center">
            <li>
                <a href="https://www.facebook.com/juniorsuperlig" target="_blank"><AiFillFacebook className='fs-2'/></a>
            </li>
            <li>
                <a href="https://www.instagram.com/juniorsuperlig/" target="_blank"><AiFillInstagram className='fs-2'/></a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCSfk2ZKXQmYWdEsoVoLk4Lg" target="_blank"><AiFillYoutube className='fs-2'/></a> 
            </li>
          </ul>
        </div>
        <div className="border-top pt-3 mt-3">
          <p className="text-center">
            Küçük adımlarla, büyük hedeflere...
            {/* <span className="text-light fw-bold">Küçük adımlarla, büyük hedeflere...</span> */}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

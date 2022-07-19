import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="text-center">
          <h2>Follow Me</h2>
          <ul className="footerList d-flex align-items-center justify-content-center">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="socials py-3">
          <ul className="footerList d-flex align-items-center justify-content-center">
            <li>
              <Link to="#">
                <BsFacebook className="fs-2" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <AiFillInstagram className="fs-1" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <AiFillTwitterCircle className="fs-1" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-top pt-3 mt-3">
          <p className="text-center">
            All rights reserved by
            <span className="text-light fw-bold"> iGen_Theme</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

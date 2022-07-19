import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
const Contact = () => {
  const { contactInfo } = useAuth();
  return (
    <div id="contact" className="contact py-5">
      <div>
        <div className="backText">
          <h1>Contact</h1>
        </div>
        <Container>
          <div className="sub-heading border-end border-1 border-light pe-3 text-end">
            <span>Contact Me</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row column-reverse align-items-center py-5">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 py-4">
              <div className="responsive75">
                <div className="border-bottom d-flex align-items-center justify-content-between">
                  <h3>Contact Us</h3>
                  <div>
                    <FaFacebookSquare className="fs-3 mx-2" />
                    <FaTwitterSquare className="fs-3 mx-2" />
                    <FaInstagramSquare className="fs-3 mx-2" />
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                    <h5>Home</h5>
                    <p>
                      {contactInfo?.address
                        ? contactInfo?.address
                        : "Bexim Tower - 24 N/W,  Paris, France"}
                    </p>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                    <h5>Our Process</h5>
                    <p>News / Blogs</p>
                    <button className="submitBtn">Visit Now</button>
                  </div>
                </div>
                <div className="border-bottom">
                  <h3>About Us</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <p>
                    <span>
                      <IoCall className="me-2" />
                    </span>
                    {contactInfo?.primary
                      ? contactInfo?.primary
                      : "+008 - 01XXXXXX"}
                  </p>
                  <p>
                    <span>
                      <FaEnvelope className="me-2" />
                    </span>
                    {contactInfo?.secondary
                      ? contactInfo?.secondary
                      : "example@gmail.com"}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 py-4">
              <div className="contactForm">
                <form>
                  <div className="mb-4">
                    <label className="d-block">Full Name</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="mb-4">
                    <label className="d-block">Email Address</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="mb-4">
                    <label className="d-block">Your Message</label>
                    <textarea name="" id="" rows="auto"></textarea>
                  </div>
                  <input type="submit" className="submitBtn" value="Send Us" />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;

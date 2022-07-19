import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsImages, BsClipboardData,BsCalendar4Event } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import "./Header.css";
const Header = () => {
  const [bar, setBar] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggoleBar = () => {
    setBar(!bar);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <div className="header">
      {sticky && (
        <div className="navigation">
          <div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Home</Tooltip>}
              >
                <Link to="/">
                  <Button variant="secondary">
                    <AiOutlineHome />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">About</Tooltip>}
              >
                <Link to="/about">
                  <Button variant="secondary">
                    <AiOutlineUser />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Events</Tooltip>}
              >
                <Link to="/events">
                  <Button variant="secondary">
                    <BsCalendar4Event />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Gallery</Tooltip>}
              >
                <Link to="/gallery">
                  <Button variant="secondary">
                    <BsImages />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Blog</Tooltip>}
              >
                <Link to="/blog">
                  <Button variant="secondary">
                    <FaBloggerB />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Contact</Tooltip>}
              >
                <Link to="/contact">
                  <Button variant="secondary">
                    <IoIosCall />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Dashboard</Tooltip>}
              >
                <Button variant="secondary">
                  <Link to="/dashboard">
                    <BsClipboardData />
                  </Link>
                </Button>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      )}

      <Container>
        <div className="headerWrapper">
          <div className="logoContainer">
            <div className="logo">
              <img src={require('../../utilities/images/logo/logo.png')} alt="" className="w-100" />
            </div>
          </div>
          <div
            className={`headerMenuContainer ${bar ? "toggle-side-bar" : ""}`}
          >
            <ul className="headerMenu">
              <li>
                <Link to="/">Home</Link>
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
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className="lg-none">
            <div
              onClick={toggoleBar}
              className={`nav-bar ${bar ? "cross" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

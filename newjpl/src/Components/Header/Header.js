import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsImages, BsClipboardData,BsCalendar4Event } from "react-icons/bs";
// import { IoLogInSharp, IoMdPersonAdd } from 'react-icons/io'
import { FaBloggerB } from "react-icons/fa";
import { IoIosCall, IoIosPersonAdd  } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { getAllSehir } from '../../redux-new/actions/sehir';
import { setCurrentSehir } from '../../redux-new/slices/currentSehir';
import { useDispatch, useSelector } from 'react-redux';
import "./Header.css";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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

  useEffect(() => {
    dispatch(getAllSehir());
  }, []);

  const dispatch = useDispatch();
  const sehirler = useSelector(state => state.sehir);

  return (
    <div className="header">
      {sticky && (
        <div className="navigation">
          <div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Anasayfa</Tooltip>}
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
                overlay={<Tooltip id="tooltip-left">Kurumsal</Tooltip>}
              >
                <Link to="/about">
                  <Button variant="secondary">
                    <AiOutlineUser />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            {/* <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Etkinlikler</Tooltip>}
              >
                <Link to="/events">
                  <Button variant="secondary">
                    <BsCalendar4Event />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div> */}
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Galeri</Tooltip>}
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
                overlay={<Tooltip id="tooltip-left">İletişim</Tooltip>}
              >
                <Link to="/contact">
                  <Button variant="secondary">
                    <IoIosCall />
                  </Button>
                </Link>
              </OverlayTrigger>
            </div>
            {/* <div className="m-1">
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
            </div> */}
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Giriş Yap</Tooltip>}
              >
                <Button variant="secondary">
                  <Link to="/login">
                    <FiLogIn className="text-secondary" />
                  </Link>
                </Button>
              </OverlayTrigger>
            </div>
            <div className="m-1">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Kayıt Ol</Tooltip>}
              >
                <Button variant="secondary">
                  <Link to="/signup">
                    <IoIosPersonAdd className="text-secondary" />
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
              <img src={require('../../utilities/images/logo/logo-junior.png')} alt="" className="w-100" />
            </div>
          </div>
          <div
            className={`headerMenuContainer ${bar ? "toggle-side-bar" : ""}`}
          >
            <ul className="headerMenu">
              <li>
                <Dropdown className="bg-dark text-white">
                  <Dropdown.Toggle id="dropdown-button-dark-example1" className="bg-dark text-white">
                    Şehirler
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark text-white">
                    {
                      sehirler.length > 0
                      ? sehirler.map((sehir, index) => {
                        return (
                          <>
                            <Dropdown.Item onClick={() => dispatch(setCurrentSehir(sehir.sehiradi))} className="bg-dark text-white">{sehir.sehiradi}</Dropdown.Item>
                          </>
                        )
                      })
                      : <div>Yükleniyor...</div>
                    }
                    
                    {/* <Dropdown.Item href="#" className="bg-dark text-white">Sakarya</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Link to="/">Anasayfa</Link>
              </li>
              <li>
                <Link to="/about">Kurumsal</Link>
              </li>
              {/* <li>
                <Link to="/events">Etkinlikler</Link>
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
              <li>
                <Link to="/login">Giriş Yap</Link>
              </li>
              <li>
                <Link to="/signup">Kayıt Ol</Link>
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

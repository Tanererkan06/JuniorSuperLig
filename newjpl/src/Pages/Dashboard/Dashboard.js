import React, { useState } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import DashboardAbout from "../../Components/DashboardComponents/DashboardAbout/DashboardAbout";
import DashboardHome from "../../Components/DashboardComponents/DashboardHome/DashboardHome";
import { AiOutlineBars,AiOutlineUser,AiOutlineHome,AiOutlineCalendar } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { ImBlog } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import './Dashboard.css'
import useAuth from "../../Hooks/useAuth";
import ErrorPage from '../ErrorPage/ErrorPage'
const Dashboard = () => {
  const {setTheme,theme} = useAuth()
  let { path, url } = useRouteMatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="dashboard-header">
        <Navbar bg={`${theme ? 'dark' : 'light'}`} expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/home">
            <img
            src={require("../../utilities/images/logo/logo-junior.png")}
              width="60"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <AiOutlineBars onClick={handleShow} className={`fs-3 pointer ${theme ? 'text-light' : 'text-dark'}`}/>
          </Container>
        </Navbar>
        
        <Offcanvas show={show} placement="end" onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <div className="logo3">
              <img
                src={require("../../utilities/images/logo/logo-1.png")}
                className="w-100 h-100"
                alt=""
              />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <span>Pages (Admin)</span>
              <ul className="dashboard-pages-container">
                <li onClick={()=>setShow(false)}>
                  <Link to={`${url}`}><AiOutlineHome className="me-3"/>Home Page</Link>
                </li>
                <li onClick={()=>setShow(false)}>
                  <Link to={`${url}/aboutpage`}><AiOutlineUser className="me-3"/>About Page</Link>
                </li>
                <li onClick={()=>setShow(false)}>
                  <Link to={`${url}/404`}><AiOutlineCalendar className="me-3"/>404 Page</Link>
                </li> 
              </ul>
            </div>
            <div>
              <span>Theme</span>
              <ul className="dashboard-pages-container">
                <li onClick={()=>setShow(false)}>
                  <span className="pointer d-block" onClick={()=> setTheme(true)}><AiOutlineHome className="me-3"/>Dark (Default)</span>
                </li>
                <li onClick={()=>setShow(false)}>
                  <span className="pointer d-block" onClick={()=>setTheme(false)}><AiOutlineUser className="me-3"/>Light</span>
                </li>
              </ul>
            </div>
            <div>
              <span>Pages (User)</span>
              <ul className="dashboard-pages-container">
                <li>
                  <Link to="/"><AiOutlineHome className="me-3"/>Home</Link>
                </li>
                <li>
                  <Link to="/about"><AiOutlineUser className="me-3"/>About</Link>
                </li>
                <li>
                  <Link to="/events"><AiOutlineCalendar className="me-3"/>Event Page</Link>
                </li>
                <li>
                  <Link to="/gallery"><GrGallery className="me-3"/>Gallery Page</Link>
                </li>
                <li>
                  <Link to="/blog"><ImBlog className="me-3"/>Blog Page</Link>
                </li>
                <li>
                  <Link to="/contact"><IoIosCall className="me-3"/>Contact Page</Link>
                </li>
              </ul>
            </div> 
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <Switch>
        <Route exact path={path}>
          <DashboardHome />
        </Route>

        <Route exact path={`${path}/`}>
          <DashboardHome />
        </Route>

        <Route exact path={`${path}/aboutpage`}>
          <DashboardAbout />
        </Route>
        
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;

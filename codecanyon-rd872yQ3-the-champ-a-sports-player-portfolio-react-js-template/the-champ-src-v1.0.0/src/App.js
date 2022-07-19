import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import {BrowserRouter,Routes,Route,Link, useLocation} from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import AboutPage from '../src/Pages/AboutPage/AboutPage'
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import EventPage from "./Pages/EventPage/EventPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Preloader from "./Components/Preloader/Preloader";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BlogDetailsPage from "./Pages/BlogDetailsPage/BlogDetailsPage";
function App() {
  const [loader, setLoader] = useState(true);
  const [loaderAnimation, setLoaderAnimation] = useState(false);


  const location = useLocation();

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
      setLoaderAnimation(true);
    }, 1500);
  }, []);
  return (
    <div>
      {
        loader ? <div>
          <Preloader/>
        </div> : <div className={`${loaderAnimation ? "animation" : ''}`}>
          <AuthProvider>
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
            {/* <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route> */}
            <Route path="/about" element={<AboutPage />}>
            </Route>
            <Route path="/gallery"
            element={<GalleryPage />}>
            </Route>
            <Route path="/contact"
            element={<ContactPage />}>
            </Route>
            <Route path="/blog"
              element={<BlogPage />}>
            </Route>
            <Route path="/events" 
              element={<EventPage />}>
            </Route>
            <Route path="/blogDetails"
              element={<BlogDetailsPage/>}>
            </Route>
            <Route path="/dashboard"
              element={<Dashboard />}>
            </Route>
            <Route path="*"
              element={<ErrorPage />}>
            </Route>
          </Routes>
          </BrowserRouter>
          </AuthProvider>          
        </div>
      }

    </div>
  );
}

export default App;

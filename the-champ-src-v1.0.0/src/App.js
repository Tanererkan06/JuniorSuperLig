import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/gallery">
              <GalleryPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
            <Route path="/events">
              <EventPage />
            </Route>
            <Route path="/blogDetails">
              <BlogDetailsPage/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
          </BrowserRouter>
          </AuthProvider>          
        </div>
      }

    </div>
  );
}

export default App;

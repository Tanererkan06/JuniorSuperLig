import React from "react";
/* import "../assets/css/owl.carousel.css";*/
/* import "../assets/css/style.css";
import "../assets/css/style.css.map"; 
 
/* import './assets/js/bootstrap-datepicker';
import './assets/js/jquery.ba-outside-events.min';
import './assets/js/jquery.min';
import './assets/js/jquery.timelinr-0.9.54'; 
import './assets/js/scripts';
import './assets/js/tab' */
import Slider from "./Slider";
import Header from "./Header";
import About from "./About";
import Teams from "./Teams";
import News from "./News";
import Footer from "./Footer";
import OurTeams from "./OurTeams";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
/* import "../../src/index.css"; */
export default function Home() {
  return (
    <div>
     <Slider />
      <Header />
      <About /> 
      <Banner1/>
      <News />
      <Banner2/>
      <Footer />

    </div>
  );
}

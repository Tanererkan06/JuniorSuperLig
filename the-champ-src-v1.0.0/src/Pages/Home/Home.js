import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
import About from "../../Components/About/About";
import Awards from "../../Components/Awards/Awards";
import Result from "../../Components/Result/Result";
import Skills from "../../Components/Skills/Skills";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import Review from "../../Components/Review/Review";
import Blog from "../../Components/Blog/Blog";
import Passion from "../../Components/Passion/Passion";
import SubHeader from "../../Components/SubHeader/SubHeader";
import Background from "../../Components/Background/Background";
import Background2 from "../../Components/Background2/Background2";
import Newsletter from "../../Components/Newsletter/Newsletter";
const Home = () => {
  return (
    <div className="home">
      <SubHeader/>
      <Header />
      <Banner />
      <About />     
      <Awards />      
      <Gallery />
      <Passion /> 
      <Skills />
      <Result />
      <Blog />
      <Background/>
      <Review />
      <Background2/>
      <Contact />
      <Newsletter/>
      <Footer />
    </div>
  );
};
export default Home;

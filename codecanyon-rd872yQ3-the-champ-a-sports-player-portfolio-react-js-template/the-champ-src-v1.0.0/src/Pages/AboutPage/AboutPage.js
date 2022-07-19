import React from 'react';
import AboutBanner from '../../Components/AboutBanner/AboutBanner';
import AboutDetails from '../../Components/AboutDetails/AboutDetails';
import Background from '../../Components/Background/Background';
import Background2 from '../../Components/Background2/Background2';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import History from '../../Components/History/History';
import Newsletter from '../../Components/Newsletter/Newsletter';
import SubHeader from '../../Components/SubHeader/SubHeader';
import Upcomming from '../../Components/Upcomming/Upcomming';
import bg from '../../utilities/images/background/about-banner-bg.png'
const AboutPage = () => {
    const bannerData = {
        title:'About Myself',
        bgImage:bg,
        firstspan:'About',
        secondspan:'Myself'
    }
    return (
        <div>
            <SubHeader/>
            <Header/>
            <AboutBanner bannerData={bannerData}/>
            <AboutDetails/>
            <Background/>
            <Upcomming/>
            <Background2/>
            <History/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default AboutPage;
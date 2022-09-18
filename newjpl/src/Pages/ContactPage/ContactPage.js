import React from 'react';
import AboutBanner from '../../Components/AboutBanner/AboutBanner';
import SubHeader from '../../Components/SubHeader/SubHeader'
import Header from '../../Components/Header/Header'
import bg from '../../utilities/images/background/contact-banner-bg.png'
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Location from '../../Components/Location/Location';
import Background from '../../Components/Background/Background';
import Background2 from '../../Components/Background2/Background2';
import Newsletter from '../../Components/Newsletter/Newsletter';
const ContactPage = () => {
    const bannerData = {
        title:'İletişim',
        bgImage:bg,
        firstspan:'İletişim',
        // secondspan:'With Me'
    }
    return (
        <div>
            <SubHeader/>
            <Header/>
            <AboutBanner bannerData={bannerData}/>
            <Contact/>
            <Background/>
            <Location/>
            <Background2/>
            {/* <Newsletter/> */}
            <Footer/>
        </div>
    );
};

export default ContactPage;
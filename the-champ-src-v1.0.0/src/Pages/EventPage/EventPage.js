import React from 'react';
import AboutBanner from '../../Components/AboutBanner/AboutBanner';
import AllEvents from '../../Components/AllEvents/AllEvents';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Newsletter from '../../Components/Newsletter/Newsletter';
import SubHeader from '../../Components/SubHeader/SubHeader';
import bg from '../../utilities/images/background/event-banner-bg.png'
const EventPage = () => {
    const bannerData = {
        title:'My Events',
        bgImage:bg,
        firstspan:'All My',
        secondspan:'Events'
    }
    return (
        <div>
            <SubHeader/>
            <Header/>
            <AboutBanner bannerData={bannerData}/>
            <AllEvents/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default EventPage;
import React from 'react';
import AboutBanner from '../../Components/AboutBanner/AboutBanner';
import Background from '../../Components/Background/Background';
import Background2 from '../../Components/Background2/Background2';
import Favourite from '../../Components/Favourite/Favourite';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Photos from '../../Components/Photos/Photos';
import SubHeader from '../../Components/SubHeader/SubHeader';
import bg from '../../utilities/images/background/gallery-banner-bg.png'
const GalleryPage = () => {
    const bannerData = {
        title:'My Gallery',
        bgImage:bg,
        firstspan:'Gallery',
        secondspan:'Photos'
    }
    return (
        <div>
            <SubHeader/>
            <Header/>
            <AboutBanner bannerData={bannerData}/>
            <Photos/>
            <Background/>
            <Favourite/>
            <Background2/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default GalleryPage;
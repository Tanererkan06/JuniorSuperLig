import React from 'react';
import AboutBanner from '../../Components/AboutBanner/AboutBanner';
import BlogContent from '../../Components/BlogContent/BlogContent';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Newsletter from '../../Components/Newsletter/Newsletter';
import SubHeader from '../../Components/SubHeader/SubHeader';
import bg from '../../utilities/images/background/blog-banner-bg.png'
const BlogPage = () => {
    const bannerData = {
        title:'My Blog',
        bgImage:bg,
        firstspan:'My',
        secondspan:'Blog',
    }
    return (
        <div>
            <SubHeader/>
            <Header/>
            <AboutBanner bannerData={bannerData}/>
            <BlogContent/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default BlogPage;
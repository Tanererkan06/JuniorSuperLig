import React from 'react';
import BlogDetails from '../../Components/BlogDetails/BlogDetails';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SubHeader from '../../Components/SubHeader/SubHeader';

const BlogDetailsPage = () => {
    return (
        <div>
            <SubHeader/>
            <Header/>
            <BlogDetails/>
            <Footer/>
        </div>
    );
};

export default BlogDetailsPage;
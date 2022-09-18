import React from 'react';
import BlogDetails from '../../Components/BlogDetails/BlogDetails';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SubHeader from '../../Components/SubHeader/SubHeader';
// import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
    // let { id } = useParams();
    // console.log("ID: ", id);

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
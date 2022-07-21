import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutDetails.css'
import { BsFillPlayCircleFill } from "react-icons/bs";
import useAuth from '../../Hooks/useAuth';
const AboutDetails = () => {
    const {aboutPageAboutInfo} = useAuth()
    return (
        <div className='text-light py-5'>
            <Container>
            <div className="sub-heading border-start border-1 border-light ps-3 text-start">
                <span>About Me</span>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='mt-5'>
                <div className="row">
                    <div className="col-12 col-md-12.col-lg-6 col-xl-6">
                        <div className="about-me-text">
                            <h2>{aboutPageAboutInfo.title ? aboutPageAboutInfo.title : 'I am David Stricker'}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className='aboutMeDetails'>
                            <p>{aboutPageAboutInfo.paragraph ? aboutPageAboutInfo.paragraph : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere optio ab dolorum nihil sapiente in animi, quibusdam excepturi error suscipit consequuntur. Facere voluptate vero ut aliquid vitae nihil, quaerat officia, odit optio sint rem molestiae veritatis suscipit eos non nulla neque animi ab dolorem corporis harum, laboriosam temporibus! Labore, consequae iure voluptates aperiam ducimus molestias excepturi culpa, dolorum natus asperiores possimus fuga sint blanditiis.'}</p>
                        </div>
                        <div className="explore-more">
                            <button className='bg-transparent border-0 text-light'>
                                <BsFillPlayCircleFill className='me-3 fs-1'/>Explore More
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-12.col-lg-6 col-xl-6 position-relative">
                        <div className='about-page-img w-75 mx-auto'>
                            <img src={require('../../utilities/images/layout/about-banner-layout2.png')} alt="" className="w-100" />
                        </div>
                        <div className='about-page-img2'>
                            <img src={require('../../utilities/images/layout/about-banner-layout1.png')} alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default AboutDetails;
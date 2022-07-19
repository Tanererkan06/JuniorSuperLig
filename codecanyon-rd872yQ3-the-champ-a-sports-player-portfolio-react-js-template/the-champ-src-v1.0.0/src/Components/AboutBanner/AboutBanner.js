import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutBanner.css'
const AboutBanner = (props) => {
    return (
        <div className='about-banner-container'>
            <div className='about-banner' style={{backgroundImage: `url(${props.bannerData.bgImage})`}}>
                <Container>
                    <div className='about-page-text'>
                        <span className='subTitle'>{props.bannerData.title}</span>
                        <h1>{props.bannerData.firstspan} <br /> {props.bannerData.secondspan}</h1>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AboutBanner;
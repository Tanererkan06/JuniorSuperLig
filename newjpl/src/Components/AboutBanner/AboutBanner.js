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
                        {/* <span className='subTitle'>Kurumsal</span> */}
                        {/* <h1 className="mb-4">Kurumsal</h1> */}
                        <h1 className="mb-4">{props.bannerData.firstspan}</h1>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AboutBanner;
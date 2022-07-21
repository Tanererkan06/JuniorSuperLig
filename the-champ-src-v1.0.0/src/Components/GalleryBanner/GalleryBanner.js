import React from 'react';
import { Container } from 'react-bootstrap';
import './GalleryBanner.css'
const GalleryBanner = () => {
    return (
        <div className='gallery-banner'>
            <Container>
                <div className='gallery-page-text'>
                    <span className='subTitle'>My Gallery</span>
                    <h1>Gallery <br /> Photos</h1>
                </div>
            </Container>
        </div>
    );
};

export default GalleryBanner;
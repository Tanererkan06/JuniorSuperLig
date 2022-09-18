import React from 'react';
import {Container} from 'react-bootstrap'
import './Location.css'
const Location = () => {
    return (
        <div className='map-container py-5'>
            <Container>
                <div className="map">
                <iframe title="Location" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.9721825505953!2d30.34735701744385!3d40.78462570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb3a0ab766ce3%3A0xdcf612fc80aee769!2sSerdivan%20Halisaha!5e0!3m2!1str!2str!4v1655131782481!5m2!1str!2str" width="100%" height="420" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </div>
    );
};

export default Location;
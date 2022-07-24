import React from 'react';
import {Container} from 'react-bootstrap'
import './Location.css'
const Location = () => {
    return (
        <div className='map-container py-5'>
            <Container>
                <div className="map">
                <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3857186072764!2d90.34991501551177!3d23.804879292608664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c140b80748ff%3A0x984809fe0ac18583!2siGen%20Solutions%20Limited!5e0!3m2!1sen!2sbd!4v1655791566751!5m2!1sen!2sbd" width="100%" height="420" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </div>
    );
};

export default Location;
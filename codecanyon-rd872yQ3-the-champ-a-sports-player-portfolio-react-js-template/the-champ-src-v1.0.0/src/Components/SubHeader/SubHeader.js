import React from 'react';
import { Container } from 'react-bootstrap';
import { GoLocation } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { FaFacebookSquare,FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import './SubHeader.css'

const SubHeader = () => {
    return (
        <div className='subHeader'>
            <Container>
                <div className="row align-items-center">
                    <div className="col-4 col-md-6 col-lg-6 col-xl-6">
                        <div className='d-flex align-items-center justify-content-start'>
                            <div className="contactInfo">
                                <span><GoLocation className='bg-light text-dark fs-4 p-1 rounded'/><span className='sm-none'>27th Avenue, New York</span></span>
                                <span className='ms-3'><MdCall className='bg-light text-dark fs-4 p-1 rounded'/><span className='sm-none'>+ (1) 31 555 555</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-md-6 col-lg-6 col-xl-6">
                        <div className='d-flex align-items-center justify-content-end'>
                            <div className='socials'>
                                <FaFacebookSquare className='mx-2 fs-4'/>
                                <AiFillInstagram className='mx-2 fs-3'/>
                                <BsLinkedin className='mx-2 fs-5'/>
                                <FaTwitterSquare className='ms-2 fs-4'/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SubHeader;
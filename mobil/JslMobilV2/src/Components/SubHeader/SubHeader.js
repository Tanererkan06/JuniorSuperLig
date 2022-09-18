import React from 'react';
import { Container } from 'react-bootstrap';
import { GoLocation } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

import { BsLinkedin } from "react-icons/bs";
import './SubHeader.css'

const SubHeader = () => {
    return (
        <div className='subHeader'>
            <Container>
                <div className="row align-items-center">
                    <div className="col-4 col-md-6 col-lg-6 col-xl-6">
                        <div className='d-flex align-items-center justify-content-start'>
                            <div className="contactInfo sm-none2">
                                <div className='d-flex flex-row mt-1'>
                                    <GoLocation className='bg-light text-dark fs-4 p-1 rounded'/>
                                    <span className='sm-none'>Yahyalar, Ankara Cd. No:73, 54100 Adapazarı/Sakarya</span>
                                </div>
                                <div className='d-flex flex-row mt-2 mb-1'>
                                    <MdCall className='bg-light text-dark fs-4 p-1 rounded'/>
                                    <span className='sm-none'>0 530 833 42 54</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-md-6 col-lg-6 col-xl-6">
                        <div className='d-flex align-items-center justify-content-end'>
                            <div className='socials'>
                                <a href="https://www.facebook.com/juniorsuperlig" target="_blank"><AiFillFacebook className='mx-2 fs-3'/></a>
                                <a href="https://www.instagram.com/juniorsuperlig/" target="_blank"><AiFillInstagram className='mx-2 fs-3'/></a>
                                <a href="https://www.youtube.com/channel/UCSfk2ZKXQmYWdEsoVoLk4Lg" target="_blank"><AiFillYoutube className='mx-2 fs-2'/></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SubHeader;
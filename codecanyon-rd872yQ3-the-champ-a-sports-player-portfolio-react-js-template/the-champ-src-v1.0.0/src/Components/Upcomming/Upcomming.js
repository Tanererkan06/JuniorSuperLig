import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './Upcomming.css'

const Upcomming = () => {
    const {aboutPageUpcommingInfo} = useAuth()
    return (
        <div className='upcomming py-5'>
            <Container>
                <div className="sub-heading text-start border-start  border-dark ps-3">
                <span>Upcomming</span>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="row align-items-center position-relative">
                    <div className="backText2">
                        <h1>Live</h1>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                        <div className="row align-items-center">
                            <div className='text-center col-12 col-md-12 col-lg-5 col-xl-6'>
                               <div className="upcomming-image">
                                <img src={require('../../utilities/images/upcomming/home-result-logo.png')} alt="" className="w-100" />
                               </div>
                            </div>
                            <div className='text-center col-12 col-md-12 col-lg-7 col-xl-6'>
                                <div className="upcomming-game-text">
                                    <span className="subTitle">Lorem ipsum</span>
                                    <h4>{aboutPageUpcommingInfo.first ? aboutPageUpcommingInfo.first : 'Riding Rocket'}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 col-xl-4 text-center">
                        <div>
                            <h1>{aboutPageUpcommingInfo.time ? aboutPageUpcommingInfo.time : '07:30'}</h1>
                        </div>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="row column-reverse align-items-center">
                            <div className='text-center col-12 col-md-12 col-lg-7 col-xl-6'>
                                <div className="upcomming-game-text">
                                    <span className="subTitle">Lorem ipsum</span>
                                    <h4>{aboutPageUpcommingInfo.opposite ? aboutPageUpcommingInfo.opposite : 'Riding Rocket'}</h4>
                                </div>
                            </div>
                            <div className='text-center col-12 col-md-12 col-lg-5 col-xl-6'>
                                <div className="upcomming-image">
                                <img src={require('../../utilities/images/upcomming/home-result-logo2.png')} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Upcomming;
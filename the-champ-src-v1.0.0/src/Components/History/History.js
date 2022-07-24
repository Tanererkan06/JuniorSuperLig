import React from 'react';
import { Container } from 'react-bootstrap';
import './History.css'
import { BsFillPlayCircleFill } from "react-icons/bs";

const History = () => {
    return (
        <div className='history py-5'>
            <Container>
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 colo-lg-6 col-xl-6">
                        <div className='history-image w-50 mx-auto'>
                            <img src={require('../../utilities/images/layout/about-layout.png')} alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-md-12 colo-lg-6 col-xl-6">
                        <div>
                            <span className="subTitle">Games review</span>
                            <h2>All the game was a battle-ground</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis tempore perspiciatis ex laborum minus illum eaque necessitatibus ipsum cumque assumenda hic deleniti aut laudantium, nostrum facilis, quasi ipsam saepe nisi! Tempore eaque quisquam cumque iure? Sed at porro perferendis beatae sequi vel hic nostrum velit minus eveniet, nulla soluta quidem voluptatum ea numquam in voluptates eius obcaecati maxime? Ipsum, totam! Sequi explicabo odit sed dignissimos!</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span className='subTitle'>Lorem ipsum</span>
                    <h4>Previous Games Videos</h4>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
                            <div className='previous-game'>
                                <img src={require('../../utilities/images/gallery/gallery-one.png')} className="w-100 h-100" alt="" />
                                <BsFillPlayCircleFill/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
                            <div className='previous-game'>
                                <img src={require('../../utilities/images/gallery/gallery-two.png')} className="w-100 h-100" alt="" />
                                <BsFillPlayCircleFill/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
                            <div className='previous-game'>
                                <img src={require('../../utilities/images/gallery/gallery-three.png')} className="w-100 h-100" alt="" />
                                <BsFillPlayCircleFill/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
                            <div className='previous-game'>
                                <img src={require('../../utilities/images/gallery/gallery-four.png')} className="w-100 h-100" alt="" />
                                <BsFillPlayCircleFill/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default History;
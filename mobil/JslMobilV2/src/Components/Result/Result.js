import React from 'react';
import { Container } from 'react-bootstrap';
import './Result.css'
import team1 from '../../utilities/images/result/1.png'
import team2 from '../../utilities/images/result/2.png'
import { HashLink } from 'react-router-hash-link';
const Result = () => {
  return (
    <div className="result py-5 text-center">
      <Container>
      <div className="sub-heading text-start border-start border-1 ps-3">
          <span>Last Goal</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      <div className="w-25 py-2 mx-auto text-center">
        <h5 className='text-light fw-light'>Primary League</h5>
      </div>
        <div className="teamContainer">
          <div className="team">
            <div className="teamText ">
              <h5 className='fw-light border-bottom border-3 pb-2 border-light '>Windy City</h5>
              <div className="text-light text-end">
                <span>Win</span>
              </div>
            </div>
            <div className="teamImage">
              <img src={team1} alt="" className="w-100" />
            </div>
            <div className='bg-light py-4 px-3 rounded text-dark m-1'>
              <h2>10</h2>
            </div>
          </div>
          <div className="team d-flex align-items-center">
            <div className='bg-light py-4 px-3 rounded text-dark m-1'>
              <h2>00</h2>
            </div>
            <div className="teamImage">
              <img src={team2} alt="" className="w-100" />
            </div>
            <div className="teamText">
              <h5 className='fw-light border-bottom border-3 pb-2 border-light '>City United</h5>
              <div className="text-start text-light">
              <span>Loose</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-50 py-2 mx-auto text-center">
            <span>December 19, 2021 | 9:50 am</span><br />
            <HashLink to="blog/#lastgoal"><button className="button1 my-3">Read More...</button></HashLink>
          </div>
      </Container>
    </div>
  );
};

export default Result;

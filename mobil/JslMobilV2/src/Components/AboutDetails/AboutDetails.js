import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutDetails.css'
import { BsFillPlayCircleFill } from "react-icons/bs";
import useAuth from '../../Hooks/useAuth';
const AboutDetails = () => {
    const {aboutPageAboutInfo} = useAuth()
    return (
        <div className='text-light py-5'>
            <Container>
            {/* <div className="sub-heading border-start border-1 border-light ps-3 text-start">
                <span>Hakkımızda</span>
            </div> */}

            <div className='mt-3'>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="about-me-text">
                            <h2>Hakkımızda</h2>
                        </div> 
                        <div className='aboutMeDetails'>
                            <p>2022 yılında Sakarya'da kurulan ve Türkiye'de ilk olan Junior Süper Lig kurulduğu il olan Sakarya'nın çocuklarına yönelik başlattığı U9, U10 ve U11 ligleri ile birlikte Türkiye'deki futbol camiası tarafından tanınmıştır.</p>
                            <p>Çocukların ve gençlerin geleceğine yön vermeyi hedefliyor ve gelişimlerini gururla takip ediyoruz.</p>
                            <p>Ülke genelinde hedeflediğimiz liglerin oluşumu için çalışmalarımızı tüm hızıyla sürdürmekteyiz.</p>
                        </div>
                        <div className="about-me-text">
                            <h2>Misyonumuz</h2>
                        </div> 
                        <div className='aboutMeDetails'>
                        <p>Çocuklarımızın ve gençlerimizin müsabaka oynayarak gelişmelerine  katkı, özgüvenlerine artış ile birlikte sporu severek yapmalarına katkı sağlamak.</p>
                        </div>
                        <div className="about-me-text">
                            <h2>Vizyonumuz</h2>
                        </div> 
                        <div className='aboutMeDetails'>
                        <p>Ülkemizde başta 5-12 yaş arası olan çocuklarımız ile 12-18 yaş arası gençlerimizin eksikliği olan lig usulü müsabaka oynamalarını ve bu sayede gelişim sağlamalarını hedeflemekteyiz.</p>
                            <p>Her ilimizde şubeleşmeyi ve tüm çocuklarımız ile birlikte gençlerimize ulaşmayı hedefliyoruz.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 position-relative">
                        <div className='about-page-img w-75 mx-auto'>
                            <img src={require('../../utilities/images/layout/home-passion-layout1.png')} alt="" className="w-100" />
                        </div>
                        {/* <div className='about-page-img2'>
                            <img src={require('../../utilities/images/layout/about-banner-layout1.png')} alt="" className="w-100" />
                        </div> */}
                    </div>
                </div>
            </div>
           
         
            </Container>
        </div>
    );
};

export default AboutDetails;
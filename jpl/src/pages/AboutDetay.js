import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
export default function AboutDetay() {
    return (
        <div>
            <Header />
            <Slider />
            <div id="about" className="about-detay">


                <div className="container">


                    <div className="preamble text-center col-lg-6 col-lg-offset-1" style={{marginTop:"70px"}}>
                        <h4 style={{color:"red",fontSize:"30px"}}>Hakkımızda</h4>
                        <p style={{marginTop:"30px",fontSize:"15px"}}>2022 yılında Sakarya'da kurulan ve Türkiye'de ilk olan Junior Süper Lig kurulduğu il olan Sakarya'nın çocuklarına yönelik başlattığı U9, U10 ve U11 ligleri ile birlikte Türkiye'deki futbol camiası tarafından tanınmıştır.

                            Çocukların ve gençlerin geleceğine yön vermeyi hedefliyor ve gelişimlerini gururla takip ediyoruz.

                            Ülke genelinde hedeflediğimiz liglerin oluşumu için çalışmalarımızı tüm hızıyla sürdürmekteyiz.</p>
                    </div>
                    <div className="preamble text-center col-lg-6 col-lg-offset-1" style={{marginTop:"30px"}}>
                    <h4 style={{color:"red",fontSize:"30px"}}>Misyonumuz</h4>
                        <p style={{marginTop:"30px",fontSize:"15px"}}>Çocuklarımızın ve gençlerimizin müsabaka oynayarak gelişmelerine  katkı, özgüvenlerine artış ile birlikte sporu severek yapmalarına katkı sağlamak.</p>
                    </div>
                    <div className="preamble text-center col-lg-6 col-lg-offset-1" style={{marginTop:"30px"}}>
                    <h4 style={{color:"red",fontSize:"30px"}}>Vizyonumuz</h4>
                        <p style={{marginTop:"30px",fontSize:"15px"}}>Ülkemizde başta 5-12 yaş arası olan çocuklarımız ile 12-18 yaş arası gençlerimizin eksikliği olan lig usulü müsabaka oynamalarını ve bu sayede gelişim sağlamalarını hedeflemekteyiz.

Her ilimizde şubeleşmeyi ve tüm çocuklarımız ile birlikte gençlerimize ulaşmayı hedefliyoruz.</p>
                    </div>


                </div>


            </div>

            <Footer />
        </div>
    )
}

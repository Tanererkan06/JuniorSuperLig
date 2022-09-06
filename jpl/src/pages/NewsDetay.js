import { useEffect } from 'react'
import '../assets/css/style.css';
import '../assets/css/style.css.map';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../redux-new/actions/news'
import { TypographyStylesProvider } from '@mantine/core';

export default function NewsDetay() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news); 

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <div>
    <Header/>
    <Slider/>
    
    <div id="news" className="news">
    <div className="container" style={{marginTop:"20px"}}>

      <div className="heading col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h4 className="border pull-left">Latest News</h4>
        <a href="#" className="rest pull-right"><span>See all news</span><i className="fa fa-arrow-circle-right"></i></a>
      </div>

      {
          news.length > 0
          ? news.map((item, index) => {
              return (
                <TypographyStylesProvider>
                  <div className="single-news col-lg-12 col-md-12 col-sm-12 col-xs-12" key={index}>
                    <article>
                      <img src={require("../assets/img/slider/galeri-101.jpg")} alt="" className="thumbnail" />
                      {/* <img src={item.resim} alt="Haber fotoğrafı" className="thumbnail" /> */}
                      <div className="article-content">
                          <a href="#">
                            <div dangerouslySetInnerHTML={{ __html: item.baslik.replaceAll('&lt;', '<') }} />
                            </a>
                          <div dangerouslySetInnerHTML={{ __html: item.kisaicerik.replaceAll('&lt;', '<') }} />
                      </div>
                    </article>
                  </div>
                </TypographyStylesProvider>
            )
          })
          : <div>Yükleniyor...</div>
      }

      {/* <div className="single-news col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <article>
          <img src={require("../assets/img/slider/galeri-101.jpg")} alt="" className="thumbnail" />
          <div className="article-content">
            <h5><a href="#">Junior Süper Lig U9</a></h5>
            <p>Junior Süper Lig U9'un son haftasını geride bırakırken, 5 hafta süren muhteşem bir ligde renkli görüntüler vardı.</p>
          </div>
        </article>
      </div>

      <div className="single-news col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <article>
          <img src={require("../assets/img/slider/galeri-102.jpg")} alt="" className="thumbnail" />
          <div className="article-content">
            <h5><a href="#">Junior Super Lig olarak beIN Sports Haber</a></h5>
            <p>Junior Super Lig olarak beIN Sports Haber'de yer aldık ve bu projeyi gerçekleştirirken yaşadığımız heyecanımızı paylaştık.</p>
          </div>
        </article>
      </div>

      <div className="single-news col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <article>
          <img src={require("../assets/img/slider/galeri-105.jpg")} alt="" className="thumbnail" />
          <div className="article-content">
            <h5><a href="#">TRT Spor ekibi</a></h5>
            <p>Ülkenin en büyük spor kanallarından olan TRT Spor ekibi sporcular, veliler ve hocalarla röportaj yapmak ve lig hakkında merak edilenlerin cevapları için soluğu Serdivan'da aldı.</p>
          </div>
        </article>
      </div> */}
 
    </div>
  </div>
  <Footer/>
  </div>
  )
}

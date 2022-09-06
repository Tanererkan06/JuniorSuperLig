import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState} from "react";
import { Link } from "react-router-dom";
/* import '../assets/css/owl.carousel.css'; */
import '../assets/css/style.css';
import '../assets/css/style.css.map'; 
import { setCurrentLanguage } from '../redux-new/slices/currentLanguage';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import en from '../i18n/en.json';
import tr from '../i18n/tr.json';

const translationsEn = en;
const translationsTr = tr;

i18n
.use(initReactI18next)
.init({
  resources: {
    en: { translation: translationsEn },
    tr: { translation: translationsTr },
  },
  lng: 'tr',
  fallbackLng: 'tr',
  interpolation: { escapeValue: false },
});

export default function Footer() {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(state => state.currentLanguage.currentLanguage);
  const diller = useSelector(state => state.language);

  const { t } = useTranslation();
  const [language, setLanguage] = useState('tr');
 
  const onChange = (value) => {
    console.log("VALUE: ", value);
    i18n.changeLanguage(value);
    dispatch(setCurrentLanguage(value));
  }
  return (
    <div>
    <footer id="footer">
  <div className="container">

 
    <div className="footer-top clearfix">
      <div className="widget col-lg-3 col-md-3 col-sm-6">
        <h5 className="widget-title">{t('Contact us')}</h5>
        <ul className="contact-info custom-list">
          <li><i className="fa fa-map-marker"></i><span>Yahyalar, Ankara Cd. No:73, 54100 Adapazarı/Sakarya</span></li>
          <li><i className="fa fa-phone"></i><span>0 530 833 42 54</span></li>
          <li><i className="fa fa-envelope"></i><span><a href="mailto:info@juniorsuperlig.com">info@juniorsuperlig.com</a></span></li>
        </ul>
      </div>
      <div className="widget col-lg-3 col-md-3 col-sm-6">
        <h5 className="widget-title">{t('Information')}</h5>
        <ul className="custom-list">
          <li><Link to={"/aboutdetay"} className="nav-link">{t('About')}</Link></li>
       {/*    <li><a href="#">{t('Shop')}</a></li> */}
          <li><Link to={"/teams"} className="nav-link">{t('Our Team')}</Link></li>
          <li><Link to={"/match"} className="nav-link">{t('Match')}</Link></li>
        {/*   <li><a href="#">{t('Information')}Tickets and Membership</a></li> */}
        </ul>
      </div>
      <div className="widget col-lg-3 col-md-3 col-sm-6">
        <h5 className="widget-title">{t('Support')}</h5>
        <ul className="custom-list">
        <li><Link to={"/contact"} className="nav-link">{t('Contact')}</Link></li>
         {/*  <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Website Accessibility Statement</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Account</a></li> */}
        </ul>
      </div>
      <div className="widget col-lg-3 col-md-3 col-sm-6">
        <h5 className="widget-title">{t('Newsletter')}</h5>
        <p>{t('Join the Junior Superlig Mailing list and receive the latest news of Junior Superlig! Just enter your email address here and you are all set.')}</p>
        <form action="#" className="newsletter default-form">
          <input type="text" placeholder="@me@example.com"/>
          <button className="button"><span>{t('Register')}</span><i className="fa fa-arrow-circle-right"></i></button>
        </form>
      </div>
    </div>
 
     <div className="sponsors clearfix">
      <h5 className="text-center">Sponsors</h5>
      <div className="sponsor-logo text-center col-lg-2 col-md-2 col-sm-4">
        <img src={require("../assets/img/partner.png")} alt=""/>
      </div>
      <div className="sponsor-logo text-center col-lg-2 col-md-2 col-sm-4">
        <img src={require("../assets/img/partner2.png")} alt=""/>
      </div>
      <div className="sponsor-logo text-center col-lg-2 col-md-2 col-sm-4">
        <img src={require("../assets/img/partner3.png")} alt=""/>
      </div>
      <div className="sponsor-logo text-center col-lg-2 col-md-2 col-sm-4">
        <img src={require("../assets/img/partner4.png")} alt=""/>
      </div>
      <div className="sponsor-logo text-center col-lg-2 col-md-2 col-sm-4">
        <img src={require("../assets/img/partner5.png")}  alt=""/>
      </div>
      <div className="sponsor-logo text-center col-lg-2 col-md-2 col-sm-4">
        <img src={require("../assets/img/partner6.png")}  alt=""/>
      </div>
    </div>
 
  </div>

   <div className="copyrights clearfix text-center">
    <p className="col-lg-12">{t('©Copyright 2022  Junior Super League . All Rights Reserved')}</p>
  </div>
 
</footer>
    
    </div>
  )
}

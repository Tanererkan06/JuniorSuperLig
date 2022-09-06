import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSehir } from '../redux-new/actions/sehir';
import { Link } from "react-router-dom";
/* import '../assets/css/owl.carousel.css'; */
import '../assets/css/style.css';
import '../assets/css/style.css.map';
import Match from './Match';
import DropdownList from "react-widgets/DropdownList";
import { setCurrentSehir } from '../redux-new/slices/currentSehir';
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

export default function Header() {
  const dispatch = useDispatch();
  const sehirler = useSelector(state => state.sehir);
  const activeSehir = useSelector(state => state.currentSehir.currentSehir);
  const activeLanguage = useSelector(state => state.currentLanguage.currentLanguage);
  const diller = useSelector(state => state.language);

  const { t } = useTranslation();

  // console.log("DILLER: ", diller);

  useEffect(() => {
    dispatch(getAllSehir());
  } , []);

  const [language, setLanguage] = useState('tr');

  const onChange = (value) => {
    console.log("VALUE: ", value);
    i18n.changeLanguage(value);
    dispatch(setCurrentLanguage(value));
  }

  const setSehir = (sehiradi) => {
    dispatch(setCurrentSehir(sehiradi));
  }

  return (
    <Suspense fallback="Loading...">
    <div><header id="header" className="first-version">
      <div className="container">
         <div className="header-logo">
        <a href="index.html"><img src={require("../assets/img/logo-junior.png")} alt="" /></a>
        <div className="triangle-left"></div>
        <div className="triangle-right"></div>
      </div>
      </div>
      <div className="header-toolbar">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="header-language pull-left">
              <a href="#">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fa fa-globe" style={{ fontSize: '20px', marginRight: '10px' }} />
                    <DropdownList
                      style={{ display: 'inline-block', background: 'transparent', border: 'none', color: 'black', fontSize: '12px'}}
                      data={diller}
                      dataKey='id'
                      textField='language'
                      defaultValue={activeLanguage}
                      onSelect={(value) => { onChange(value.language)}}
                  />
                </div>                      
                {/* <span>EN</span> */}
                {/* <i className="fa fa-chevron-down"></i> */}
              </a>
              {/* <ul className="custom-list">
                <li className="active"><a href="#">EN</a></li>
                <li><a href="#">FR</a></li>
                <li><a href="#">PT</a></li>
                <li><a href="#">IT</a></li>
              </ul> */}
            </div><div className="header-language pull-left">
              <a href="#">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <DropdownList
                      style={{ width: '150px', display: 'inline-block', background: 'transparent', border: 'none', color: 'black', fontSize: '12px'}}
                      data={sehirler}
                      dataKey='id'
                      textField='sehiradi'
                      defaultValue={activeSehir}
                      onSelect={(value) => { setSehir(value.sehiradi)}}
                  />
                </div>                      
              </a>
            </div>
            
            <div className="header-user pull-right">
              <ul className="custom-list" style={{ marginTop: '10px'}}>
                <li>
                  <div className="header-user-forms">
                    <div className="header-login">
                   {/* <Link to={"/login"} className="nav-link">Login</Link> */}
                   <Link to={"/login"} className="nav-link">{t('login')}</Link>
                      <div>
                        <form action="#" className="default-form">
                          <p className="form-row">
                            <input type="text" className="form-control" placeholder="Username" />
                          </p>
                          <p className="form-row">
                            <input type="password" className="form-control" placeholder="Password" />
                          </p>
                          <p className="form-row">
                            <input type="submit" className="btn full-width" value="Login" />
                          </p>
                          <a href="#" className="btn btn-link">{t('forgotPassword')}</a>
                        </form>
                      </div>
                    </div>
                    <div className="header-register">
                    <Link to={"/signup"} className="nav-link">{t('signup')}</Link>
                      <div>
                        <form action="#" className="default-form">
                          <p className="form-row">
                            <input type="text" className="form-control" placeholder="Username" />
                          </p>
                          <p className="form-row">
                            <input type="email" className="form-control" placeholder="Email" />
                          </p>
                          <p className="form-row">
                            <input type="password" className="form-control" placeholder="Password" />
                          </p>
                          <input type="submit" className="btn full-width" value="Register" />
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navbar">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <nav className="navigation">
              <ul className="list-inline text-center custom-list">
                <li className="has-submenu">
                  <Link to={"/home"} className="nav-link">{t('home')}</Link>
                </li>
                <li><Link to={"/aboutdetay"} className="nav-link">{t('about')}</Link></li>
                <li><Link to={"/teams"} className="nav-link">{t('teams')}</Link></li>
                <li><Link to={"/match"} className="nav-link">{t('match')}</Link></li>
                <li><Link to={"/newsdetay"} className="nav-link">{t('news')}</Link></li>
                <li><Link to={"/contact"} className="nav-link">{t('contact')}</Link></li>
              </ul>
            </nav>
            <ul className="social list-inline">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
            <button className="navbar-toggle">
              <i className="fa fa-list"></i>
            </button>
          </div>
        </div>
      </div>
    </header></div>
    </Suspense>
  )
}

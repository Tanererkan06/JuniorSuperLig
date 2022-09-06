import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
/* import '../assets/css/owl.carousel.css'; */
import '../assets/css/style.css';
import '../assets/css/style.css.map';
import "../assets/css/puan.durumu.css";
import "../assets/css/about.tab.css"
import PuanDurumu from './PuanDurumu';
import TableFikstur from './Fikstur';
import TableLatesMatch from './LatesMatch';
import { getAllSehir } from '../redux-new/actions/sehir';
import { setCurrentLig } from '../redux-new/slices/currentLig';
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



export default function About() {
  const dispatch = useDispatch();
  const sehirler = useSelector(state => state.sehir);
  const activeSehir = useSelector(state => state.currentSehir);
  const activeLig = useSelector(state => state.currentLig);
  const activeLanguage = useSelector(state => state.currentLanguage.currentLanguage);
  const diller = useSelector(state => state.language);

  const { t } = useTranslation();
  const [language, setLanguage] = useState('tr');

  const onChange = (value) => {
    console.log("VALUE: ", value);
    i18n.changeLanguage(value);
    dispatch(setCurrentLanguage(value));
  }

  useEffect(() => {
    dispatch(getAllSehir());
  }, [])

  const setLig = (ligadi) => {
    dispatch(setCurrentLig(ligadi));
  }

  function checkLig(sehir) {
    return sehir == activeSehir.currentSehir;
  }

  let finalTable = sehirler.filter((item) => checkLig(item.sehiradi));

  return (
    <div>
      <div id="about" className="about">
        <div className="tab-content">
          <div className="container">

            <div className="tab-pane fade active in" id="matches">

              <div class="active-tabs">
                <ul className="nav nav-tabs list-inline experience" role="tablist">
                  {
                    finalTable.length > 0 
                    ? finalTable[0].ligler.map((sehir, index) => {
                      return (
                        <li onClick={() => setLig(sehir.ligadi)}>
                          {/* <input type="radio" name="active_tabs" id={`btn-${index}`} class={`btnn-${index}`} checked={sehir.ligadi === 'U8' ? 'checked' : ''} /> */}
                          <input type="radio" name="active_tabs" id={`btn-${index}`} class={`btnn-${index}`} />
                          <label for={`btn-${index}`} class="btnn">{sehir.ligadi}</label>
                        </li>
                      )}
                  )
                  : <div>{t('Loding')} ...</div>
                }
                
                </ul>
              </div>
              

              <div className="tab-pane fade active in">
                <div className="result col-lg-6 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 clearfix">
                  <h4 className="border">{t('Latest Result')}</h4>
                  <TableLatesMatch />
                </div>

                <div className="upcoming col-lg-6 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 clearfix">
                  <h4 className="border">{t('Upcoming Matches')}</h4>
                  <TableFikstur />

                </div>
                <div className="clearfix"></div>
                <div className="clearfix"></div>
                <div className="clearfix"></div>
                <div className="clearfix"></div>      
                {
                  activeLig.currentLig != 'U9' 
                  ? 
                  <>
                    <div className="puandurumu col-lg-12 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 clearfix" style={{ marginTop: "30px" }}>
                    <h4 className="border">{t('Standings')}</h4>
                    <PuanDurumu /> 
                    </div>
                  </>
                  : <div></div>
                }
              </div>

             

            </div>

            


          </div>
        </div>


      </div>
    </div>
  )
}

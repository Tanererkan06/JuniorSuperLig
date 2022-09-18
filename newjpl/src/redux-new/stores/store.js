import { configureStore } from '@reduxjs/toolkit';

import antrenorHocaReducer from '../slices/antrenorHoca';
import authReducer from '../slices/auth';
import bannerReklamReducer from '../slices/bannerReklam';
import contactReducer from '../slices/contact';
import fiksturReducer from '../slices/fikstur';
import fiksturTakimReducer from '../slices/fiksturTakim';
import gozlemciReducer from '../slices/gozlemci';
import hakemReducer from '../slices/hakem';
import ilTemsilcisiReducer from '../slices/ilTemsilcisi';
import languageReducer from '../slices/language';
import liglerReducer from '../slices/ligler';
import newsReducer from '../slices/news';
import messageReducer from '../slices/message';
import oyunReducer from '../slices/oyun';
import oyuncuKartiReducer from '../slices/oyuncuKarti';
import oyunKonumReducer from '../slices/oyunKonum';
import oyunLiveReducer from '../slices/oyunLive';
import puanDurumuReducer from '../slices/puanDurumu';
import sehirReducer from '../slices/sehir';
import sliderReducer from '../slices/slider';
import sponsorReducer from '../slices/sponsor';
import sponsorKategoriReducer from '../slices/sponsorKategori';
import sponsorSuresiReducer from '../slices/sponsorSuresi';
import sponsorSureTuruReducer from '../slices/sponsorSureTuru';
import sponsorUcretBirimiReducer from '../slices/sponsorUcretBirimi';
import takimReducer from '../slices/takim';
// import userReducer from '../slices/user';
import veliReducer from '../slices/veli';
import currentSehirReducer from '../slices/currentSehir';
import currentLigReducer from '../slices/currentLig';
import currentLanguageReducer from '../slices/currentLanguage';
import currentRoomReducer from '../slices/currentRoom';
import gozcuCurrentRoomReducer from '../slices/gozcuCurrentRoom';

const reducer = {
  antrenorHoca: antrenorHocaReducer,
  auth: authReducer,
  bannerReklam: bannerReklamReducer,
  contact: contactReducer,
  fikstur: fiksturReducer,
  fiksturTakim: fiksturTakimReducer,
  gozlemci: gozlemciReducer,
  hakem: hakemReducer,
  ilTemsilcisi: ilTemsilcisiReducer,
  language: languageReducer,
  ligler: liglerReducer,
  news: newsReducer,
  message: messageReducer,
  oyun: oyunReducer,
  oyuncuKarti: oyuncuKartiReducer,
  oyunKonum: oyunKonumReducer,
  oyunLive: oyunLiveReducer,
  puanDurumu: puanDurumuReducer,
  sehir: sehirReducer,
  slider: sliderReducer,
  sponsor: sponsorReducer,
  sponsorKategori: sponsorKategoriReducer,
  sponsorSuresi: sponsorSuresiReducer,
  sponsorSureTuru: sponsorSureTuruReducer,
  sponsorUcretBirimi: sponsorUcretBirimiReducer,
  takim: takimReducer,
  // user: userReducer,
  veli: veliReducer,
  currentSehir: currentSehirReducer,
  currentLig: currentLigReducer,
  currentLanguage: currentLanguageReducer,
  currentRoom: currentRoomReducer,
  gozcuCurrentRoom: gozcuCurrentRoomReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true, 
})

export default store;
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import AboutPage from '../src/Pages/AboutPage/AboutPage'
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import EventPage from "./Pages/EventPage/EventPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Preloader from "./Components/Preloader/Preloader";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BlogDetailsPage from "./Pages/BlogDetailsPage/BlogDetailsPage";
import EventBus from "./common/EventBus";
import { useDispatch, useSelector } from "react-redux";

// Bizim yaptıklarımız
import Login from "./Dashboard/Login/Login";
import Signup from "./Dashboard/Login/Signup"
import SignupAdmin from "./Dashboard/Login/SignupAdmin"
import SignupAdminListele from "./Dashboard/Login/SignupAdminListele"
import Profile from "./Dashboard/Login/Profile";


//Dashboard Gözlemci Sayfaları
import DashboardOyunLiveGozlemci from "./Dashboard/GozlemciPanel/pages/OyunLive/DashboardOyunLiveGozlemci"
import DashboardAtananOyunLiveGozlemci from "./Dashboard/GozlemciPanel/pages/OyunLive/DashboardAtananOyunLiveGozlemci"
import DashboardGozlemciOyunLiveGozlemci from "./Dashboard/GozlemciPanel/pages/OyunLive/DashboardGozlemciOyunLiveGozlemci"
import DashboardOyuncuKontrolGozlemci from './Dashboard/GozlemciPanel/pages/OyunLive/DashboardOyuncuKontrolGozlemci';

//Dashboard Antrenor Sayfaları
import DashboardOyuncuAntrenor from './Dashboard/AntrenorPanel/pages/OyuncuKarti/DashboardOyuncuAntrenor'
import DashboardOyunLiveAntrenor from './Dashboard/AntrenorPanel/pages/OyunLive/DashboardOyunLiveAntrenor'
import DashboardOyunAntrenor from './Dashboard/AntrenorPanel/pages/Oyun/DashboardOyunAntrenor'
import DashboardOyunKonumAntrenor from './Dashboard/AntrenorPanel/pages/OyunKonum/DashboardOyunKonumAntrenor'
import DashboardTakimAntrenor from './Dashboard/AntrenorPanel/pages/Takim/DashboardTakimAntrenor'
import DashboardVeliAntrenor from './Dashboard/AntrenorPanel/pages/Veli/DashboardVeliAntrenor'
import DashboardLiglerAntrenor from "./Dashboard/AntrenorPanel/pages/Ligler/DashboardLiglerAntrenor";


//Dashboard Sponsor Sayfaları
import DashboardSponsorListe from './Dashboard/SponsorPanel/pages/Sponsor/DashboardSponsorListe';

//Dashboard User Sayfaları
import DashboardOyuncuUser from './Dashboard/UserPanel/pages/OyuncuKarti/DashboardOyuncuUser'
import DashboardAntrenorHocaUser from './Dashboard/UserPanel/pages/AntrenorHoca/DashboardAntrenorHocaUser'
import DashboardLiglerUser from './Dashboard/UserPanel/pages/Ligler/DashboardLiglerUser'
import DashboardOyunUser from './Dashboard/UserPanel/pages/Oyun/DashboardOyunUser'
import DashboardOyunLiveUser from './Dashboard/UserPanel/pages/OyunLive/DashboardOyunLiveUser'
import DashboardTakimUser from './Dashboard/UserPanel/pages/Takim/DashboardTakimUser'
import DashboardOyuncuVeli from './Dashboard/VeliPanel/pages/OyuncuKarti/DashboardOyuncuVeli'

//Dashboard Veli Sayfaları
// import DashboardVeliCreateOyuncu from './Dashboard/VeliPanel/pages/OyuncuKarti/DashboardVeliCreateOyuncu'
import DashboardAntrenorHocaVeli from './Dashboard/VeliPanel/pages/AntrenorHoca/DashboardAntrenorHocaVeli'
import DashboardLiglerVeli from './Dashboard/VeliPanel/pages/Ligler/DashboardLiglerVeli'
import DashboardOyunVeli from './Dashboard/VeliPanel/pages/Oyun/DashboardOyunVeli'
import DashboardOyunLiveVeli from './Dashboard/VeliPanel/pages/OyunLive/DashboardOyunLiveVeli'
import DashboardTakimVeli from './Dashboard/VeliPanel/pages/Takim/DashboardTakimVeli'
import DashboardFollowingsUser from "./Dashboard/UserPanel/pages/Followings/DashboardFollowingsUser";
import DashboardFollowingsVeli from "./Dashboard/VeliPanel/pages/Followings/DashboardFollowingsVeli";

// Dashboard sayfaları

import DashboardAdmin from "./Dashboard/AdminPanel/DashboardAdmin";
import DashboardVeli from "./Dashboard/VeliPanel/DashboardVeli";
import DashboardAntrenor from "./Dashboard/AntrenorPanel/DashboardAntrenor";
import DashboardIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/DashboardIlTemsilcisi"
import DashboardSponsor from "./Dashboard/SponsorPanel/DashboardSponsor"
import DashboardUser from "./Dashboard/UserPanel/DashboardUser"
import DashboardGozlemci from "./Dashboard/GozlemciPanel/DashboardGozlemci"



//Dashboard Admin Sayfaları
import DashboardGetAllBannerReklamAdmin from "./Dashboard/AdminPanel/pages/BannerReklam/DashboardGetAllBannerReklamAdmin"
import DashboardGetAllAntrenorHocaAdmin from "./Dashboard/AdminPanel/pages/AntrenorHoca/DashboardGetAllAntrenorHocaAdmin"
import DashboardGetAllContactAdmin from "./Dashboard/AdminPanel/pages/Contact/DashboardGetAllContactAdmin"
import DashboardFiksturOlusturAdmin from "./Dashboard/AdminPanel/pages/Fikstur/DashboardFiksturOlusturAdmin"
import DashboardGetAllGozlemciAdmin from "./Dashboard/AdminPanel/pages/Gozlemci/DashboardGetAllGozlemciAdmin"
import DashboardGetAllHakemAdmin from "./Dashboard/AdminPanel/pages/Hakem/DashboardGetAllHakemAdmin"
import DashboardGetAllIlTemsilcisiAdmin from "./Dashboard/AdminPanel/pages/IlTemsilcisi/DashboardGetAllIlTemsilcisiAdmin"
import DashboardGetAllLiglerAdmin from "./Dashboard/AdminPanel/pages/Ligler/DashboardGetAllLiglerAdmin"
import DashboardGetAllOyunAdmin from "./Dashboard/AdminPanel/pages/Oyun/DashboardGetAllOyunAdmin"
import DashboardGetAllOyunKonumAdmin from "./Dashboard/AdminPanel/pages/OyunKonum/DashboardGetAllOyunKonumAdmin"
import DashboardOyunLiveAdmin from "./Dashboard/AdminPanel/pages/OyunLive/DashboardOyunLiveAdmin"
import DashboardAtananOyunLiveAdmin from "./Dashboard/AdminPanel/pages/OyunLive/DashboardAtananOyunLiveAdmin"
import DashboardGozlemciOyunLiveAdmin from "./Dashboard/AdminPanel/pages/OyunLive/DashboardGozlemciOyunLiveAdmin"
import DashboardGetAllOyuncuAdmin from "./Dashboard/AdminPanel/pages/OyuncuKarti/DashboardGetAllOyuncuAdmin"
import DashboardGetAllPuanDurumuAdmin from "./Dashboard/AdminPanel/pages/PuanDurumu/DashboardGetAllPuanDurumuAdmin"
import DashboardGetAllSehirAdmin from "./Dashboard/AdminPanel/pages/Sehir/DashboardGetAllSehirAdmin"
import DashboardGetAllSliderAdmin from "./Dashboard/AdminPanel/pages/Slider/DashboardGetAllSliderAdmin"
import DashboardGetAllSponsorAdmin from "./Dashboard/AdminPanel/pages/Sponsor/DashboardGetAllSponsorAdmin"
import DashboardGetAllSponsorKategorigAdmin from "./Dashboard/AdminPanel/pages/SponsorKategori/DashboardGetAllSponsorKategoriAdmin"
import DashboardGetAllSponsorSuresiAdmin from "./Dashboard/AdminPanel/pages/SponsorSuresi/DashboardGetAllSponsorSuresiAdmin"
import DashboardGetAllSponsorSureTuruAdmin from "./Dashboard/AdminPanel/pages/SponsorSureTuru/DashboardGetAllSponsorSureTuruAdmin"
import DashboardGetAllSponsorUcretBirimiAdmin from "./Dashboard/AdminPanel/pages/SponsorUcretBirimi/DashboardGetAllSponsorUcretBirimiAdmin"
import DashboardGetAllTakimAdmin from "./Dashboard/AdminPanel/pages/Takim/DashboardGetAllTakimAdmin"
import DashboardGetAllVeliAdmin from "./Dashboard/AdminPanel/pages/Veli/DashboardGetAllVeliAdmin"
// import DashboardGetAllUserAdmin from "./Dashboard/AdminPanel/pages/User/DashboardGetAllUserAdmin"
import DashboardGetAllNewsAdmin from './Dashboard/AdminPanel/pages/News/DashboardGetAllNewsAdmin'
import DashboardFiksturTakimTanimlamaEkrani from "./Dashboard/AdminPanel/pages/Fikstur/DashboardFiksturTakimTanimlamaEkrani";
import DashboardFiksturTanimlamaEkrani from "./Dashboard/AdminPanel/pages/Fikstur/DashboardFiksturTanimlamaEkrani";


//Dashboard İltemsilcisi Sayfaları
import DashboardGetAllBannerReklamIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/BannerReklam/DashboardGetAllBannerReklamIltemsilcisi"
import DashboardGetAllAntrenorHocaIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/AntrenorHoca/DashboardGetAllAntrenorHocaIltemsilcisi"
import DashboardGetAllContactIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Contact/DashboardGetAllContactIltemsilcisi"
import DashboardFiksturOlusturIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Fikstur/DashboardFiksturOlusturIltemsilcisi"
import DashboardGetAllGozlemciIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Gozlemci/DashboardGetAllGozlemciIltemsilcisi"
import DashboardGetAllHakemIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Hakem/DashboardGetAllHakemIltemsilcisi"
import DashboardGetAllIlTemsilcisiIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/IlTemsilcisi/DashboardGetAllIlTemsilcisiIltemsilcisi"
import DashboardGetAllLiglerIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Ligler/DashboardGetAllLiglerIltemsilcisi"
import DashboardGetAllOyunIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Oyun/DashboardGetAllOyunIltemsilcisi"
import DashboardGetAllOyunKonumIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/OyunKonum/DashboardGetAllOyunKonumIltemsilcisi"
import DashboardOyunLiveIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/OyunLive/DashboardOyunLiveIltemsilcisi"
import DashboardAtananOyunLiveIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/OyunLive/DashboardAtananOyunLiveIltemsilcisi"
import DashboardGozlemciOyunLiveIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/OyunLive/DashboardGozlemciOyunLiveIltemsilcisi"
import DashboardGetAllOyuncuIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/OyuncuKarti/DashboardGetAllOyuncuIltemsilcisi"
import DashboardGetAllPuanDurumuIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/PuanDurumu/DashboardGetAllPuanDurumuIltemsilcisi"
import DashboardGetAllSehirIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Sehir/DashboardGetAllSehirIltemsilcisi"
import DashboardGetAllSliderIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Slider/DashboardGetAllSliderIltemsilcisi"
import DashboardGetAllSponsorIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Sponsor/DashboardGetAllSponsorIltemsilcisi"
import DashboardGetAllSponsorKategorigIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/SponsorKategori/DashboardGetAllSponsorKategoriIltemsilcisi"
import DashboardGetAllSponsorSuresiIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/SponsorSuresi/DashboardGetAllSponsorSuresiIltemsilcisi"
import DashboardGetAllSponsorSureTuruIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/SponsorSureTuru/DashboardGetAllSponsorSureTuruIltemsilcisi"
import DashboardGetAllSponsorUcretBirimiIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/SponsorUcretBirimi/DashboardGetAllSponsorUcretBirimiIltemsilcisi"
import DashboardGetAllTakimIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Takim/DashboardGetAllTakimIltemsilcisi"
import DashboardGetAllVeliIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/Veli/DashboardGetAllVeliIltemsilcisi"
import DashboardGetAllUserIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/pages/User/DashboardGetAllUserIltemsilcisi"



function App() {
  const [loader, setLoader] = useState(true);
  const [loaderAnimation, setLoaderAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
      setLoaderAnimation(true);
    }, 1500);
  }, []);

  const [showAdminBoard, setShowAdminBoard] = React.useState(false);
  const [showAntrenorBoard, setShowAntrenorBoard] = React.useState(false);
  const [showUserBoard, setShowUserBoard] = React.useState(false);
  const [showVeliBoard, setShowVeliBoard] = React.useState(false);
  const [showGozcuBoard, setShowGozcuBoard] = React.useState(false);
  const [showIlYoneticisiBoard, setShowIlYoneticisiBoard] = React.useState(false);
  const [showSponsorBoard, setShowSponsorBoard] = React.useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  React.useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(currentUser.roles.includes("ROLE_USER"));
      setShowAntrenorBoard(currentUser.roles.includes("ROLE_ANTRENOR"));
      setShowVeliBoard(currentUser.roles.includes("ROLE_VELI"));
      setShowGozcuBoard(currentUser.roles.includes("ROLE_GOZCU"));
      setShowIlYoneticisiBoard(currentUser.roles.includes("ROLE_ILYONETICISI"));
      setShowSponsorBoard(currentUser.roles.includes("ROLE_SPONSOR"));
    } else {
      setShowAdminBoard(false);
      setShowVeliBoard(false);
      setShowGozcuBoard(false);
      setShowIlYoneticisiBoard(false);
      setShowSponsorBoard(false);
      setShowAntrenorBoard(false);
      setShowUserBoard(false);
    }

    EventBus.on("logout", () => {
      logout();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logout]);


  return (
    <div>
      <AuthProvider>
        {/* <BrowserRouter >
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>            
          </Switch>
        </BrowserRouter> */}
        {
          showAdminBoard && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/dashboardadmin"> <DashboardAdmin/></Route>
                <Route exact path="/dashboardgetallantrenorhocaadmin"> <DashboardGetAllAntrenorHocaAdmin/></Route>
                <Route exact path="/dashboardgetallbannerreklamadmin"> <DashboardGetAllBannerReklamAdmin/></Route>
                <Route exact path="/dashboardgetallcontactadmin"> <DashboardGetAllContactAdmin/></Route>
                <Route exact path="/dashboardfiksturolusturadmin"> <DashboardFiksturOlusturAdmin/></Route>
                <Route exact path="/dashboardgetallgozlemciadmin"> <DashboardGetAllGozlemciAdmin/></Route>
                <Route exact path="/dashboardgetallhakemadmin"> <DashboardGetAllHakemAdmin/></Route>
                <Route exact path="/dashboardgetalliltemsilcisiadmin"> <DashboardGetAllIlTemsilcisiAdmin/></Route>
                <Route exact path="/dashboardgetallligleradmin"> <DashboardGetAllLiglerAdmin/></Route>
                <Route exact path="/dashboardgetalloyunadmin"> <DashboardGetAllOyunAdmin/></Route>
                <Route exact path="/dashboardgetalloyunkonumadmin"> <DashboardGetAllOyunKonumAdmin/></Route>
                <Route  path="/dashboardoyunliveadmin"> <DashboardOyunLiveAdmin/></Route>
                <Route exact path="/dashboardatananoyunliveadmin"> <DashboardAtananOyunLiveAdmin /></Route>
                <Route exact path="/dashboardgozlemcioyunliveadmin"> <DashboardGozlemciOyunLiveAdmin /></Route>
                <Route exact path="/dashboardgetalloyuncuadmin"> <DashboardGetAllOyuncuAdmin /></Route>
                <Route exact path="/dashboardgetallpuandurumuadmin"> <DashboardGetAllPuanDurumuAdmin /></Route>
                <Route exact path="/dashboardgetallsehiradmin"> <DashboardGetAllSehirAdmin /></Route>
                <Route exact path="/dashboardgetallslideradmin"> <DashboardGetAllSliderAdmin /></Route>
                <Route exact path="/dashboardgetallsponsoradmin"> <DashboardGetAllSponsorAdmin /></Route>
                <Route exact path="/dashboardgetallsponsorkategorigadmin"> <DashboardGetAllSponsorKategorigAdmin /></Route>
                <Route exact path="/dashboardgetallsponsorsuresiadmin"> <DashboardGetAllSponsorSuresiAdmin /></Route>
                <Route exact path="/dashboardgetallsponsorsureturuadmin"> <DashboardGetAllSponsorSureTuruAdmin /></Route>
                <Route exact path="/dashboardgetallsponsorucretbirimiadmin"> <DashboardGetAllSponsorUcretBirimiAdmin /></Route>
                <Route exact path="/dashboardgetalltakimadmin"> <DashboardGetAllTakimAdmin /></Route>
                <Route exact path="/dashboardgetallveliadmin"> <DashboardGetAllVeliAdmin /></Route>
                <Route exact path="/dashboardfiksturtakimtanimlamaekrani"> <DashboardFiksturTakimTanimlamaEkrani /></Route>
                <Route exact path="/dashboardfiksturtanimlamaekrani"> <DashboardFiksturTanimlamaEkrani /></Route>
                <Route exact path="/signupadmin"> <SignupAdmin /></Route>
                <Route exact path="/signupadminlistele"> <SignupAdminListele /></Route>
                <Route exact path="/dashboardgetallnewsadmin"> <DashboardGetAllNewsAdmin /></Route>
              </Switch>
            </BrowserRouter>
          )
        }
        {
          showVeliBoard && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/dashboardveli"> <DashboardVeli /></Route>
                <Route exact path="/DashboardOyuncuVeli"> <DashboardOyuncuVeli /></Route>
                <Route exact path="/DashboardOyunLiveVeli"> <DashboardOyunLiveVeli /></Route>
                <Route exact path="/DashboardOyunVeli"> <DashboardOyunVeli /></Route>
                <Route exact path="/DashboardLiglerVeli"> <DashboardLiglerVeli /></Route>
                <Route exact path="/DashboardTakimVeli"> <DashboardTakimVeli /></Route>
                <Route exact path="/DashboardAntrenorHocaVeli"> <DashboardAntrenorHocaVeli /></Route>
                <Route exact path="/dashboardfollowingsveli"> <DashboardFollowingsVeli /></Route>
              </Switch>
            </BrowserRouter>
          )
        }
        {
          showUserBoard && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/dashboarduser"> <DashboardUser /></Route>
                <Route exact path="/dashboardoyunliveuser"> <DashboardOyunLiveUser /></Route>
                <Route exact path="/dashboardoyunuser"> <DashboardOyunUser /></Route>
                <Route exact path="/dashboardtakimuser"> <DashboardTakimUser /></Route>
                <Route exact path="/dashboardoyuncuuser"> <DashboardOyuncuUser /></Route>
                <Route exact path="/dashboardantrenorhocauser"> <DashboardAntrenorHocaUser /></Route>
                <Route exact path="/dashboardligleruser"> <DashboardLiglerUser /></Route>
                <Route exact path="/dashboardfollowingsuser"> <DashboardFollowingsUser /></Route>
              </Switch>
            </BrowserRouter>
          )
        }
        {
          showAntrenorBoard && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/dashboardoyuncuantrenor"> <DashboardOyuncuAntrenor /></Route>
                <Route exact path="/dashboardoyunliveantrenor"> <DashboardOyunLiveAntrenor /></Route>
                <Route exact path="/dashboardoyunantrenor"> <DashboardOyunAntrenor /></Route>
                <Route exact path="/dashboardtakimantrenor"> <DashboardTakimAntrenor /></Route>
                <Route exact path="/dashboardveliantrenor"> <DashboardVeliAntrenor /></Route>
                <Route exact path="/dashboardoyunkonumantrenor"> <DashboardOyunKonumAntrenor /></Route>
                <Route exact path="/dashboardliglerantrenor"> <DashboardLiglerAntrenor /></Route>
                <Route exact path="/dashboardantrenor"> <DashboardAntrenor /></Route>
              </Switch>
            </BrowserRouter>
          )
        }
        {
          showGozcuBoard && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/dashboardgozlemci"> <DashboardGozlemci /></Route>
                <Route exact path="/dashboardoyunlivegozlemci"> <DashboardOyunLiveGozlemci /></Route>
                <Route exact path="/dashboardatananoyunlivegozlemci"> <DashboardAtananOyunLiveGozlemci /></Route>
                <Route exact path="/dashboardgozlemcioyunlivegozlemci/:id"> <DashboardGozlemciOyunLiveGozlemci /></Route>
                <Route exact path="/dashboardoyuncukontrolgozlemci/:id"> <DashboardOyuncuKontrolGozlemci /></Route>
              </Switch>
            </BrowserRouter>
          )
        }
        {
          showSponsorBoard && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/dashboardsponsor"> <DashboardSponsor /></Route>
                <Route exact path="/dashboardsponsorliste"> <DashboardSponsorListe /></Route>
              </Switch>
            </BrowserRouter>
          )
        }
        {
          showIlYoneticisiBoard && (
            <BrowserRouter>
              <Switch>
                <Route exact path="/dashboardiltemsilcisi"> <DashboardIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallantrenorhocailtemsilcisi"> <DashboardGetAllAntrenorHocaIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallbannerreklamiltemsilcisi"> <DashboardGetAllBannerReklamIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallcontactiltemsilcisi"> <DashboardGetAllContactIltemsilcisi /></Route>
                <Route exact path="/dashboardfiksturolusturiltemsilcisi"> <DashboardFiksturOlusturIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallgozlemciiltemsilcisi"> <DashboardGetAllGozlemciIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallhakemiltemsilcisi"> <DashboardGetAllHakemIltemsilcisi /></Route>
                <Route exact path="/dashboardgetalliltemsilcisiiltemsilcisi"> <DashboardGetAllIlTemsilcisiIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallligleriltemsilcisi"> <DashboardGetAllLiglerIltemsilcisi /></Route>
                <Route exact path="/dashboardgetalloyuniltemsilcisi"> <DashboardGetAllOyunIltemsilcisi /></Route>
                <Route exact path="/dashboardgetalloyunkonumiltemsilcisi"> <DashboardGetAllOyunKonumIltemsilcisi /></Route>
                <Route exact path="/dashboardoyunliveiltemsilcisi"> <DashboardOyunLiveIltemsilcisi /></Route>
                <Route exact path="/dashboardatananoyunliveiltemsilcisi"> <DashboardAtananOyunLiveIltemsilcisi /></Route>
                <Route exact path="/dashboardgozlemcioyunliveiltemsilcisi"> <DashboardGozlemciOyunLiveIltemsilcisi /></Route>
                <Route exact path="/dashboardgetalloyuncuiltemsilcisi"> <DashboardGetAllOyuncuIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallpuandurumuiltemsilcisi"> <DashboardGetAllPuanDurumuIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallsehiriltemsilcisi"> <DashboardGetAllSehirIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallslideriltemsilcisi"> <DashboardGetAllSliderIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallsponsoriltemsilcisi"> <DashboardGetAllSponsorIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallsponsorkategorigiltemsilcisi"> <DashboardGetAllSponsorKategorigIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallsponsorsuresiiltemsilcisi"> <DashboardGetAllSponsorSuresiIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallsponsorsureturuiltemsilcisi"> <DashboardGetAllSponsorSureTuruIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallsponsorucretbirimiiltemsilcisi"> <DashboardGetAllSponsorUcretBirimiIltemsilcisi /></Route>
                <Route exact path="/dashboardgetalltakimiltemsilcisi"> <DashboardGetAllTakimIltemsilcisi /></Route>
                <Route exact path="/dashboardgetallveliiltemsilcisi"> <DashboardGetAllVeliIltemsilcisi /></Route>
                <Route exact path="/dashboardgetalluseriltemsilcisi"> <DashboardGetAllUserIltemsilcisi /></Route>
              </Switch>
            </BrowserRouter>
          )
        }
  {
    currentUser ? (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/blogDetails/:id">
            <BlogDetailsPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
         {/*  <Route path="*">
            <ErrorPage />
          </Route> */}
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    ) : (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/blogDetails/:id">
            <BlogDetailsPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
         {/*  <Route path="*">
            <ErrorPage />
          </Route> */}
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
  </AuthProvider>
  </div>
  );
}

export default App;

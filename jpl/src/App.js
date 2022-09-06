import * as React from "react";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import News from "./pages/News";
import Teams from "./pages/Teams";
import OurTeams from "./pages/OurTeams";
import AboutDetay from "./pages/AboutDetay";
import Match from "./pages/Match";
import MatchTeams from "./pages/MatchTeams";
import Fikstur from "./pages/Fikstur";
import LatesMatch from "./pages/LatesMatch"
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Link, Routes, Route, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import EventBus from "./common/EventBus";

// YENI EKLENEN AUTH SAYFASI IMPORTLARI
import Home2 from './Auth/pages/Home'
import SignUp from './Auth/pages/SignUp'
import SignIn from './Auth/pages/SignIn'
import UserDashboard from './Auth/pages/user/UserDashboard'
import PrivateRoute from './Auth/component/PrivateRoute';
import AdminCreateProduct from './Auth/pages/admin/AdminCreateProduct';
import AdminAddBanner from './Auth/pages/admin/AdminAddBanner';
import AdminDashboard from './Auth/pages/admin/AdminDashboard';

//nurun hazırladığı login ve signup sayfaları
import Login from "./Dashboard/Login/Login"
import Signup from "./Dashboard/Login/Signup"
import SignupAdmin from "./Dashboard/Login/SignupAdmin"
import SignupAdminListele from "./Dashboard/Login/SignupAdminListele"
import Profile from "./Dashboard/Login/Profile";

//Dashboard Gözlemci Sayfaları
import DashboardOyunLiveGozlemci from "./Dashboard/GozlemciPanel/pages/OyunLive/DashboardOyunLiveGozlemci"
import DashboardAtananOyunLiveGozlemci from "./Dashboard/GozlemciPanel/pages/OyunLive/DashboardAtananOyunLiveGozlemci"
import DashboardGozlemciOyunLiveGozlemci from "./Dashboard/GozlemciPanel/pages/OyunLive/DashboardGozlemciOyunLiveGozlemci"

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

//Dashboard User Sayfaları
import DashboardOyuncuVeli from './Dashboard/VeliPanel/pages/OyuncuKarti/DashboardOyuncuVeli'
// import DashboardVeliCreateOyuncu from './Dashboard/VeliPanel/pages/OyuncuKarti/DashboardVeliCreateOyuncu'
import DashboardAntrenorHocaVeli from './Dashboard/VeliPanel/pages/AntrenorHoca/DashboardAntrenorHocaVeli'
import DashboardLiglerVeli from './Dashboard/VeliPanel/pages/Ligler/DashboardLiglerVeli'
import DashboardOyunVeli from './Dashboard/VeliPanel/pages/Oyun/DashboardOyunVeli'
import DashboardOyunLiveVeli from './Dashboard/VeliPanel/pages/OyunLive/DashboardOyunLiveVeli'
import DashboardTakimVeli from './Dashboard/VeliPanel/pages/Takim/DashboardTakimVeli'

// Dashboard sayfaları

import DashboardAdmin from "./Dashboard/AdminPanel/DashboardAdmin";
import DashboardVeli from "./Dashboard/VeliPanel/DashboardVeli";
import DashboardAntrenor from "./Dashboard/AntrenorPanel/DashboardAntrenor";
import DashboardIltemsilcisi from "./Dashboard/IlTemsilcisiPanel/DashboardIlTemsilcisi"
import DashboardSponsor from "./Dashboard/SponsorPanel/DashboardSponsor"
import DashboardUser from "./Dashboard/UserPanel/DashboardUser"
import DashboardGozlemci from "./Dashboard/GozlemciPanel/DashboardGozlemci"

import NewsDetay from "./pages/NewsDetay";
import Banner1 from "./pages/Banner1";
import Banner2 from "./pages/Banner2";
import Contact from "./pages/Contact";

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
import DashboardGetAllUserAdmin from "./Dashboard/AdminPanel/pages/User/DashboardGetAllUserAdmin"
import DashboardGetAllNewsAdmin from './Dashboard/AdminPanel/pages/News/DashboardGetAllNewsAdmin'

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
  const [showModeratorBoard, setShowModeratorBoard] = React.useState(false);
  const [showAdminBoard, setShowAdminBoard] = React.useState(false);
  const [showAntrenorBoard, setShowAntrenorBoard] = React.useState(false);
  const [showUserBoard, setShowUserBoard] = React.useState(false);
  const [showVeliBoard, setShowVeliBoard] = React.useState(false);
  const [showGozcuBoard, setShowGozcuBoard] = React.useState(false);
  const [showHakemBoard, setShowHakemBoard] = React.useState(false);
  const [showIlYoneticisiBoard, setShowIlYoneticisiBoard] = React.useState(false);
  const [showSponsorBoard, setShowSponsorBoard] = React.useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  React.useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(currentUser.roles.includes("ROLE_USER"));
      setShowAntrenorBoard(currentUser.roles.includes("ROLE_ANTRENOR"));
      setShowVeliBoard(currentUser.roles.includes("ROLE_VELI"));
      setShowGozcuBoard(currentUser.roles.includes("ROLE_GOZCU"));
      setShowHakemBoard(currentUser.roles.includes("ROLE_HAKEM"));
      setShowIlYoneticisiBoard(currentUser.roles.includes("ROLE_ILYONETICISI"));
      setShowSponsorBoard(currentUser.roles.includes("ROLE_SPONSOR"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setShowVeliBoard(false);
      setShowGozcuBoard(false);
      setShowHakemBoard(false);
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
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
          {showAdminBoard && (
            <Routes>
              <Route exact path="/dashboardadmin" element={<DashboardAdmin />} />
              <Route exact path="/dashboardgetallantrenorhocaadmin" element={<DashboardGetAllAntrenorHocaAdmin />} />
              <Route exact path="/dashboardgetallbannerreklamadmin" element={<DashboardGetAllBannerReklamAdmin />} />
              <Route exact path="/dashboardgetallcontactadmin" element={<DashboardGetAllContactAdmin />} />
              <Route exact path="/dashboardfiksturolusturadmin" element={<DashboardFiksturOlusturAdmin />} />
              <Route exact path="/dashboardgetallgozlemciadmin" element={<DashboardGetAllGozlemciAdmin />} />
              <Route exact path="/dashboardgetallhakemadmin" element={<DashboardGetAllHakemAdmin />} />
              <Route exact path="/dashboardgetalliltemsilcisiadmin" element={<DashboardGetAllIlTemsilcisiAdmin />} />
              <Route exact path="/dashboardgetallligleradmin" element={<DashboardGetAllLiglerAdmin />} />
              <Route exact path="/dashboardgetalloyunadmin" element={<DashboardGetAllOyunAdmin />} />
              <Route exact path="/dashboardgetalloyunkonumadmin" element={<DashboardGetAllOyunKonumAdmin />} />
              <Route exact path="/dashboardoyunliveadmin" element={<DashboardOyunLiveAdmin />} />
              <Route exact path="/dashboardatananoyunliveadmin" element={<DashboardAtananOyunLiveAdmin />} />
              <Route exact path="/dashboardgozlemcioyunliveadmin" element={<DashboardGozlemciOyunLiveAdmin />} />
              <Route exact path="/dashboardgetalloyuncuadmin" element={<DashboardGetAllOyuncuAdmin />} />
              <Route exact path="/dashboardgetallpuandurumuadmin" element={<DashboardGetAllPuanDurumuAdmin />} />
              <Route exact path="/dashboardgetallsehiradmin" element={<DashboardGetAllSehirAdmin />} />
              <Route exact path="/dashboardgetallslideradmin" element={<DashboardGetAllSliderAdmin />} />
              <Route exact path="/dashboardgetallsponsoradmin" element={<DashboardGetAllSponsorAdmin />} />
              <Route exact path="/dashboardgetallsponsorkategorigadmin" element={<DashboardGetAllSponsorKategorigAdmin />} />
              <Route exact path="/dashboardgetallsponsorsuresiadmin" element={<DashboardGetAllSponsorSuresiAdmin />} />
              <Route exact path="/dashboardgetallsponsorsureturuadmin" element={<DashboardGetAllSponsorSureTuruAdmin />} />
              <Route exact path="/dashboardgetallsponsorucretbirimiadmin" element={<DashboardGetAllSponsorUcretBirimiAdmin />} />
              <Route exact path="/dashboardgetalltakimadmin" element={<DashboardGetAllTakimAdmin />} />
              <Route exact path="/dashboardgetallveliadmin" element={<DashboardGetAllVeliAdmin />} />
              <Route exact path="/dashboardgetalluseradmin" element={<DashboardGetAllUserAdmin />} />
              <Route exact path="/signupadmin" element={<SignupAdmin />} />
              <Route exact path="/signupadminlistele" element={<SignupAdminListele />} />
              <Route exact path="/dashboardgetallnewsadmin" element={<DashboardGetAllNewsAdmin />} />
              {/* <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
          )}
          {showVeliBoard && (
            <Routes>
              <Route exact path="/dashboardveli" element={<DashboardVeli />} />
              <Route exact path="/DashboardOyuncuVeli" element={<DashboardOyuncuVeli />} />
              <Route exact path="/DashboardOyunLiveVeli" element={<DashboardOyunLiveVeli />} />
              <Route exact path="/DashboardOyunVeli" element={<DashboardOyunVeli />} />
              <Route exact path="/DashboardLiglerVeli" element={<DashboardLiglerVeli />} />
              <Route exact path="/DashboardTakimVeli" element={<DashboardTakimVeli />} />
              <Route exact path="/DashboardAntrenorHocaVeli" element={<DashboardAntrenorHocaVeli />} />
        {/*       <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
          )}
          {showUserBoard && (
            <Routes>
              <Route exact path="/dashboarduser" element={<DashboardUser />} />
              <Route exact path="/dashboardoyunliveuser" element={<DashboardOyunLiveUser />} />
              <Route exact path="/dashboardoyunuser" element={<DashboardOyunUser />} />
              <Route exact path="/dashboardtakimuser" element={<DashboardTakimUser />} />
              <Route exact path="/dashboardoyuncuuser" element={<DashboardOyuncuUser />} />
              <Route exact path="/dashboardantrenorhocauser" element={<DashboardAntrenorHocaUser />} />
              <Route exact path="/dashboardligleruser" element={<DashboardLiglerUser />} />
          {/*     <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
          )}
          {showAntrenorBoard && (
            <Routes>
              <Route exact path="/dashboardoyuncuantrenor" element={<DashboardOyuncuAntrenor />} />
              <Route exact path="/dashboardoyunliveantrenor" element={<DashboardOyunLiveAntrenor />} />
              <Route exact path="/dashboardoyunantrenor" element={<DashboardOyunAntrenor />} />
              <Route exact path="/dashboardtakimantrenor" element={<DashboardTakimAntrenor />} />
              <Route exact path="/dashboardveliantrenor" element={<DashboardVeliAntrenor />} />
              <Route exact path="/dashboardoyunkonumantrenor" element={<DashboardOyunKonumAntrenor />} />
              <Route exact path="/dashboardliglerantrenor" element={<DashboardLiglerAntrenor />} />
              <Route exact path="/dashboardantrenor" element={<DashboardAntrenor />} />
             {/*  <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
          )}
          {showGozcuBoard && (
            <Routes>
              <Route exact path="/dashboardgozlemci" element={<DashboardGozlemci />} />
              <Route exact path="/dashboardoyunlivegozlemci" element={<DashboardOyunLiveGozlemci />} />
              <Route exact path="/dashboardatananoyunlivegozlemci" element={<DashboardAtananOyunLiveGozlemci />} />
              <Route exact path="/dashboardgozlemcioyunlivegozlemci" element={<DashboardGozlemciOyunLiveGozlemci />} />
             {/*  <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
          )}
          {showSponsorBoard && (
            <Routes>
              <Route exact path="/dashboardsponsor" element={<DashboardSponsor />} />
              <Route exact path="/dashboardsponsorliste" element={<DashboardSponsorListe />} />
            {/*   <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
          )}
          {showIlYoneticisiBoard && (
            <Routes>
              <Route exact path="/dashboardiltemsilcisi" element={<DashboardIltemsilcisi />} />
              <Route exact path="/dashboardgetallantrenorhocailtemsilcisi" element={<DashboardGetAllAntrenorHocaIltemsilcisi />} />
              <Route exact path="/dashboardgetallbannerreklamiltemsilcisi" element={<DashboardGetAllBannerReklamIltemsilcisi />} />
              <Route exact path="/dashboardgetallcontactiltemsilcisi" element={<DashboardGetAllContactIltemsilcisi />} />
              <Route exact path="/dashboardfiksturolusturiltemsilcisi" element={<DashboardFiksturOlusturIltemsilcisi />} />
              <Route exact path="/dashboardgetallgozlemciiltemsilcisi" element={<DashboardGetAllGozlemciIltemsilcisi />} />
              <Route exact path="/dashboardgetallhakemiltemsilcisi" element={<DashboardGetAllHakemIltemsilcisi />} />
              <Route exact path="/dashboardgetalliltemsilcisiiltemsilcisi" element={<DashboardGetAllIlTemsilcisiIltemsilcisi />} />
              <Route exact path="/dashboardgetallligleriltemsilcisi" element={<DashboardGetAllLiglerIltemsilcisi />} />
              <Route exact path="/dashboardgetalloyuniltemsilcisi" element={<DashboardGetAllOyunIltemsilcisi />} />
              <Route exact path="/dashboardgetalloyunkonumiltemsilcisi" element={<DashboardGetAllOyunKonumIltemsilcisi />} />
              <Route exact path="/dashboardoyunliveiltemsilcisi" element={<DashboardOyunLiveIltemsilcisi />} />
              <Route exact path="/dashboardatananoyunliveiltemsilcisi" element={<DashboardAtananOyunLiveIltemsilcisi />} />
              <Route exact path="/dashboardgozlemcioyunliveiltemsilcisi" element={<DashboardGozlemciOyunLiveIltemsilcisi />} />
              <Route exact path="/dashboardgetalloyuncuiltemsilcisi" element={<DashboardGetAllOyuncuIltemsilcisi />} />
              <Route exact path="/dashboardgetallpuandurumuiltemsilcisi" element={<DashboardGetAllPuanDurumuIltemsilcisi />} />
              <Route exact path="/dashboardgetallsehiriltemsilcisi" element={<DashboardGetAllSehirIltemsilcisi />} />
              <Route exact path="/dashboardgetallslideriltemsilcisi" element={<DashboardGetAllSliderIltemsilcisi />} />
              <Route exact path="/dashboardgetallsponsoriltemsilcisi" element={<DashboardGetAllSponsorIltemsilcisi />} />
              <Route exact path="/dashboardgetallsponsorkategorigiltemsilcisi" element={<DashboardGetAllSponsorKategorigIltemsilcisi />} />
              <Route exact path="/dashboardgetallsponsorsuresiiltemsilcisi" element={<DashboardGetAllSponsorSuresiIltemsilcisi />} />
              <Route exact path="/dashboardgetallsponsorsureturuiltemsilcisi" element={<DashboardGetAllSponsorSureTuruIltemsilcisi />} />
              <Route exact path="/dashboardgetallsponsorucretbirimiiltemsilcisi" element={<DashboardGetAllSponsorUcretBirimiIltemsilcisi />} />
              <Route exact path="/dashboardgetalltakimiltemsilcisi" element={<DashboardGetAllTakimIltemsilcisi />} />
              <Route exact path="/dashboardgetallveliiltemsilcisi" element={<DashboardGetAllVeliIltemsilcisi />} />
              <Route exact path="/dashboardgetalluseriltemsilcisi" element={<DashboardGetAllUserIltemsilcisi />} />
      {/*         <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
          )}
         {/*  {currentUser && (
        
          )} */}
        </div>

        {currentUser ? (
          <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/match" element={<Match />} />
              <Route exact path="/matchteams" element={<MatchTeams />} />
              <Route exact path="/header" element={<Header />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/aboutdetay" element={<AboutDetay />} />
              <Route exact path="/ourteams" element={<OurTeams />} />
              <Route exact path="/matchteams" element={<MatchTeams />} />
              <Route exact path="/fikstur" element={<Fikstur />} />
              <Route exact path="/latesmatch" element={<LatesMatch />} />
              <Route exact path="/match" element={<Match />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/teams" element={<Teams />} />
              <Route exact path="/footer" element={<Footer />} />
              <Route exact path="/newsdetay" element={<NewsDetay />} />
              <Route exact path="/banner1" element={<Banner1 />} />
              <Route exact path="/banner2" element={<Banner2 />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/profile" element={<Profile />} />
              {/* <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
        ) : (
          <div className="navbar-nav ml-auto">
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/match" element={<Match />} />
              <Route exact path="/matchteams" element={<MatchTeams />} />
              <Route exact path="/header" element={<Header />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/aboutdetay" element={<AboutDetay />} />
              <Route exact path="/ourteams" element={<OurTeams />} />
              <Route exact path="/matchteams" element={<MatchTeams />} />
              <Route exact path="/fikstur" element={<Fikstur />} />
              <Route exact path="/latesmatch" element={<LatesMatch />} />
              <Route exact path="/match" element={<Match />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/teams" element={<Teams />} />
              <Route exact path="/footer" element={<Footer />} />
              {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
              <Route exact path="/newsdetay" element={<NewsDetay />} />
              <Route exact path="/banner1" element={<Banner1 />} />
              <Route exact path="/banner2" element={<Banner2 />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/profile" element={<Profile />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        )}
      </nav>
 
    </div>
  );
}
export default App;

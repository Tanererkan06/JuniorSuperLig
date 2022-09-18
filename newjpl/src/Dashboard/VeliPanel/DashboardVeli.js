import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import AuthService from "../../services-socket/auth.service";
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import { getAllTakim } from '../../redux-new/actions/takim';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import '../App.css'; 
import './card.css';


function Dashboard () {
  const currentUser = AuthService.getCurrentUser();
  const dispatch = useDispatch();
  const takimlar = useSelector(state => state.takim);

  useEffect(() => {
    dispatch(getAllTakim());
  }, [dispatch]);

  const [followings, setFollowings] = useState([]);

  useEffect(() => {
      // axios.get(`localhost:8000/api/test/${currentUser.id}`).then(response => {
      axios.get(`http://localhost:8000/api/test/${currentUser.id}`).then(response => {
          // //console.log("RESP DATA: ", response.data.followings);
          setFollowings(response.data.followings);
      }).catch(error => {
          //console.log(error);
      })
  }, [])

  const notify = (takimAdi) => toast.success(`${takimAdi} adlı takım takip edildi!`, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

  const takipEtFunction = (takimAdi, takimId) => {
    // //console.log("TAKIM ADI VE ID: ", takimAdi, takimId);
    const data = { takimId: takimId };
    // axios.put(`localhost:8000/${currentUser.id}/follow`, data).then(response => {
    axios.put(`http://localhost:8000/${currentUser.id}/follow`, data).then(response => {
      //console.log(response);
      notify(takimAdi);
      setTimeout(() => {
        window.location.reload();
      }, 5500);
    }).catch(error => {
      //console.log(error);
    })
  }

  return(
    
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} /> 
 
        <div className='dashboard-body'>

  <div className="container">
    <div>
      <h1>Veli Dashboard</h1>
        <header className="jumbotron">
          <h3>
            Hoşgeldiniz, <strong>{currentUser.isim}</strong>!
          </h3>
        </header>
    </div>
    <hr className='style-two' />
    {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> */}
    <div className='grid-container'>
    {
      takimlar.length > 0
      // ? takimlar.map((takim, index) => {
      ? takimlar.filter(takim => !followings.includes(takim._id)).map((takim, index) => {
        // //console.log("TAKIM DATA: ", takimlar);
        return (
          <div class="panel-card">
            <img src={takim.logo} alt="logo" />
            <div class="panel-container">
              <h4><b>{takim.adi}</b></h4> 
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                <button className="panel-button-3" onClick={() => { takipEtFunction(takim.adi, takim._id) }}>Takip Et</button>
              </div>
            </div>
          </div>
        )
      })
      : <div>Yükleniyor...</div>
    }
    </div>
    </div>
  </div>
  <ToastContainer />
  </div>
    
    )
  }

export default Dashboard;
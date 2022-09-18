import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import AuthService from "../../../../services-socket/auth.service";
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-modal';
import { TypographyStylesProvider } from '@mantine/core';

 import '../../../App.css'; 
 import '../../card.css';

 const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    width: '600px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
};

function DashboardFollowingsVeli() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = 'black';
    }

    function closeModal() {
      setIsOpen(false);
    }

    const currentUser = AuthService.getCurrentUser();
    const dispatch = useDispatch();
    const takimlar = useSelector(state => state.takim);

    useEffect(() => {
        dispatch(getAllTakim());
      }, [dispatch]);

    const [followings, setFollowings] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // axios.get(`localhost:8000/api/test/${currentUser.id}`).then(response => {
        axios.get(`http://localhost:8000:8000/api/test/${currentUser.id}`).then(response => {
            // //console.log("RESP DATA: ", response.data.followings);
            setFollowings(response.data.followings);
        }).catch(error => {
            //console.log(error);
        });
    }, [])

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      },10000); //temporary solution
    }, [news])

    const notify = (takimAdi) => toast.success(`${takimAdi} adlı takımı takibi bıraktınız!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const takibiBirakFunction = (takimAdi, takimId) => {
        const data = { takimId: takimId };
        // axios.put(`localhost:8000/${currentUser.id}/unfollow`, data).then(response => {
        axios.put(`http://localhost:8000/${currentUser.id}/unfollow`, data).then(response => {
          //console.log(response);
          notify(takimAdi);
          setTimeout(() => {
            window.location.reload();
          }, 5500);
        }).catch(error => {
          //console.log(error);
        })
      }

      const haberleriGetir = (takimId) => {
        openModal();
        setLoading(true);
        const data = { takimId: takimId };
        // axios.post(`localhost:8000/news/timeline/all`, data).then(response => {
        axios.post(`http://localhost:8000/news/timeline/all`, data).then(response => {
          // //console.log(response);
          // notify(takimAdi);
          setNews(response.data);
        }).catch(error => {
          //console.log(error);
        })
      }

  return (
    <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} /> 
          
          <div className='dashboard-body'>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Haberler Sayfası</h2>
              <div>
              {
                news.length > 0
                ? news.map((haber, index) => {
                  return (
                    <TypographyStylesProvider style={{ marginBottom: '10px' }}>
                      <div class="panel-card-2">
                        <img src={haber.resim} alt="resim" />
                        <div class="panel-container">
                        <div dangerouslySetInnerHTML={{ __html: haber.baslik.replaceAll('&lt;', '<') }} />
                        <div dangerouslySetInnerHTML={{ __html: haber.kisaicerik.replaceAll('&lt;', '<') }} />
                        </div>
                      </div>
                    </TypographyStylesProvider>
                  )
                })
                : loading ? <div>Haberler yükleniyor...</div> : <div>Haber bulunamadı!</div>
              }
              </div>
              <button className="panel-button-3" style={{ backgroundColor: 'gray', marginTop: '10px' }} onClick={closeModal}>Kapat</button>
            </Modal>
            <div className="container">
                <h1>Takip Ettiğim Takımlar</h1>
                <div className='grid-container'>
                {
                    followings.length > 0 
                    ? takimlar.filter(takim => followings.includes(takim._id)).map(takim => (
                      <div class="panel-card">
                        <img src={takim.logo} alt="logo" />
                        <div class="panel-container">
                        <h4><b>{takim.adi}</b></h4> 
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <button className="panel-button-3" style={{ backgroundColor: 'brown' }} onClick={() => { takibiBirakFunction(takim.adi, takim._id) }}>Takibi Bırak</button>
                            <button className="panel-button-3" style={{ backgroundColor: '#006400', marginTop: '5px' }} onClick={() => { haberleriGetir(takim._id) }}>Haberlere Bak</button>
                        </div>
                        </div>
                      </div>
                    ))
                    : <div>Yükleniyor...</div>
                }
                </div>
          </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default DashboardFollowingsVeli
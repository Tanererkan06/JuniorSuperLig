import { useState, useEffect } from 'react'
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import '../../../Form.css';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import AuthService from "../../../../services-socket/auth.service";
import { getAllOyun } from '../../../../redux-new/actions/oyun';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { setGozcuCurrentRoom } from '../../../../redux-new/slices/gozcuCurrentRoom';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { HiOutlineMinus } from "react-icons/hi";
import { Link } from "react-router-dom";

const customStyles = {
    content: {
        /* top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black', */
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
    }
  };

export default function DashboardAtananOyunLive() {
    const [show, setShow] = useState(false);
    const currentUser = AuthService.getCurrentUser();
    const oyunlar = useSelector(state => state.oyun);
    const takimlar = useSelector(state => state.takim);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOyun());
        dispatch(getAllTakim());
    }, [])

    const notify = () => toast.success('Kaçak oyuncu kontrolü başarılı, artık oyunu başlatabilirsiniz!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const notify2 = () => toast.warning('Kaçak oyuncu kontrolü başarısız, lütfen tüm oyuncuları onayladığınızdan emin olun!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    // Modal tanımlamaları
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(id) {
        //console.log("ID GELDI: ", id);
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const openFunction = (id) => {
        //console.log("GELEN ID: ", id)
        openModal(id);
    }

    const gozcuRoom = (id) => {
        dispatch(setGozcuCurrentRoom(id));
    }

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
            {/* <div className='formcss-atanan'> */}
            <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                    <table className="fixResponsiveTable">
                        <thead>
                            <tr>
                                <th scope="col">Tarih</th>
                                <th scope="col">Saat</th>
                                <th scope="col">Birinci Takım</th>
                                <th scope="col">İkinci Takım</th>
                                <th scope="col">Oyuncu Kontrol Ekranı</th>
                                {/* <th>Sil</th> */}
                            </tr>
                            </thead>
                            <tbody>
                            {
                                oyunlar.length > 0
                                ? oyunlar.filter(test1 => test1.gozlemciid == currentUser.id).map((oyun, index) => {
                                    return (
                                        <tr>
                                            <td scope="row" data-label="Müsabaka Tarihi">{<Moment format="DD/MM/YYYY">{oyun.mactarihi}</Moment>}</td>
                                            <td data-label="Müsabaka Saati">{oyun.macsaati.slice(11, 16)}</td>
                                            {
                                                takimlar.length > 0
                                                ? takimlar.filter(test2 => test2._id == oyun.takimbirid).map((takim, index) => {
                                                    return (
                                                        <td data-label="Birinci Takım Adı">{takim.adi}</td>
                                                    )
                                                })
                                                : <div>Yükleniyor...</div>
                                            }
                                            {
                                                takimlar.length > 0
                                                ? takimlar.filter(test2 => test2._id == oyun.takimikiid).map((takim, index) => {
                                                    return (
                                                        <td data-label="İkinci Takım Adı">{takim.adi}</td>
                                                    )
                                                })
                                                : <div>Yükleniyor...</div>
                                            }
                                        <td data-label="Oyuncu Kontrol Ekranı"><Link to={"/dashboardoyuncukontrolgozlemci/" + oyun.id} onClick={() => gozcuRoom(oyun.id)} className="nav-link">Ekranı Aç</Link></td>
                                            
                                        </tr>
                                    )
                                }) 
                                : <div>Yükleniyor...</div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
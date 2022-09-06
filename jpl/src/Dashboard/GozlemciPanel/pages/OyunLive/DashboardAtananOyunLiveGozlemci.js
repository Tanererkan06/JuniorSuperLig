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
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  
    function openModal(event) {
      setIsOpen(true);
      event.preventDefault();
    }
  
    function afterOpenModal() {
      subtitle.style.color = 'black';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const [counter, setCounter] = useState(0);

    const checkCounter = (event) => {
        console.log("GELEN EVENT: ", event.target.checked );
        if(event.target.checked == true) {
            setCounter(counter + 1);
        }
    }

    const kacakOyuncuKontrolu = () => {
        // console.log("length: ", document.querySelectorAll('input[type="checkbox"]').length)
        if(counter == document.querySelectorAll('input[type="checkbox"]').length) {
            setShow(true);
            closeModal();
            notify();
        } else {
            notify2();
        }
    }

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
                    {
                        oyunlar.length > 0
                        ? oyunlar.filter(test => test.gozlemciid == currentUser.id).map((oyun, index) => {
                            return (
                                <>
                                    {/* <form className='formcss-atanan'> */}
                                    <div className='formcss-atanan'>
                                    <header className='header-atanan'>
                                        <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor='id'>{<Moment format="DD/MM/YYYY">{oyun.mactarihi}</Moment>} - {oyun.macsaati.slice(11, 16)}</label>
                                    </header>
                                    <body>
                                        <div className="col-xs-12" style={{textAlign: "center" }}>
                                        {
                                            takimlar.length > 0
                                            ? takimlar.filter(test2 => test2.id == oyun.takimbirid).map((takim1, index) => {
                                                return (
                                                    <>
                                                    <div className="col-xs-2">
                                                        <img src={takim1.logo} alt="Logo" style={{ height: '40px', width: '40px', borderRadius: '3.5rem'}} />
                                                    </div>
                                                    </>
                                                )
                                            })
                                            : <div>Yükleniyor..</div>
                                        }
                                            <div className="col-xs-2">
                                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">{oyun.takimbiradi}</label>
                                            </div>
                                            <div className="col-xs-4">
                                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">{oyun.macsonu}</label>
                                            </div>
                                            <div className="col-xs-2">
                                                <label className="labelcss-atanan" style={{ textAlign: "center" }} htmlFor="kimlikNo">{oyun.takimikiadi}</label>
                                            </div>
                                        {
                                            takimlar.length > 0
                                            ? takimlar.filter(test3 => test3.id == oyun.takimikiid).map((takim2, index) => {
                                                return (
                                                    <>
                                                    <div className="col-xs-2">
                                                    <img src={takim2.logo} alt="Logo" style={{ height: '40px', width: '40px', borderRadius: '3.5rem'}} />
                                                    </div>
                                                    </>
                                                )
                                            })
                                            : <div>Yükleniyor..</div>
                                        }
                                        {/* Modal alanı - başlangıç */}
                                        <div>
                    <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)} style={{marginBottom: '10px'}}>Kaçak Oyuncu Kontrol Ekranı</h2>
                    <div>
                    {
                            takimlar.length > 0
                            ? takimlar.filter(test6 => test6.id == oyun.takimbirid).map((takim4, index) => {
                                return (
                                    <span style={{ fontSize: '20px', fontWeight: 'bold'}}>{takim4.adi}</span>
                                )
                            })
                            : <div>Yükleniyor...</div>
                        }
                    
                    <div style={{ columnCount: '6', marginTop: '10px'}}>
                    {
                        takimlar.length > 0
                        ? takimlar.filter(test4 => test4.id == oyun.takimbirid).map((takim3, index) => {
                            return (
                                <>
                                {
                                    takim3.oyuncular.map((oyuncu, index) => {
                                        return (
                                            <>
                                            <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                                                <img src={oyuncu.resim} alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                                                <div style={{ marginLeft: '-5px'}}>
                                                    <span style={{fontSize: '16px', marginTop: '3px'}}><b>{oyuncu.adi}</b></span>
                                                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                                                        <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                                        <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                                    </div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                                </>
                            )
                        }
                        )
                        : <div>Yükleniyor..</div>
                    }
                    </div>
                    </div>
                    <div style={{ marginTop: '40px'}}>
                        {
                            takimlar.length > 0
                            ? takimlar.filter(test5 => test5.id == oyun.takimikiid).map((takim4, index) => {
                                return (
                                    <span style={{ fontSize: '20px', fontWeight: 'bold'}}>{takim4.adi}</span>
                                )
                            })
                            : <div>Yükleniyor...</div>
                        }
                    
                    <div style={{ columnCount: '6', marginTop: '10px'}}>
                    {
                        takimlar.length > 0
                        ? takimlar.filter(test5 => test5.id == oyun.takimikiid).map((takim4, index) => {
                            return (
                                <>
                                {
                                    takim4.oyuncular.map((oyuncu, index) => {
                                        return (
                                            <>
                                            <div class="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                                                <img src={oyuncu.resim} alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                                                <div style={{ marginLeft: '-5px'}}>
                                                    <span style={{fontSize: '16px', marginTop: '3px'}}><b>{oyuncu.adi}</b></span>
                                                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                                                        <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                                        <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}} onChange={(event) => { checkCounter(event); }}/>
                                                    </div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                                </>
                            )
                        }
                        )
                        : <div>Yükleniyor..</div>
                    }
                    </div>
                    </div>
                    <button className="buttoncss-atanan" style={{ marginBottom: '10px', marginTop: '30px'}} onClick={() => kacakOyuncuKontrolu()}>Kontrol Et</button>
                </Modal>
                </div>
                                        {/* Modal alanı - bitiş */}
                                        </div>

                                    </body>
                                    <footer>
                                        <div className="buttondiv">
                                            { show ? <button className="buttoncss-atanan" onClick={() => console.log("OYUN ID: ", oyun.id)}>Başlat</button> : ''}
                                            { !show ? <button className="buttoncss-kontrol" onClick={(event) => openModal(event)}>Oyuncu Kontrol Ekranını Aç</button> : ''}
                                        </div>
                                    </footer>
                                    <ToastContainer />
                                </div>
                                </>
                            )
                        })
                        : <div>Yükleniyor</div>
                    }
            </div>
        </div>
    )
}

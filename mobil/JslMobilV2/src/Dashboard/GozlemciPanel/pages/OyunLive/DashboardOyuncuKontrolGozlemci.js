import { useParams } from 'react-router';
import { useState, useEffect } from 'react'
import { getAllOyun } from '../../../../redux-new/actions/oyun';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import AuthService from "../../../../services-socket/auth.service";
import '../../../App.css';
import '../../../Form.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function DashboardOyuncuKontrolGozlemci() {
    const { id } = useParams();
    const currentUser = AuthService.getCurrentUser();
    const oyunlar = useSelector(state => state.oyun);
    const takimlar = useSelector(state => state.takim);
    const [show, setShow] = useState(false);

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

    const kacakOyuncuKontrolu = () => {
        const playerLengths = document.querySelectorAll('input[type="checkbox"]').length;
        const checkedLengths = document.querySelectorAll('input[type="checkbox"]:checked').length;
        
        if(playerLengths == checkedLengths) {
            setShow(true);
            notify();
        } else {
            notify2();
        }
    }

    const startMatch = (id) => {
        //console.log("START MATCH GELEN OYUN ID: ", id);
    }

  //console.log("ID: ", id);
  return (
    <div>
        <h1>Dashboard Oyuncu Kontrol Ekranı</h1>
        {
            oyunlar.filter(test1 => test1.id === id).map((oyun, index) => {
                //console.log("GELEN OYUN: ", oyun)
                return (
                    <>
                        {
                            takimlar.filter(test2 => test2._id == oyun.takimbirid).map((takim) => {
                                return (
                                    <>
                                    <h2>{takim.adi}</h2>
                                    {
                                        takim.oyuncular.map((oyuncu) => {
                                            //console.log("OYUNCULAR: ", oyuncu);
                                            return (
                                            <>
                                            <div className="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                                                <img src={oyuncu.resim} alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                                                <div style={{ marginLeft: '-5px'}}>
                                                    <span style={{fontSize: '16px', marginTop: '3px'}}><b>{oyuncu.adi}</b></span>
                                                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                                                        <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                                        <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                                </>
                                            )
                                        })
                                    }
                                    </>
                                )
                            })
                        }
                        {
                            takimlar.filter(test3 => test3._id == oyun.takimikiid).map((takim) => {
                                return (
                                    <>
                                    <h2>{takim.adi}</h2>
                                    {
                                        takim.oyuncular.map((oyuncu) => {
                                            //console.log("OYUNCULAR: ", oyuncu);
                                            return (
                                            <>
                                            <div className="oyuncu-card" style={{ display:'flex', justifyContent:'center', alignItems: 'center', gap:'20px'}}>
                                                <img src={oyuncu.resim} alt="Avatar" style={{ height: '70px', width: '70px', borderRadius: '3.5rem'}} />
                                                <div style={{ marginLeft: '-5px'}}>
                                                    <span style={{fontSize: '16px', marginTop: '3px'}}><b>{oyuncu.adi}</b></span>
                                                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                                                        <label htmlFor="check" style={{ fontWeight: 'normal'}}>Onayla</label>
                                                        <input type="checkbox" name="check" value="true" style={{marginBottom: '7px', marginLeft: '5px'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                                </>
                                            )
                                        })
                                    }
                                    </>
                                )
                            })
                        }
                        {
                            !show
                            ? <button className="buttoncss-atanan" style={{ marginBottom: '10px', marginTop: '30px'}} onClick={() => kacakOyuncuKontrolu()}>Kontrol Et</button>
                            : null
                        }
                        {
                            show
                            ? <Link to={"/dashboardgozlemcioyunlivegozlemci/" + oyun.id} className="nav-link"><button className="buttoncss-atanan" onClick={() => startMatch(oyun.id)}>Müsabakayı Başlat</button></Link>
                            : null
                        }
                        <ToastContainer />
                    </>
                )
            })
        }
    </div>
  )
}

export default DashboardOyuncuKontrolGozlemci
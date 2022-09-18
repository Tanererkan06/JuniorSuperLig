import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyun, updateOyun, getAllPublishedOyun, deleteOyun, deleteAllOyun } from '../../../../redux-new/actions/oyun';
import { getAllGozlemci } from '../../../../redux-new/actions/gozlemci';
import Moment from 'react-moment';
import DropdownList from "react-widgets/DropdownList";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import OyunService from '../../../../services-new/OyunService';
import GozlemciService from '../../../../services-new/GozlemciService';
import AuthService from "../../../../services-socket/auth.service";
import '../../../responsive-table.css';
import CreateOyun from './CreateOyun';
import UpdateOyun from './UpdateOyun';

import '../table.css';

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
  

export default function DashboardGetAllOyun() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const currentUser = AuthService.getCurrentUser();

    const gozlemciler = useSelector(state => state.gozlemci);
    const oyun = useSelector(state => state.oyun);

    const [data, setData] = useState([]);
    const [gozlemci, setGozlemci] = useState({});
    // const [gozlemciData, setGozlemciData] = useState([]);
    const [gonderId, setGonderId] = useState(0);
    const [loading, setLoading] = useState(true);

    const notify = () => toast.success('Gözlemci atandı!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const notify2 = () => toast.success('Başarıyla silindi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });


    // Useeffect tanımlamaları
    useEffect(() => {
        getData();
        GozlemciService.tumGozlemciler().then(response => {
            setData(response.data);
        })
        setTimeout(() => {
            setLoading(false);
        },60000); //temporary solution
    }, []);

    // Fonksiyon tanımlamaları
     const getData =  async () => {
         await dispatch(getAllOyun());     
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedOyun());     
    }

    const deleteOyunFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteOyun({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllOyunFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllOyun());
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }   
    }

    const editData = (id) => {
        openUpdateModal();
        setGonderId(id);
    }

    const [gozlemcininId, setGozlemcininId] = useState(0);
    const [gozlemcininUsername, setGozlemcininUsername] = useState("");

    const gozlemciFunc = (value) => {
        setGozlemcininId(value._id);
        setGozlemcininUsername(value.username);
    }
    
    const gozlemciAta = (id) => {
        const gozlemciid = gozlemcininId;
        const gozlemciadi = gozlemcininUsername;


        OyunService.update(id).then(response =>{
            const adi = response.data.adi;
            const mactarihi = response.data.mactarihi;
            const macsaati = response.data.macsaati;
            const sehir = response.data.sehir;
            const yer = response.data.yer;
            const lig = response.data.lig;
            const macsonu = response.data.macsonu;
            const ilkyarisonucu = response.data.ilkyarisonucu;
            const takimbirid = response.data.takimbirid;
            const takimbiradi = response.data.takimbiradi;
            const takimbiresamelistesi = response.data.takimbiresamelistesi;
            const takimikiid = response.data.takimikiid;
            const takimikiadi = response.data.takimikiadi;
            const takimikiesamelistesi = response.data.takimikiesamelistesi;
            const yorum = response.data.yorum;
            const published = response.data.published;
            const data = {adi, mactarihi, macsaati, lig, sehir, yer, takimbirid, takimbiradi, takimbiresamelistesi, takimikiid, takimikiadi, takimikiesamelistesi, gozlemciid, gozlemciadi, yorum, macsonu, ilkyarisonucu, published }
            dispatch(updateOyun({id, data}));
        });
        notify();
        setTimeout(() => {
            window.location.reload(false);
          }, 4500);
    }

    // Modal tanımlamaları
    let subtitle;
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    function openCreateModal() {
        setCreateModalIsOpen(true);
    }

    function openUpdateModal() {
        setUpdateModalIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeCreateModal() {
        setCreateModalIsOpen(false);
        window.location.reload(false);
    }

    function closeUpdateModal() {
        setUpdateModalIsOpen(false);
        window.location.reload(false);
    }


    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />


            <div className='dashboard-body'>
                <div>
                    <Modal
                        isOpen={createModalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeCreateModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Müsabaka Ekle</h2>
                        <CreateOyun close={closeCreateModal}/>
                    </Modal>
                </div>
                <div>
                    <Modal
                        isOpen={updateModalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeUpdateModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Müsabakayı Düzenle</h2>
                        <UpdateOyun close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    {/* <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button> */}
                    {/* <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */}
                    <button onClick={() => deleteAllOyunFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                        <table className="fixResponsiveTable">
                            <thead>
                                <tr>
                                    <th scope="col">Tarih</th>
                                    <th scope="col">Saat</th>
                                    <th scope="col">Lig</th>
                                    <th scope="col">Şehir</th>
                                    <th scope="col">Yer</th>
                                    <th scope="col">Birinci Takım</th>
                                    <th scope="col">Birinci Takım Esame Listesi</th>
                                    <th scope="col">İkinci Takım</th>
                                    <th scope="col">İkinci Takım Esame Listesi</th>
                                    <th scope="col">Gözlemci</th>
                                    <th scope="col">İlk Yarı Sonucu</th>
                                    <th scope="col">Maç Sonucu</th>
                                    <th scope="col">Gozlemci Seç</th>
                                    <th scope="col">Gozlemci Ata</th>
                                    <th scope="col">Düzenle</th>
                                    <th scope="col">Sil</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                oyun.length > 0
                                ? oyun.filter(item => item.sehir === currentUser.sehir).map((item, index) => {
                                    // //console.log("verı: ", oyun);
                                    return (
                                        <tr>
                                            <td scope="row" data-label="Maç Tarihi"><Moment format="DD/MM/YYYY">{item.mactarihi}</Moment></td>
                                            <td data-label="Maç Saati"><Moment format="DD/MM/YYYY">{item.macsaati}</Moment></td>
                                            <td data-label="Lig">{item.lig}</td>
                                            <td data-label="Şehir">{item.sehir}</td>
                                            <td data-label="Yer">{item.yer}</td>
                                            <td data-label="Birinci Takım">{item.takimbiradi}</td>
                                            <td data-label="Birinci Takım">{item.takimbiresamelistesi}</td>
                                            <td data-label="İkinci Takım">{item.takimikiadi}</td>
                                            <td data-label="İkinci Takım">{item.takimikiesamelistesi}</td>
                                            <td data-label="Gözlemci Adı">{item.gozlemciadi}</td>
                                            <td data-label="İlk Yarı Sonucu">{item.ilkyarisonucu}</td>
                                            <td data-label="Maç Sonu">{item.macsonu}</td>
                                            <td data-label="Gözlemci Seçin">
                                                <DropdownList
                                                    style={{ width: '100px' }}
                                                    data={data}
                                                    dataKey='id'
                                                    textField='username'
                                                    defaultValue={'Gözlemci seçin'}
                                                    onSelect={(value) => { gozlemciFunc(value)}}
                                                />
                                            </td>
                                            <td data-label="Gözlemci Ata"><button onClick={() => gozlemciAta(item.id)} className="listele-button listele-button-secondary">Gözlemciyi Ata</button></td>
                                            <td data-label="Düzenle"><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td data-label="Sil"><button onClick={() => deleteOyunFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
                                        </tr>
                                    );
                                })
                                : loading ? <div>Yükleniyor...</div> : <div>Veri yok!</div>
                            }
                            <ToastContainer />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
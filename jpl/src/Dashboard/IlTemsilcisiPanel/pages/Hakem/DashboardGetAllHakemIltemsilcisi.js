import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllHakem, getAllPublishedHakem, deleteHakem, deleteAllHakem } from '../../../../redux-new/actions/hakem';
import Moment from 'react-moment';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import CreateHakem from './CreateHakem';
import UpdateHakem from './UpdateHakem';

import '../table.css';


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
  

export default function DashboardGetAllHakem() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const hakem = useSelector(state => state.hakem);

    const [gonderId, setGonderId] = useState(0);
    const [loading, setLoading] = useState(true);

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
        setTimeout(() => {
            setLoading(false);
        },60000); //temporary solution
    }, []);

    useEffect(() => {
        dispatch(getAllHakem());
    }, []);

    // Fonksiyon tanımlamaları
     const getData =  async () => {
         await dispatch(getAllHakem());      
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedHakem());
    }

    const deleteHakemFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteHakem({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllHakemFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllHakem());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Hakem Ekle</h2>
                        <CreateHakem close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hakemi Düzenle</h2>
                        <UpdateHakem close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    <button onClick={() => deleteAllHakemFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Fotoğraf</th>
                                <th>Adı</th>
                                <th>Soyadı</th>
                                <th>Telefon</th>
                                <th>Adres</th>
                                <th>Doğum Tarihi</th>
                                <th>Gösterdiği Sarı Kart</th>
                                <th>Gösterdiği Kırmızı Kart</th>
                                <th>Oyun Sayısı</th>
                                <th>Görevli Olduğu Oyun</th>
                                {/* <th>E-Posta</th> */}
                                {/* <th>Şifre</th> */}
                                {/* <th>Published</th> */}
                                <th>Düzenle</th>
                                <th>Sil</th>
                            </tr>
                            {
                                hakem.length > 0
                                ? hakem.map((item, index) => {
                                    // console.log("verı: ", data);
                                    return (
                                        <tr>
                                            {/* <td>{item.id}</td> */}
                                            <td><img src={item.fotograf} alt="fotograf"/></td>
                                            <td>{item.adi}</td>
                                            <td>{item.soyadi}</td>
                                            <td>{item.telefon}</td>
                                            <td>{item.adres}</td>
                                            <td><Moment format="DD/MM/YYYY">{item.dogumtarihi}</Moment></td>
                                            <td>{item.gosterdigisarikart}</td>
                                            <td>{item.gosterdigikirmizikart}</td>
                                            <td>{item.oyunsayisi}</td>
                                            <td>{item.gorevliolduguoyun}</td>
                                            {/* <td>{item.eposta}</td> */}
                                            {/* <td>{item.sifre}</td> */}
                                            {/* {item.published ? <td>True</td> : <td>False</td>} */}
                                            <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td><button onClick={() => deleteHakemFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
                                        </tr>
                                    );
                                })
                                : loading ? <div>Yükleniyor...</div> : <div>Veri yok!</div>
                            }
                            <ToastContainer />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
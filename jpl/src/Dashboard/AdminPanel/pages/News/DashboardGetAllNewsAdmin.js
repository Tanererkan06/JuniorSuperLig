import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, getAllPublishedNews, deleteNews, deleteAllNews } from '../../../../redux-new/actions/news';
import Moment from 'react-moment';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import CreateNews from './CreateNews';
import UpdateNews from './UpdateNews';

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
      width: '70%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }
  };
  

export default function DashboardGetAllNews() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();

    const news = useSelector(state => state.news); 

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
    useEffect(async () => {
        await getData();
        setTimeout(() => {
            setLoading(false);
        },60000); //temporary solution
    }, []);


    // Fonksiyon tanımlamaları
     const getData =  async () => {
        await dispatch(getAllNews());
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedNews());
    }

    const deleteNewsFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteNews({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllNewsFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllNews());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Haber Ekle</h2>
                        <CreateNews close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Haberi Düzenle</h2>
                        <UpdateNews close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    <button onClick={() => deleteAllNewsFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                <th>Başlık</th>
                                <th>İçerik</th>
                                <th>Resim</th>
                                <th>Kısa İçerik</th>
                                <th>Tarih</th>
                                <th>Ülke</th>
                                <th>Şehir</th>
                                <th>Lig</th>
                                <th>Desc</th>
                                <th>Düzenle</th>
                                <th>Sil</th>
                            </tr>
                            {
                                news.length > 0
                                ? news.map((item, index) => {
                                    return (
                                        <tr>
                                            {item.baslik ? <td>{item.baslik.replaceAll('&lt;', '<')}</td> : <td></td>}
                                            {item.icerik ? <td>{item.icerik.replaceAll('&lt;', '<')}</td> : <td></td>}
                                            <td>{item.resim}</td>
                                            {item.kisaicerik ? <td>{item.kisaicerik.replaceAll('&lt;', '<')}</td> : <td></td>}
                                            <td><Moment format="DD/MM/YYYY">{item.tarih}</Moment></td>
                                            <td>{item.ulke}</td>
                                            <td>{item.sehir}</td>
                                            <td>{item.lig}</td>
                                            {item.desc ? <td>{item.desc.replaceAll('&lt;', '<')}</td> : <td></td>}
                                            <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td><button onClick={() => deleteNewsFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
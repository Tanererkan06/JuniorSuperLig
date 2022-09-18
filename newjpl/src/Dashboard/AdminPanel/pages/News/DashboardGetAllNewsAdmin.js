import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, getAllPublishedNews, deleteNews, deleteAllNews } from '../../../../redux-new/actions/news';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import DropdownList from "react-widgets/DropdownList";
import CreateNews from './CreateNews';
import UpdateNews from './UpdateNews';
import AuthService from "../../../../services-socket/auth.service";
import '../../../responsive-table.css';
// import '../table.css';
import Moment from 'react-moment';


const customStyles = {
    content: {
    //   top: '50%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
    //   width: '95%',
    //   color: 'black',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
    }
  };
  

export default function DashboardGetAllLigler() {
    // Değişken tanımlamaları
    const currentUser = AuthService.getCurrentUser();

    const dispatch = useDispatch();
    const haberler = useSelector(state => state.news); 

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
                    {/* <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button> */}
                    {/* <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */}
                    <button onClick={() => deleteAllNewsFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                        <table className="fixResponsiveTable">
                            <thead>
                            <tr>
                                <th scope="col">Başlık</th>
                                <th scope="col">İçerik</th>
                                <th scope="col">Resim</th>
                                <th scope="col">Kısa İçerik</th>
                                <th scope="col">Tarih</th>
                                <th scope="col">Ülke</th>
                                <th scope="col">Şehir</th>
                                <th scope="col">Lig</th>
                                <th scope="col">Düzenle</th>
                                <th scope="col">Sil</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                haberler.length > 0
                                ? haberler.map((item, index) => {
                                    return (
                                        <tr>
                                            {item.baslik ? <td scope="row" data-label="Başlık">{item.baslik.replaceAll('&lt;', '<')}</td> : <td scope="row" data-label="Başlık"></td>}
                                            {item.icerik ? <td data-label="İçerik">{item.icerik.replaceAll('&lt;', '<')}</td> : <td data-label="İçerik"></td>}
                                            <td data-label="Resim">{item.resim}</td>
                                            {item.kisaicerik ? <td data-label="Kısa İçerik">{item.kisaicerik.replaceAll('&lt;', '<')}</td> : <td data-label="Kısa"></td>}
                                            <td data-label="Tarih"><Moment format="DD/MM/YYYY">{item.tarih}</Moment></td>
                                            <td data-label="Ülke">{item.ulke}</td>
                                            <td data-label="Şehir">{item.sehir}</td>
                                            <td data-label="Lig">{item.lig}</td>
                                            <td data-label="Düzenle"><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td data-label="Sil"><button onClick={() => deleteNewsFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
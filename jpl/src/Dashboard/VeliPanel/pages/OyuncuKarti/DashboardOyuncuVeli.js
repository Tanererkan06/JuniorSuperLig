import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyuncuKarti, getAllPublishedOyuncuKarti, deleteOyuncuKarti, deleteAllOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import Moment from 'react-moment';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import CreateOyuncu from './CreateOyuncu';
import UpdateOyuncu from './UpdateOyuncu';

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
  

export default function DashboardGetAllOyuncuKarti() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const oyuncuKarti = useSelector(state => state.oyuncuKarti);

    const [data, setData] = useState([]);
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
         dispatch(getAllOyuncuKarti());      
    }

    const publishedGetData = () => {
        dispatch(getAllPublishedOyuncuKarti());
    }

    const deleteOyuncuKartiFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteOyuncuKarti({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllOyuncuKartiFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllOyuncuKarti());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Oyuncu Ekle</h2>
                        <CreateOyuncu close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Oyuncuyu Düzenle</h2>
                        <UpdateOyuncu close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    <button onClick={() => deleteAllOyuncuKartiFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Fotoğraf</th>
                                <th>Kimlik No</th>
                                <th>Uyruk</th>
                                <th>Adı</th>
                                <th>Soyadı</th>
                                <th>Doğum Yeri</th>
                                <th>Doğum Tarihi</th>
                                <th>Boy</th>
                                <th>Kilo</th>
                                <th>Pozisyon</th>
                                <th>Forma No</th>
                                {/* <th>Takım ID</th> */}
                                <th>Takım Adı</th>
                                <th>Lig</th>
                                <th>Önceki Takımı</th>
                                <th>Oynadığı Maç Sayısı</th>
                                <th>Atılan Gol Sayısı</th>
                                <th>Asist</th>
                                <th>Gördüğü Sarı Kart</th>
                                <th>Gördüğü Kırmızı Kart</th>
                                {/* <th>Antrenör ID</th> */}
                                <th>Antrenör Adı</th>
                                <th>Veli</th>
                                <th>Telefon</th>
                                <th>Adres</th>
                                <th>E-Posta</th>
                                {/* <th>Şifre</th> */}
                                {/* <th>Published</th> */}
                                <th>Düzenle</th>
                                <th>Sil</th>
                            </tr>
                            {
                                oyuncuKarti.length > 0
                                ? oyuncuKarti.map((item, index) => {
                                    // console.log("verı: ", data);
                                    return (
                                        <tr>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.resim}</td>
                                            <td>{item.kimlikno}</td>
                                            <td>{item.uyruk}</td>
                                            <td>{item.adi}</td>
                                            <td>{item.soyadi}</td>
                                            <td>{item.dogumyeri}</td>
                                            <td><Moment format="DD/MM/YYYY">{item.Dogumtarihi}</Moment></td>
                                            <td>{item.boy}</td>
                                            <td>{item.kilo}</td>
                                            <td>{item.pozisyon}</td>
                                            <td>{item.formano}</td>
                                            {/* <td>{item.takimid}</td> */}
                                            <td>{item.takimadi}</td>
                                            <td>{item.lig}</td>
                                            <td>{item.oncekitakimi}</td>
                                            <td>{item.oynadigimacsayisi}</td>
                                            <td>{item.atilangolsayisi}</td>
                                            <td>{item.asist}</td>
                                            <td>{item.sarikart}</td>
                                            <td>{item.kirmizikart}</td>
                                            {/* <td>{item.hocaid}</td> */}
                                            <td>{item.hocaadi}</td>
                                            <td>{item.veli}</td>
                                            <td>{item.telefon}</td>
                                            <td>{item.adres}</td>
                                            <td>{item.eposta}</td>
                                            {/* <td>{item.sifre}</td> */}
                                            {/* {item.published ? <td>True</td> : <td>False</td>} */}
                                            <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td><button onClick={() => deleteOyuncuKartiFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
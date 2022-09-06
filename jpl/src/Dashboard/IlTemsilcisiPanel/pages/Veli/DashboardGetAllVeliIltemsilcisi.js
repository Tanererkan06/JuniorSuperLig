import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVeli, getAllPublishedVeli, deleteVeli, deleteAllVeli } from '../../../../redux-new/actions/veli';
import io from "socket.io-client";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import CreateVeli from './CreateVeli';
import UpdateVeli from './UpdateVeli';

import '../table.css';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }
  };
  

export default function DashboardGetAllVeli() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const veli = useSelector(state => state.veli);

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
         await dispatch(getAllVeli());     
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedVeli());
    }

    const deleteVeliFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteVeli({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllVeliFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllVeli());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Veli Ekle</h2>
                        <CreateVeli close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Veliyi Düzenle</h2>
                        <UpdateVeli close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    <button onClick={() => deleteAllVeliFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                 {/* <th>ID</th> */}
                                <th>Adı</th>
                                <th>Soyadı</th>
                                <th>Telefon</th>
                                <th>Adres</th>
                                <th>Uyruk</th>
                                {/* <th>Oyuncu ID</th> */}
                                <th>Oyuncu Adı</th>
                                {/* <th>E-posta</th> */}
                                {/* <th>Şifre</th> */}
                                {/* <th>Published</th> */}
                                <th>Düzenle</th>
                                <th>Sil</th>
                            </tr>
                            {
                                veli.length > 0
                                ? veli.map((item, index) => {
                                    // console.log("verı: ", data);
                                    return (
                                        <tr>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.adi}</td>
                                            <td>{item.soyadi}</td>
                                            <td>{item.telefon}</td>
                                            <td>{item.adres}</td>
                                            <td>{item.uyruk}</td>
                                            {/* <td>{item.oyuncuid}</td> */}
                                            <td>{item.oyuncuadi}</td>
                                            {/* <td>{item.eposta}</td> */}
                                            {/* <td>{item.sifre}</td> */}
                                            <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td><button onClick={() => deleteVeliFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
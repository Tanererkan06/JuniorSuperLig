import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTakim, getAllPublishedTakim, deleteTakim, deleteAllTakim } from '../../../../redux-new/actions/takim';
import Moment from 'react-moment';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import DropdownList from "react-widgets/DropdownList";
import CreateTakim from './CreateTakim';
import UpdateTakim from './UpdateTakim';

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
  

export default function DashboardGetAllTakim() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const takim = useSelector(state => state.takim);

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
         await dispatch(getAllTakim());   
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedTakim());
    }

    const deleteTakimFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteTakim({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllTakimFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllTakim());
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

    const addFavorites = (id) => {
        return 0;
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Takım Ekle</h2>
                        <CreateTakim close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Takımı Düzenle</h2>
                        <UpdateTakim close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    <button onClick={() => deleteAllTakimFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Adı</th>
                                <th>Kuruluş Tarihi</th>
                                <th>Telefon</th>
                                <th>Adres</th>
                                <th>Oyun Konum</th>
                                <th>Lig</th>
                                <th>Şehir</th>
                                <th>Fax</th>
                                <th>Website</th>
                                <th>Oyuncular</th>
                                {/* <th>Hoca ID</th> */}
                                <th>Hoca Adı</th>
                                <th>Logo</th>
                                <th>Konum</th>
                                <th>Sorumlu</th>
                                <th>Sorumlu İletişim</th>
                                <th>E-posta</th>
                                {/* <th>Şifre</th> */}
                                {/* <th>Published</th> */}
                                <th>Favoriye Ekle</th>
                                <th>Düzenle</th>
                                <th>Sil</th>
                            </tr>
                            {
                                takim.length > 0
                                ? takim.map((item, index) => {
                                    // console.log("verı: ", data);
                                    return (
                                        <tr>
                                            <td>{item.adi}</td>
                                            <td><Moment format="DD/MM/YYYY">{item.kurulustarihi}</Moment></td>
                                            <td>{item.telefon}</td>
                                            <td>{item.adres}</td>
                                            <td>{item.oyunkonum}</td>
                                            <td>{item.lig}</td>
                                            <td>{item.sehir}</td>
                                            <td>{item.fax}</td>
                                            <td>{item.website}</td>
                                            <td>
                                                <DropdownList
                                                    data={item.oyuncular}
                                                    dataKey='id'
                                                    textField='adi'
                                                    defaultValue={item.oyuncular[0]}
                                                />
                                            </td>
                                            <td>{item.hocaadi}</td>
                                            <td>{item.logo}</td>
                                            <td>{item.konum}</td>
                                            <td>{item.sorumlu}</td>
                                            <td>{item.sorumluiletisim}</td>
                                            <td>{item.eposta}</td>
                                            {/* <td>{item.sifre}</td> */}
                                            {/* {item.published ? <td>True</td> : <td>False</td>} */}
                                            <td><button className="listele-button listele-button-secondary" onClick={() => addFavorites(item.id)}>Favoriye Ekle</button></td>
                                            <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td><button onClick={() => deleteTakimFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
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
import AuthService from "../../../../services-socket/auth.service";

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
  

export default function DashboardGetAllTakim() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const takim = useSelector(state => state.takim);
    const currentUser = AuthService.getCurrentUser();

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

    // const editData = (id) => {
    //     openUpdateModal();
    //     setGonderId(id);
    // }

    const addOyuncu = (id) => {
        openCreateModal();
        setGonderId(id);
        // console.log("GELEN TAKIM ID: ", id);
        // il, lig, takım 
    }

    // Modal tanımlamaları
    let subtitle;
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    // const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    function openCreateModal() {
        setCreateModalIsOpen(true);
    }

    // function openUpdateModal() {
    //     setUpdateModalIsOpen(true);
    // }

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeCreateModal() {
        setCreateModalIsOpen(false);
        window.location.reload(false);
    }

    // function closeUpdateModal() {
    //     setUpdateModalIsOpen(false);
    //     window.location.reload(false);
    // }


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
                        <CreateTakim close={closeCreateModal} id={gonderId}/>
                    </Modal>
                </div>
                
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                    <table className="fixResponsiveTable">
                        <thead>
                            <tr>
                                <th scope="col">Adı</th>
                                <th scope="col">Kuruluş Tarihi</th>
                                <th scope="col">Telefon</th>
                                <th scope="col">Adres</th>
                                <th scope="col">Oyun Konum</th>
                                <th scope="col">Lig</th>
                                <th scope="col">Fax</th>
                                <th scope="col">Website</th>
                                <th scope="col">Konum</th>
                                <th scope="col">Oyuncu Ekle</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                takim.length > 0
                                ? takim.filter(test => test.veli.some(item1 => item1.username === currentUser.username)).map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td scope="row" data-label="Adı">{item.adi}</td>
                                            <td data-label="Kuruluş Tarihi"><Moment format="DD/MM/YYYY">{item.kurulustarihi}</Moment></td>
                                            <td data-label="Telefon">{item.telefon}</td>
                                            <td data-label="Adres">{item.adres}</td>
                                            <td data-label="Müsabaka Konum">{item.oyunkonum}</td>
                                            <td data-label="Lig">{item.lig}</td>
                                            <td data-label="Fax">{item.fax}</td>
                                            <td data-label="Website">{item.website}</td>
                                            <td data-label="Konum">{item.konum}</td> 
                                            <td data-label="Oyuncu Ekle">
                                            <button className="listele-button listele-button-primary" onClick={() => addOyuncu(item._id)}>Oyuncu Ekle</button></td>
                                        </tr>
                                           )
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
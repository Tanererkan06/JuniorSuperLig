import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllGozlemci, getAllPublishedGozlemci, deleteGozlemci, deleteAllGozlemci, tumGozlemciler } from '../../../../redux-new/actions/gozlemci';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import DropdownList from "react-widgets/DropdownList";
import CreateGozlemci from './CreateGozlemci';
import UpdateGozlemci from './UpdateGozlemci';
import GozlemciService from '../../../../services-new/GozlemciService';
import '../table.css';

import axios from 'axios';


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
  

export default function DashboardGetAllGozlemci() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const gozlemci = useSelector(state => state.gozlemci);

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
        // getData();
        GozlemciService.tumGozlemciler().then(response => {
            setData(response.data);
        })
        setTimeout(() => {
            setLoading(false);
        },60000); //temporary solution
    }, []);

    useEffect(() => {
        dispatch(tumGozlemciler());
    } , []);

    // Fonksiyon tanımlamaları
     const getData =  async () => {
        await dispatch(tumGozlemciler()); 
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedGozlemci());
    }

    const deleteGozlemciFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteGozlemci({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllGozlemciFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllGozlemci());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Gözlemci Ekle</h2>
                        <CreateGozlemci close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Gözlemciyi Düzenle</h2>
                        <UpdateGozlemci close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    {/* <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */}
                    <button onClick={() => deleteAllGozlemciFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                {/* <th>ID</th> */}
                                {/* <th>Oyun Live ID</th> */}
                                {/* <th>Adı</th> */}
                                {/* <th>Published</th> */}
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Düzenle</th>
                                <th>Sil</th>
                            </tr>
                            {
                                data.length > 0
                                ? data.map((item, index) => {
                                    console.log("verı: ", data);
                                    return (
                                        <tr>
                                            {/* <td>
                                                <DropdownList
                                                    data={item.oyunliveid}
                                                    dataKey='id'
                                                    textField='adi'
                                                    defaultValue={item.oyunliveid[0]}
                                                />
                                            </td> */}
                                            {/* <td>{item.adi}</td> */}
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.roles}</td>
                                            {/* {item.published ? <td>True</td> : <td>False</td>} */}
                                            <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td><button onClick={() => deleteGozlemciFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
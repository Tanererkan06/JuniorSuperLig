import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllIlTemsilcisi, getAllPublishedIlTemsilcisi, deleteIlTemsilcisi, deleteAllIlTemsilcisi } from '../../../../redux-new/actions/ilTemsilcisi';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import CreateIlTemsilcisi from './CreateIlTemsilcisi';
import UpdateIlTemsilcisi from './UpdateIlTemsilcisi';

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
  

export default function DashboardGetAllIlTemsilcisi() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const ilTemsilcisi = useSelector(state => state.ilTemsilcisi);

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
         dispatch(getAllIlTemsilcisi());     
    }

    const publishedGetData = () => {
        dispatch(getAllPublishedIlTemsilcisi());
    }

    const deleteIlTemsilcisiFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteIlTemsilcisi({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllIlTemsilcisiFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllIlTemsilcisi());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni İl Temsilcisi Ekle</h2>
                        <CreateIlTemsilcisi close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>İl Temsilcisini Düzenle</h2>
                        <UpdateIlTemsilcisi close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    {/* <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button> */}
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    {/* <button onClick={() => deleteAllIlTemsilcisiFunc()} className="listele-button listele-button-danger">Tümünü Sil</button> */}
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Adı</th>
                                {/* <th>Published</th> */}
                                {/* <th>Düzenle</th> */}
                                {/* <th>Sil</th> */}
                            </tr>
                            {
                                ilTemsilcisi.length > 0
                                ? ilTemsilcisi.map((item, index) => {
                                    // console.log("verı: ", data);
                                    return (
                                        <tr>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.adi}</td>
                                            {/* {item.published ? <td>True</td> : <td>False</td>} */}
                                            {/* <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td> */}
                                            {/* <td><button onClick={() => deleteIlTemsilcisiFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td> */}
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
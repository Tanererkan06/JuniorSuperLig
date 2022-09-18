import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSponsorUcretBirimi, getAllPublishedSponsorUcretBirimi, deleteSponsorUcretBirimi, deleteAllSponsorUcretBirimi } from '../../../../redux-new/actions/sponsorUcretBirimi';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import AuthService from "../../../../services-socket/auth.service";
import '../../../responsive-table.css';

import CreateSponsorUcretBirimi from './CreateSponsorUcretBirimi';
import UpdateSponsorUcretBirimi from './UpdateSponsorUcretBirimi';

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
        position: 'absolute',
    }
  };
  

export default function DashboardGetAllSponsorUcretBirimi() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const sponsorUcretBirimi = useSelector(state => state.sponsorUcretBirimi);
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
         await dispatch(getAllSponsorUcretBirimi());    
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedSponsorUcretBirimi()); 
    }

    const deleteSponsorUcretBirimiFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteSponsorUcretBirimi({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllSponsorUcretBirimiFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllSponsorUcretBirimi());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Sponsor Ücret Birimi Ekle</h2>
                        <CreateSponsorUcretBirimi close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sponsor Ücret Birimi Düzenle</h2>
                        <UpdateSponsorUcretBirimi close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    {/*  <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */}
                    <button onClick={() => deleteAllSponsorUcretBirimiFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                        <table className="fixResponsiveTable">
                            <thead>
                            <tr>
                                <th scope="col">Adı</th>
                                <th scope="col">Düzenle</th>
                                <th scope="col">Sil</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                sponsorUcretBirimi.length > 0
                                ? sponsorUcretBirimi.map((item, index) => {
                                    return (
                                        <tr>
                                            <td scope="row" data-label="Adı">{item.adi}</td>
                                            <td data-label="Düzenle"><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td data-label="Sil"><button onClick={() => deleteSponsorUcretBirimiFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
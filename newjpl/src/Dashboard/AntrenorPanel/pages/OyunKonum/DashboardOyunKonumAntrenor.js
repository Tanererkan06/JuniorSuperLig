import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyunKonum, getAllPublishedOyunKonum, deleteOyunKonum, deleteAllOyunKonum } from '../../../../redux-new/actions/oyunKonum';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import CreateOyunKonum from './CreateOyunKonum';
import UpdateOyunKonum from './UpdateOyunKonum';
import '../table.css';
import AuthService from "../../../../services-socket/auth.service";
import '../../../responsive-table.css';

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
  

export default function DashboardGetAllOyunKonum() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const oyunKonum = useSelector(state => state.oyunKonum);
    
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

    useEffect(() => {
        dispatch(getAllOyunKonum());
    } , []);

    // Fonksiyon tanımlamaları
     const getData =  async () => {
         await dispatch(getAllOyunKonum());    
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedOyunKonum());
    }

    const deleteOyunKonumFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteOyunKonum({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllOyunKonumFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllOyunKonum());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Müsabaka Konum Ekle</h2>
                        <CreateOyunKonum close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Müsabaka Konumu Düzenle</h2>
                        <UpdateOyunKonum close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    {/*  <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */}
                    <button onClick={() => deleteAllOyunKonumFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                    <table className="fixResponsiveTable">
                        <thead>
                            <tr>
                                <th scope="col">Adı</th>
                                <th scope="col">Konum</th>
                                <th scope="col">Şehir</th>
                                <th scope="col">Takım Adı</th>
                                <th scope="col">Sorumlu</th>
                                <th scope="col">Sorumlu Iletişim</th>
                                <th scope="col">Düzenle</th>
                                <th scope="col">Sil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                oyunKonum.length > 0
                                ? oyunKonum.filter(item => item.sehir === currentUser.sehir).map((item, index) => {
                                    return (
                                        <tr>
                                            <td scope="row" data-label="Adı">{item.adi}</td>
                                            <td data-label="Konum">{item.konum}</td>
                                            <td data-label="Şehir">{item.sehir}</td>
                                            <td data-label="Takım Adı">{item.takimadi}</td>
                                            <td data-label="Sorumlu">{item.sorumlu}</td>
                                            <td data-label="Sorumlu İletişim">{item.sorumluiletisim}</td>
                                            <td data-label="Düzenle"><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td data-label="Sil"><button onClick={() => deleteOyunKonumFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyuncuKarti, getAllPublishedOyuncuKarti, deleteOyuncuKarti, deleteAllOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import Moment from 'react-moment';
import Modal from 'react-modal'; 
import { ToastContainer, toast } from 'react-toastify';
import AuthService from "../../../../services-socket/auth.service";
import CreateOyuncu from './CreateOyuncu';
import UpdateOyuncu from './UpdateOyuncu';
import '../../../responsive-table.css';
import '../table.css';
/* import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; */

const customStyles = {
    content: {
   /*      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',  */
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
      
       
    }
  };
  

export default function DashboardGetAllOyuncuKarti() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const oyuncuKarti = useSelector(state => state.oyuncuKarti);
    const currentUser = AuthService.getCurrentUser();
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
                     {/* <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */} 
                    <button onClick={() => deleteAllOyuncuKartiFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                    <table className="fixResponsiveTable">
                        <thead>
                            <tr>
                                <th scope="col">Fotoğraf</th>
                                <th scope="col">Kimlik No</th>
                                <th scope="col">Uyruk</th>
                                <th scope="col">Şehir</th>
                                <th scope="col">Adı</th>
                                <th scope="col">Soyadı</th>
                                <th scope="col">Doğum Yeri</th>
                                <th scope="col">Doğum Tarihi</th>
                                <th scope="col">Boy</th>
                                <th scope="col">Kilo</th>
                                <th scope="col">Pozisyon</th>
                                <th scope="col">Forma No</th>
                                <th scope="col">Takım Adı</th>
                                <th scope="col">Lig</th>
                                <th scope="col">Önceki Takımı</th>
                                <th scope="col">Oynadığı Maç Sayısı</th>
                                <th scope="col">Atılan Gol Sayısı</th>
                                <th scope="col">Asist</th>
                                <th scope="col">Gördüğü Sarı Kart</th>
                                <th scope="col">Gördüğü Kırmızı Kart</th>
                                <th scope="col">Antrenör Adı</th>
                                <th scope="col">Veli</th>
                                <th scope="col">Telefon</th>
                                <th scope="col">Adres</th>
                                <th scope="col">Düzenle</th>
                                <th scope="col">Sil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                oyuncuKarti.length > 0
                                ? oyuncuKarti.map((item, index) => {
                                    // //console.log("verı: ", data);
                                    return (
                                        <tr>
                                            {/* <td>{item.id}</td> */}
                                            <td scope="row" data-label="Resim">{item.resim}</td>
                                            <td data-label="Kimlik No">{item.kimlikno}</td>
                                            <td data-label="Uyruk">{item.uyruk}</td>
                                            <td data-label="Şehir">{item.sehir}</td>
                                            <td data-label="Adı">{item.adi}</td>
                                            <td data-label="Soyadı">{item.soyadi}</td>
                                            <td data-label="Doğum Yeri">{item.dogumyeri}</td>
                                            <td data-label="Doğum Tarihi"><Moment format="DD/MM/YYYY">{item.Dogumtarihi}</Moment></td>
                                            <td data-label="Boy">{item.boy}</td>
                                            <td data-label="Kilo">{item.kilo}</td>
                                            <td data-label="Pozisyon">{item.pozisyon}</td>
                                            <td data-label="Forma No">{item.formano}</td>
                                            <td data-label="Takım Adı">{item.takimadi}</td>
                                            <td data-label="Lig">{item.lig}</td>
                                            <td data-label="Önceki Takımı">{item.oncekitakimi}</td>
                                            <td data-label="Oynadığı Maç Sayısı">{item.oynadigimacsayisi}</td>
                                            <td data-label="Atılan Gol Sayısı">{item.atilangolsayisi}</td>
                                            <td data-label="Asist">{item.asist}</td>
                                            <td data-label="Sarı Kart">{item.sarikart}</td>
                                            <td data-label="Kırmızı Kart">{item.kirmizikart}</td>
                                            <td data-label="Hoca Adı">{item.hocaadi}</td>
                                            <td data-label="Veli">{item.veli}</td>
                                            <td data-label="Telefon">{item.telefon}</td>
                                            <td data-label="Adres">{item.adres}</td>
                                            <td data-label="Düzenle"><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td data-label="Sil"><button onClick={() => deleteOyuncuKartiFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
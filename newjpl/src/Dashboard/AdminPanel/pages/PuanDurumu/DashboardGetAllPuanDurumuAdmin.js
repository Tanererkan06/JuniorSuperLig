import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPuanDurumu, getAllPublishedPuanDurumu, deletePuanDurumu, deleteAllPuanDurumu } from '../../../../redux-new/actions/puanDurumu';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import DropdownList from "react-widgets/DropdownList";

import CreatePuanDurumu from './CreatePuanDurumu';
import UpdatePuanDurumu from './UpdatePuanDurumu';
import '../../../responsive-table.css';
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
  

export default function DashboardGetAllPuanDurumu() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();

    const puanDurumu = useSelector(state => state.puanDurumu); 
    const sehirler = useSelector(state => state.sehir);
    const ligler = useSelector(state => state.ligler);

    const [sehirAdi, setSehirAdi] = useState([]);
    const [ligAdi, setLigAdi] = useState([]);

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
        dispatch(getAllSehir());
        dispatch(getAllLigler());
    })


    // Fonksiyon tanımlamaları
     const getData =  async () => {
        await dispatch(getAllPuanDurumu());
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedPuanDurumu());
    }

    const sehirFunction = (value) => {
        //console.log(value.sehiradi);
        setSehirAdi(value.sehiradi)
      }

      const liglerFunction = (value) => {
        //console.log(value.ligadi);
        setLigAdi(value.ligadi)
      }

    const denemeLigi = "U11";

    const deletePuanDurumuFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deletePuanDurumu({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllPuanDurumuFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllPuanDurumu());
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

    function checkLig(lig, sehir) {
        return lig == ligAdi && sehir == sehirAdi;
    }

    let finalTable = puanDurumu.filter((item) => checkLig(item.ligadi, item.sehir));

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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Puan Durumu Ekle</h2>
                        <CreatePuanDurumu close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Puan Durumunu Düzenle</h2>
                        <UpdatePuanDurumu close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div" style={{ marginLeft: '10px'}}>
                    <DropdownList
                        data={sehirler}
                        dataKey='id'
                        textField='sehiradi'
                        defaultValue={"Şehir Seçiniz"}
                        onChange={(value) => { sehirFunction(value)}}
                    />
                        <DropdownList
                        data={ligler}
                        dataKey='id'
                        textField='ligadi'
                        defaultValue={"Lig Seçiniz"}
                        onChange={(value) => { liglerFunction(value)}}
                    />
                    {/* <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button> */}
                    {/*  <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */}
                    {/* <button onClick={() => deleteAllPuanDurumuFunc()} className="listele-button listele-button-danger">Tümünü Sil</button> */}
                </div>
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                    <table className="fixResponsiveTable">
                        <thead>
                            <tr>
                                <th scope="col">Sezon</th>
                                <th scope="col">Şehir</th>
                                <th scope="col">Lig</th>
                                <th scope="col">Lig Adı</th>
                                <th scope="col">Takım Adı</th>
                                <th scope="col">Oynanan Oyun</th>
                                <th scope="col">Galibiyet</th>
                                <th scope="col">Mağlubiyet</th>
                                <th scope="col">Beraberlik</th>
                                <th scope="col">Attığı Gol</th>
                                <th scope="col">Yediği Gol</th>
                                <th scope="col">Averaj</th>
                                <th scope="col">Puan</th>
                                {/* <th>Düzenle</th> */}
                                {/* <th>Sil</th> */}
                            </tr>
                            </thead>
                            <tbody>
                            {
                                puanDurumu.length > 0
                                // ? puanDurumu.map((item, index) => {
                                ? finalTable.map((item, index) => {
                                    // //console.log("verı: ", finalTable);
                                    return (
                                        <tr>
                                            <td scope="row" data-label="Sezon">{item.sezon}</td>
                                            <td data-label="Şehir">{item.sehir}</td>
                                            <td data-label="Lig">{item.lig}</td>
                                            <td data-label="Lig Adı">{item.ligadi}</td>
                                            <td data-label="Takım Adı">{item.takimadi}</td>
                                            <td data-label="Oynanan Oyun">{item.oynananoyun}</td>
                                            <td data-label="Galibiyet">{item.galibiyet}</td>
                                            <td data-label="Mağlubiyet">{item.malubiyet}</td>
                                            <td data-label="Beraberlik">{item.beraberlik}</td>
                                            <td data-label="Attığı Gol">{item.attigigol}</td>
                                            <td data-label="Yediği Gol">{item.yedigigol}</td>
                                            <td data-label="Averaj">{item.avaraj}</td>
                                            <td data-label="Puan">{item.puan}</td>
                                            {/* <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td> */}
                                            {/* <td><button onClick={() => deletePuanDurumuFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td> */}
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
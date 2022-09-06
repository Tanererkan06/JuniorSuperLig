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
        console.log(value.sehiradi);
        setSehirAdi(value.sehiradi)
      }

      const liglerFunction = (value) => {
        console.log(value.ligadi);
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
    
    let denemeLig = "U11";
    let denemeSehir = "Istanbul";

    // function checkLig(lig, sehir) {
    //     return lig == denemeLig && sehir == denemeSehir;
    // }

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
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    {/* <button onClick={() => deleteAllPuanDurumuFunc()} className="listele-button listele-button-danger">Tümünü Sil</button> */}
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                <th>Sezon</th>
                                <th>Şehir</th>
                                <th>Lig</th>
                                <th>Lig Adı</th>
                                <th>Takım Adı</th>
                                <th>Oynanan Oyun</th>
                                <th>Galibiyet</th>
                                <th>Mağlubiyet</th>
                                <th>Beraberlik</th>
                                <th>Attığı Gol</th>
                                <th>Yediği Gol</th>
                                <th>Averaj</th>
                                <th>Puan</th>
                                {/* <th>Düzenle</th> */}
                                {/* <th>Sil</th> */}
                            </tr>
                            {
                                puanDurumu.length > 0
                                // ? puanDurumu.map((item, index) => {
                                ? finalTable.map((item, index) => {
                                    // console.log("verı: ", finalTable);
                                    return (
                                        <tr>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.sezon}</td>
                                            <td>{item.sehir}</td>
                                            <td>{item.lig}</td>
                                            <td>{item.ligadi}</td>
                                            <td>{item.takimadi}</td>
                                            <td>{item.oynananoyun}</td>
                                            <td>{item.galibiyet}</td>
                                            <td>{item.malubiyet}</td>
                                            <td>{item.beraberlik}</td>
                                            <td>{item.attigigol}</td>
                                            <td>{item.yedigigol}</td>
                                            <td>{item.avaraj}</td>
                                            <td>{item.puan}</td>
                                            {/* <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td> */}
                                            {/* <td><button onClick={() => deletePuanDurumuFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td> */}
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
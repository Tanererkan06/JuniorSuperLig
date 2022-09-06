import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSehir, getAllPublishedSehir, deleteSehir, deleteAllSehir } from '../../../../redux-new/actions/sehir';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import CreateSehir from './CreateSehir';
import UpdateSehir from './UpdateSehir';
import DropdownList from "react-widgets/DropdownList";
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
  

export default function DashboardGetAllSehir() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const sehir = useSelector(state => state.sehir);

    const takimlarArray = [];
    const liglerArray = [];

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
    } , []);

    // Fonksiyon tanımlamaları
     const getData =  async () => {
        await dispatch(getAllSehir()); 
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedSehir());
    }

    const deleteSehirFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteSehir({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllSehirFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllSehir());
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yeni Şehir Ekle</h2>
                        <CreateSehir close={closeCreateModal}/>
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
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Şehiri Düzenle</h2>
                        <UpdateSehir close={closeUpdateModal} id={gonderId} />
                    </Modal>
                </div>
                
                <div className="listele-div">
                    <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button>
                    <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button>
                    <button onClick={() => deleteAllSehirFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Şehir Adı</th>
                                <th>Ligler</th>
                                <th>Takımlar</th>
                                {/* <th>Published</th> */}
                                <th>Düzenle</th>
                                <th>Sil</th>
                            </tr>
                            {
                                sehir.length > 0
                                ? sehir.map((item, index) => {
                                    // console.log("verı: ", data);
                                    return (
                                        <tr>
                                            <td>{item.sehiradi}</td>
                                            <td>
                                                <DropdownList
                                                    data={item.ligler}
                                                    dataKey='id'
                                                    textField='ligadi'
                                                    defaultValue={item.ligler[0]}
                                                />
                                            </td>
                                            <td>
                                                <DropdownList
                                                    data={item.takimlar}
                                                    dataKey='id'
                                                    textField='adi'
                                                    defaultValue={item.takimlar[0]}
                                                />
                                            </td>
                                            {/* <td>{item.ligler}</td> */}
                                            {/* <td>{item.takimlar}</td> */}
                                            {/* {item.published ? <td>True</td> : <td>False</td>} */}
                                            <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td>
                                            <td><button onClick={() => deleteSehirFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
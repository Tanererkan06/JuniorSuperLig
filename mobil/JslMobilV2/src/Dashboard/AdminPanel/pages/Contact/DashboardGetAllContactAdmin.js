import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllContact, getAllPublishedContact, deleteContact, deleteAllContact } from '../../../../redux-new/actions/contact';
import { ToastContainer, toast } from 'react-toastify';
import AuthService from "../../../../services-socket/auth.service";
import '../table.css';
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
  

export default function DashboardGetAllContact() {
    // Değişken tanımlamaları
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contact);
    const currentUser = AuthService.getCurrentUser();

    // const [gonderId, setGonderId] = useState(0);
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
        dispatch(getAllContact());
    } , []);

    // Fonksiyon tanımlamaları
     const getData =  async () => {
        await dispatch(getAllContact()); 
    }

    const publishedGetData = async () => {
        await dispatch(getAllPublishedContact());
    }

    const deleteContactFunc = (id) => {
     if (window.confirm('Gerçekten bu veriyi silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteContact({ id }));
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }
    }

    const deleteAllContactFunc = () => {
        if (window.confirm('Gerçekten tüm verileri silmek istiyor musunuz?')) {
            notify2();
            setTimeout(() => {
                dispatch(deleteAllContact());
                window.location.reload(false);
            }, 4500);
          } else {
            return false;
          }   
    }

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />


            <div className='dashboard-body'>
                <div className="listele-div">
                    {/* {/*  <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button>
                    <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */} */}
                    <button onClick={() => deleteAllContactFunc()} className="listele-button listele-button-danger">Tümünü Sil</button>
                </div>
                <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                        <table className="fixResponsiveTable">
                            <thead>
                                <tr>
                                    <th scope="col">Şehir</th>
                                    <th scope="col">İsim</th>
                                    <th scope="col">Telefon</th>
                                    <th scope="col">E-posta</th>
                                    <th scope="col">Konu</th>
                                    <th scope="col">Mesaj</th>
                                    <th scope="col">Sil</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                contact.length > 0
                                ? contact.filter(item => item.sehir === currentUser.sehir).map((item, index) => {
                                    return (
                                        <tr>
                                            <td scope="row" data-label="Şehir">{item.sehir}</td>
                                            <td data-label="İsim">{item.isim}</td>
                                            <td data-label="Telefon">{item.telefon}</td>
                                            <td data-label="E-Posta">{item.eposta}</td>
                                            <td data-label="Konu">{item.konu}</td>
                                            <td data-label="Mesaj">{item.mesaj}</td>
                                            {/* <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td> */}
                                            <td><button onClick={() => deleteContactFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td>
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
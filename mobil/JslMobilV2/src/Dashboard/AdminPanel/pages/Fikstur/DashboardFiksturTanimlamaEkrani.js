import { useEffect, useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllFikstur } from '../../../../redux-new/actions/fikstur';
import DropdownList from "react-widgets/DropdownList";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import Moment from 'react-moment';
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../table.css';

function DashboardFiksturTanimlamaEkrani(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();
  const navigate = useHistory();
  const fiksturler = useSelector(state => state.fikstur);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllFikstur());
    }, []);


  return (
    <>
    <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />


          
          <div className='dashboard-body'>
        <div className="listele-div">
                    {/* <button onClick={openCreateModal} className="listele-button listele-button-success">Ekle</button> */}
                    {/* <button onClick={() => getData()} className="listele-button listele-button-secondary">Hepsini  Getir</button> */}
                    {/* <button onClick={() => publishedGetData()} className="listele-button listele-button-secondary">Published Olanları Getir</button> */}
                    {/* <button onClick={() => deleteAllAntrenorHocaFunc()} className="listele-button listele-button-danger">Tümünü Sil</button> */}
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                <th>Şehir</th>
                                <th>Lig ID</th>
                                <th>Takımlar</th>
                                <th>Başlangıç Tarihi</th>
                                <th>Bitiş Tarihi</th>
                                {/* <th>Düzenle</th> */}
                                {/* <th>Sil</th> */}
                            </tr>
                            {
                                fiksturler.length > 0
                                ? fiksturler.map((item, index) => {
                                    // //console.log("verı: ", data);
                                    return (
                                        <tr style={{ height: '500px', marginTop: '-50' }}>
                                            <td>{item.sehir}</td>
                                            <td>{item.ligid}</td>
                                            <td>
                                                <DropdownList
                                                    data={item.takimlar}
                                                    dataKey='id'
                                                    textField='adi'
                                                    defaultValue={item.takimlar[0]}
                                                />
                                            </td>
                                            <td><Moment format="DD/MM/YYYY">{item.baslangictarihi}</Moment></td>
                                            <td><Moment format="DD/MM/YYYY">{item.bitistarihi}</Moment></td>
                                            {/* <td><button className="listele-button listele-button-primary" onClick={() => editData(item.id)}>Düzenle</button></td> */}
                                            {/* <td><button onClick={() => deleteAntrenorHocaFunc(item.id)} className="listele-button listele-button-danger">Sil</button></td> */}
                                        </tr>
                                    );
                                })
                                : <div>Yükleniyor...</div>
                            }
                            <ToastContainer />
                        </table>
                    </div>
                </div>
              </div>
            </div>
    </>
    
  )
}

export default DashboardFiksturTanimlamaEkrani
import React from 'react'
import SideBar from '../AdminPanel/components/Sidebar';
import sidebar_menu from '../AdminPanel/constants/sidebar-menu';
import axios from 'axios';
import { useEffect } from 'react';
import AuthService from "../../services-socket/auth.service";
import '../responsive-table.css';

export default function SignupAdminListele() {
    // const BASE_URL = "localhost:8000/api/test/allusers";
    const BASE_URL = "http://localhost:8000/api/test/allusers";
    const [data, setData] = React.useState([]);
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        axios.get(BASE_URL).then(response => {
            setData(response.data);
        })
    }, [])

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
                <div className="listele-div">
                    {/* <button className="listele-button listele-button-success">Tümünü Kaydet</button> */}
                    {/* <button className="listele-button listele-button-danger">Tümünü sil</button> */}
                </div>
                    <div style={{ marginTop: '30px', marginLeft: '10px', marginRight: '10px' }}>
                        <table className="fixResponsiveTable">
                            <thead>
                                <tr>
                                    <th scope="col">İsim</th>
                                    <th scope="col">Telefon</th>
                                    <th scope="col">Şehir</th>
                                    <th scope="col">Kullanıcı Adı</th>
                                    <th scope="col">E-posta</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                data.length > 0
                                // ? data.filter(item => item.sehir === currentUser.sehir).map((item, index) => {
                                ? data.map((item, index) => {
                                    return (
                                            <tr>
                                                <td scope="row" data-label="İsim">{item.isim}</td>
                                                <td data-label="Telefon">{item.telefon}</td>
                                                <td data-label="Şehir">{item.sehir}</td>
                                                <td data-label="Kullanıcı Adı">{item.username}</td>
                                                <td data-label="Email">{item.email}</td>
                                            </tr>
                                        
                                    );
                                })
                                :  <div>Yükleniyor...</div>
                              }            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

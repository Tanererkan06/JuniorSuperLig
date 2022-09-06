import React from 'react'
import SideBar from '../AdminPanel/components/Sidebar';
import sidebar_menu from '../AdminPanel/constants/sidebar-menu';
import axios from 'axios';

export default function SignupAdminListele() {
    const BASE_URL = "http://localhost:8000/api/test/all";
    const [data, setData] = React.useState([]);

    axios.get(BASE_URL).then(response => {
        setData(response.data);
    })

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
                <div className="listele-div">
                    <button className="listele-button listele-button-success">Tümünü Kaydet</button>
                    <button className="listele-button listele-button-danger">Tümünü sil</button>
                </div>
                <div className="listele-display-table">
                    <div className="listele-width-95">
                        <table className="listele-table">
                            <tr>
                                <th>Kullanıcı Adı</th>
                                <th>E-posta</th>
                                <th>Password</th>
                                {/* <th>Telefon</th> */}
                                {/* <th>Üyelik Tarihi</th> */}
                                {/* <th>Üyelik Türü</th> */}
                                {/* <th>Onaylanma Durumu</th> */}
                                {/* <th>Onayla</th> */}
                                {/* <th>İptal Et</th> */}
                                {/* <th>Kaydet</th> */}
                            </tr>
                            {
                                data.length > 0
                                ? data.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                        </tr>
                                    );
                                })
                                :  <div>Yükleniyor...</div>
                              }
                                {/* <td>08/08/2022</td> */}
                                {/* <td>Veli</td> */}
                                {/* <td>Onay Bekliyor</td> */}
                                {/* <td><input placeholder="User Name" type="radio" value="onayla" /></td> */}
                                {/* <td><input type="radio" id="true" name="published" placeholder="Onayla" value="true" /></td> */}
                                {/* <td><input type="radio" id="false" name="published" placeholder="Iptal Et" value="false" /></td> */}
                                {/* <td><input placeholder="User Name" type="radio" value="onaylama" /></td> */}
                                {/* <td><button className="listele-button listele-button-danger">Kaydet</button></td> */}                  
                        </table>
                    </div></div>
            </div></div>
    )
}

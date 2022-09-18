import React from 'react'
/* import { Icon, Label, Menu, Table } from 'semantic-ui-react';  */
import Table from 'react-bootstrap/Table';
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
export default function DashboardOyunLive() {
    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
                <div className="puandurumu col-lg-12 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 clearfix" style={{ marginTop: "30px" }}>
                    <h4 className="border">Canlı Sonuçlar</h4>
                    <table className="fixResponsiveTable">
                        <thead>
                            <tr >
                                <th scope="col">M.Saati</th>
                                <th scope="col">Takım A</th>
                                <th scope="col">Skor</th>
                                <th scope="col">Takım B</th>
                                <th scope="col">IY</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td >21:00</td>
                                <td >Takım A</td>
                                <td >37'<br />0:1</td>
                                <td >Takım B</td>
                                <td >IY</td>
                            </tr>
                            <tr>
                                <td >19:45</td>
                                <td >Takım A</td>
                                <td >2:0</td>
                                <td >Takım B</td>
                                <td >1:0</td>
                            </tr>
                            <tr >
                                <td >M.Saati</td>
                                <td >Takım A</td>
                                <td >Skor</td>
                                <td >Takım B</td>
                                <td >IY</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div></div>
    )
}

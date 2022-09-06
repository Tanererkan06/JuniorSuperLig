import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
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
                    <Table celled style={{ marginTop: "50px" }}>
                        <Table.Header><Table.Row style={{ display: "table" }}>
                            <Table.HeaderCell className='canli-mac-saat-h' style={{ textAlign: "center" }}>M.Saati</Table.HeaderCell>
                            <Table.HeaderCell className='canli-mac-takim-h' style={{ textAlign: "center" }}>Takım A</Table.HeaderCell>
                            <Table.HeaderCell className='canli-skor-h' style={{ textAlign: "center" }}>Skor</Table.HeaderCell>
                            <Table.HeaderCell className='canli-mac-takim-h' style={{ textAlign: "center" }}>Takım B</Table.HeaderCell>
                            <Table.HeaderCell className='canli-mac-iy-h' style={{ textAlign: "center" }}>IY</Table.HeaderCell>

                        </Table.Row></Table.Header>
                        <Table.Body>
                            <Table.Row style={{ display: "table" }}>
                                <Table.Cell className='canli-mac-saat' style={{ textAlign: "center" }}>21:00</Table.Cell>
                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>Takım A</Table.Cell>
                                <Table.Cell className='canli-skor' style={{ textAlign: "center" }}>37'<br/>0:1</Table.Cell>
                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>Takım B</Table.Cell>
                                <Table.Cell className='canli-mac-iy' style={{ textAlign: "center" }}>IY</Table.Cell>
                            </Table.Row>
                            <Table.Row style={{ display: "table" }}>
                                <Table.Cell className='canli-mac-saat' style={{ textAlign: "center" }}>19:45</Table.Cell>
                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>Takım A</Table.Cell>
                                <Table.Cell className='canli-skor' style={{ textAlign: "center" }}>2:0</Table.Cell>
                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>Takım B</Table.Cell>
                                <Table.Cell className='canli-mac-iy' style={{ textAlign: "center" }}>1:0</Table.Cell>
                            </Table.Row>
                            <Table.Row style={{ display: "table" }}>
                                <Table.Cell className='canli-mac-saat' style={{ textAlign: "center" }}>M.Saati</Table.Cell>
                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>Takım A</Table.Cell>
                                <Table.Cell className='canli-skor' style={{ textAlign: "center" }}>Skor</Table.Cell>
                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>Takım B</Table.Cell>
                                <Table.Cell className='canli-mac-iy' style={{ textAlign: "center" }}>IY</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div></div>
    )
}

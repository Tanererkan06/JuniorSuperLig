import React from 'react'
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import '../../../Form.css';
import logo from '../../../../assets/img/logo-junior.png'
import { IoIdCard } from 'react-icons/io5';
import { FaFutbol,FaChevronDown,FaChevronUp } from 'react-icons/fa';
import { BiFootball } from "react-icons/bi";
/* import { Icon, Label, Menu, Table } from 'semantic-ui-react'; */
import Table from 'react-bootstrap/Table';
export default function DashboardGozlemciOyunLive() {
    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
                <form className='formcss-canli'>
                <div className='div3'>
                <label className="labelcss-skor-canli" htmlFor='id'>20'</label>
                <label className="labelcss-skor-canli" htmlFor='id'>0:0</label>
                </div>
                    <div className='div3'>
                        <div className='col-xs-4'>
                            <img className="img-center" src={logo} alt="logo" />
                            <label className="labelcss-atanan-canli" htmlFor='id'>A Takımı</label>
                        </div>
                        <div className='div2 col-xs-4'>
                        <label className="labelcss-atanan-canli" htmlFor='id'>IY</label>
                        <label className="labelcss-atanan-canli" htmlFor='id'>1:0</label>
                        <label className="labelcss-atanan-canli" htmlFor='id'>MS</label>
                        <label className="labelcss-atanan-canli" htmlFor='id'>---</label>
                            <button className='buttoncss-canli'>Bitir</button>
                            <button className='buttoncss-canli'>İY Bitir</button>
                            <button className='buttoncss-canli' >Durdur</button>
                            <button className='buttoncss-canli' >Ertele</button>
                            <div className='div2'><label className="labelcss-canli" htmlFor="kimlikNo" style={{ marginLeft: "20px" }}>Zaman Ekle</label>
                                <input className="inputcss-canli"></input></div>
                            <button className='buttoncss-canli' style={{ width: "50px", marginTop: '-3px' }}>+</button></div>



                        <div className='col-xs-4'>
                            <img className="img-center" src={logo} alt="logo" />
                            <label className="labelcss-atanan-canli" htmlFor='id'>B Takımı</label>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <table style={{ width: "400px" }}>
                                    <tr style={{height:"46px"}}>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" /></td>
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" >Ali Topçu</label></td>
                                        <td>
                                            <IoIdCard style={{ width: "80px", height: "30px", color: "red" }} />

                                            <IoIdCard style={{ width: "80px", height: "30px", color: "yellow" }} />

                                            <FaFutbol style={{ width: "80px", height: "30px", color: "blue" }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                        </td> */}
                                    </tr>
                                    <tr style={{height:"46px"}}>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" /></td>
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" >Ali Topçu</label></td>
                                        <td>
                                            <IoIdCard style={{ width: "80px", height: "30px", color: "red" }} />

                                            <IoIdCard style={{ width: "80px", height: "30px", color: "yellow" }} />

                                            <FaFutbol style={{ width: "80px", height: "30px", color: "blue" }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                        </td> */}
                                    </tr>
                                    <tr style={{height:"46px"}}>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" /></td>
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" >Ali Topçu</label></td>
                                        <td>
                                            <IoIdCard style={{ width: "80px", height: "30px", color: "red" }} />

                                            <IoIdCard style={{ width: "80px", height: "30px", color: "yellow" }} />

                                            <FaFutbol style={{ width: "80px", height: "30px", color: "blue" }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                        </td> */}
                                    </tr>
                                    <tr style={{height:"46px"}}>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" /></td>
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" >Ali Topçu</label></td>
                                        <td>
                                            <IoIdCard style={{ width: "80px", height: "30px", color: "red" }} />

                                            <IoIdCard style={{ width: "80px", height: "30px", color: "yellow" }} />

                                            <FaFutbol style={{ width: "80px", height: "30px", color: "blue" }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                            <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                        </td> */}
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style={{ width: "400px" }}>
                                    <tr style={{height:"46px"}}>
                                        <td>
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "red",float:"right"  }} />
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "yellow",float:"right"  }} />
                                        <FaFutbol style={{ width: "80px", height: "30px", color: "blue",float:"right"  }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                    </td> */}
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" style={{ float: "right" }}>Ali Topçu</label></td>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" style={{ float: "right" }} /></td>
                                    </tr>
                                    <tr style={{height:"46px"}}>
                                        <td>
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "red",float:"right"  }} />
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "yellow",float:"right"  }} />
                                        <FaFutbol style={{ width: "80px", height: "30px", color: "blue",float:"right"  }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                    </td> */}
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" style={{ float: "right" }}>Ali Topçu</label></td>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" style={{ float: "right" }} /></td>
                                    </tr>
                                    <tr style={{height:"46px"}}>
                                        <td>
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "red",float:"right"  }} />
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "yellow",float:"right"  }} />
                                        <FaFutbol style={{ width: "80px", height: "30px", color: "blue",float:"right"  }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                    </td> */}
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" style={{ float: "right" }}>Ali Topçu</label></td>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" style={{ float: "right" }} /></td>
                                    </tr>
                                    <tr style={{height:"46px"}}>
                                        <td>
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "red",float:"right"  }} />
                                        <IoIdCard style={{ width: "80px", height: "30px", color: "yellow",float:"right"  }} />
                                        <FaFutbol style={{ width: "80px", height: "30px", color: "blue",float:"right"  }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                    </td> */}
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" style={{ float: "right" }}>Ali Topçu</label></td>
                                        <td><img className="img-oyuncu" src={logo} alt="logo" style={{ float: "right" }} /></td>
                                    </tr>
                                </table></td>
                        </tr>
                    </table>
                   


                </form>
                <form className='formcss-canli'>

                <div >
                <Table celled style={{marginTop:"50px"}}>
                    <Table.Body>
                        <Table.Row style={{ display: "table" }}>
                            <Table.Cell className='liveplay-l' >Ali Topçu <BiFootball/> </Table.Cell>
                            <Table.Cell className='liveplay-time' >13'</Table.Cell>
                            <Table.Cell className='liveplay-r' ></Table.Cell>
                        </Table.Row>
                        <Table.Row style={{ display: "table" }}>
                            <Table.Cell className='liveplay-l' ></Table.Cell>
                            <Table.Cell className='liveplay-time' >40'</Table.Cell>
                            <Table.Cell className='liveplay-r' ><BiFootball/>Tarık Uçan</Table.Cell>
                        </Table.Row>
                        <Table.Row style={{ display: "table" }}>
                            <Table.Cell className='liveplay-l' ></Table.Cell>
                            <Table.Cell className='liveplay-time' >60'</Table.Cell>
                            <Table.Cell className='liveplay-r' > <BiFootball/> Can Yalçın</Table.Cell>
                        </Table.Row>
                        <Table.Row style={{ display: "table" }}>
                            <Table.Cell className='liveplay-l' ><FaChevronDown/> Can Gürbüz / <FaChevronUp/> Ahmet Dal </Table.Cell>
                            <Table.Cell className='liveplay-time' >60'</Table.Cell>
                            <Table.Cell className='liveplay-r' > <FaChevronDown/> Melih Fırat / <FaChevronUp/> Kadir Seven </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table></div>
                </form>
            </div>

        </div>
    )
}

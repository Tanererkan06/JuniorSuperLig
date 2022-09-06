import { useState, useEffect } from 'react'
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import '../../../Form.css';
import logo from '../../../../assets/img/logo-junior.png'
import { IoIdCard } from 'react-icons/io5';
import { FaFutbol,FaChevronDown,FaChevronUp } from 'react-icons/fa';
import { BiFootball } from "react-icons/bi";
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { getAllOyun } from '../../../../redux-new/actions/oyun';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { useSelector, useDispatch } from 'react-redux';
import AuthService from "../../../../services-socket/auth.service";

export default function DashboardGozlemciOyunLive() {
    const currentUser = AuthService.getCurrentUser();
    const oyunlar = useSelector(state => state.oyun);
    const takimlar = useSelector(state => state.takim);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOyun());
        dispatch(getAllTakim());
    }, [])

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
                {
                    oyunlar.length > 0
                    ? oyunlar.filter(test => test.gozlemciid == currentUser.id).map((oyun, index) => {
                        return (
                            <>
                            <form className='formcss-canli'>
                <div className='div3'>
                <label className="labelcss-skor-canli" htmlFor='id'>20'</label>
                <label className="labelcss-skor-canli" htmlFor='id'>0:0</label>
                </div>
                    <div className='div3'>
                        <div className='col-xs-4'>
                        {
                            takimlar.length > 0
                            ? takimlar.filter(test2 => test2.id == oyun.takimbirid).map((takim1, index) => {
                                return (
                                    <img className="img-center" src={takim1.logo} alt="logo" />
                                )
                            })
                            : <div>Yükleniyor..</div>
                        }
                            
                            <label className="labelcss-atanan-canli" htmlFor='id'>{oyun.takimbiradi}</label>
                        </div>
                        <div className='div2 col-xs-4'>
                        <label className="labelcss-atanan-canli" htmlFor='id'>IY</label>
                        <label className="labelcss-atanan-canli" htmlFor='id'>{oyun.ilkyarisonucu}</label>
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
                        {
                            takimlar.length > 0
                            ? takimlar.filter(test3 => test3.id == oyun.takimikiid).map((takim2, index) => {
                                return (
                                    <img className="img-center" src={takim2.logo} alt="logo" />
                                )
                            })
                            : <div>Yükleniyor..</div>
                        }
                            <label className="labelcss-atanan-canli" htmlFor='id'>{oyun.takimikiadi}</label>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <table style={{ width: "400px" }}>
                    {
                        takimlar.length > 0
                        ? takimlar.filter(test4 => test4.id == oyun.takimbirid).map((takim3, index) => {
                            return (
                                <>
                                {
                                    takim3.oyuncular.map((oyuncu, index) => {
                                        return (
                                            <tr style={{height:"46px"}}>
                                                <td><img className="img-oyuncu" src={oyuncu.resim} alt="logo" /></td>
                                                <td><label className="labelcss-canli" htmlFor="kimlikNo" >{oyuncu.adi} {oyuncu.soyadi}</label></td>
                                                <td>
                                                    <IoIdCard style={{ width: "60px", height: "30px", color: "red" }} />

                                                    <IoIdCard style={{ width: "60px", height: "30px", color: "yellow" }} />

                                                    <FaFutbol style={{ width: "60px", height: "30px", color: "blue" }} />
                                                </td>
                                                {/* <td><button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                                    <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                                    <button className='buttoncss-canli' style={{ width: "20px"}}></button>
                                                </td> */}
                                            </tr>
                                        )
                                    })
                                }
                                </>
                            )
                        }
                        )
                        : <div>Yükleniyor..</div>
                    }
                                </table>
                            </td>
                            <td>
                                <table style={{ width: "400px" }}>
                                {
                        takimlar.length > 0
                        ? takimlar.filter(test5 => test5.id == oyun.takimikiid).map((takim5, index) => {
                            return (
                                <>
                                {
                                    takim5.oyuncular.map((oyuncu, index) => {
                                        return (
                                            <tr style={{height:"46px"}}>
                                        <td>
                                        <IoIdCard style={{ width: "60px", height: "30px", color: "red",float:"right"  }} />
                                        <IoIdCard style={{ width: "60px", height: "30px", color: "yellow",float:"right"  }} />
                                        <FaFutbol style={{ width: "60px", height: "30px", color: "blue",float:"right"  }} />
                                        </td>
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                    </td> */}
                                        <td><label className="labelcss-canli" htmlFor="kimlikNo" style={{ float: "right" }}>{oyuncu.adi}</label></td>
                                        <td><img className="img-oyuncu" src={oyuncu.resim} alt="logo" style={{ float: "right" }} /></td>
                                    </tr>
                                        )
                                    })
                                }
                                </>
                            )
                        }
                        )
                        : <div>Yükleniyor..</div>
                    }
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
                            </>
                        )
                    })
                    : <div>Yükleniyor...</div>
                }
                
            </div>

        </div>
    )
}

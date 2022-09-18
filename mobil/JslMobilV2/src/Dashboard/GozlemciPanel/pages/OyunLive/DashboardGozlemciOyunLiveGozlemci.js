import { useState, useEffect } from 'react'
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
import { getAllOyun } from '../../../../redux-new/actions/oyun';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { useSelector, useDispatch } from 'react-redux';
import AuthService from "../../../../services-socket/auth.service";
import { useParams } from 'react-router';
import OyunLiveService from '../../../../services-socket/OyunLiveService';
import io from "socket.io-client";
const socket = io.connect("localhost:8000");

const _oyunLiveService = new OyunLiveService();

export default function DashboardGozlemciOyunLive() {
    const currentUser = AuthService.getCurrentUser();
    const oyunlar = useSelector(state => state.oyun);
    const takimlar = useSelector(state => state.takim);
    const { id } = useParams();
    const gozcuRoom = useSelector(state => state.gozcuCurrentRoom.gozcuCurrentRoom);

    console.log("GOZCU ROOM:", gozcuRoom);

    // _oyunLiveService.update(payload);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOyun());
        dispatch(getAllTakim());
    }, [])

    const takimBirSariKart = (id) => {
        console.log(id);
        socket.emit("send_message", { id });
    }

    const takimBirKirmiziKart = (id) => {
        console.log(id);

    }

    const takimBirGol = (id) => {
        console.log(id);
    }

    const takimIkiSariKart = (id) => {
        console.log(id);
    }

    const takimIkiKirmiziKart = (id) => {
        console.log(id);
    }

    const takimIkiGol = (id) => {
        console.log(id);
    }

    return (
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />

            <div className='dashboard-body'>
                {
                    oyunlar.filter(test1 => test1.id == id).map((oyun) => {
                        //console.log("OYUN: ", oyun);
                        return (
                            <>
                <form className='formcss-canli'>
                <div className='div3'>
                <label className="labelcss-skor-canli" style={{ marginBottom: '-30px' }} htmlFor='id'>
                </label>
                <label className="labelcss-skor-canli" htmlFor='id'>0:0</label>
                </div>
                    <div className='div3'>
                        <div className='col-xs-4'>
                            {
                                takimlar.filter(test2 => test2._id == oyun.takimbirid).map((takim) => {
                                    //console.log("TAKIM: ", takim);
                                    return (
                                        <>
                                            <img className="img-center" style={{ height: '100px', width: '100px' }} src={takim.logo} alt="logo" />
                                            <label className="labelcss-atanan-canli" htmlFor='id'>{takim.adi}</label>
                                        </> 
                                    )
                                })
                            }
                        </div>
                        <div className='div2 col-xs-4'>
                        <label className="labelcss-atanan-canli" htmlFor='id'>IY</label>
                        <label className="labelcss-atanan-canli" htmlFor='id'>---</label>
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
                                takimlar.filter(test2 => test2._id == oyun.takimikiid).map((takim) => {
                                    //console.log("TAKIM: ", takim);
                                    return (
                                        <>
                                            <img className="img-center" style={{ height: '100px', width: '100px' }} src={takim.logo} alt="logo" />
                                            <label className="labelcss-atanan-canli" htmlFor='id'>{takim.adi}</label>
                                        </> 
                                    )
                                })
                            }
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <table style={{ width: "400px" }}>
                                            <tr style={{height:"46px"}}>
                                                {
                                                    takimlar.filter(test3 => test3._id == oyun.takimbirid).map((takim) => {
                                                        return (
                                                            <>
                                                            {
                                                                takim.oyuncular.map((oyuncu) => {
                                                                    return (
                                                                        <>
                                                                           <td style={{ display: 'flex', marginTop: '10px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                                                <img style={{ width: '55px', height: '55px', borderRadius: '5rem' }} className="img-oyuncu" src={oyuncu.resim} alt="logo" />
                                                                                <label style={{ width: '160px', marginLeft: '10px' }} className="labelcss-canli" htmlFor="isim" >{oyuncu.adi} {oyuncu.soyadi}</label>
                                                                                <IoIdCard style={{ width: "40px", height: "35px", color: "red" }} onClick={() => takimBirKirmiziKart(oyuncu.id)} />
                                                                                <IoIdCard style={{ width: "40px", height: "35px", color: "yellow" }} onClick={() => takimBirSariKart(oyuncu.id)} />
                                                                                <FaFutbol style={{ width: "40px", height: "35px", color: "blue" }} onClick={() => takimBirGol(oyuncu.id)} />
                                                                            </td>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                            </>
                                                        )
                                                    })
                                                }
                                                {/* <td><img className="img-oyuncu" src={oyuncu.resim} alt="logo" /></td> */}
                                                {/* <td><label className="labelcss-canli" htmlFor="kimlikNo" >{oyuncu.adi} {oyuncu.soyadi}</label></td>
                                                <td>
                                                    <IoIdCard style={{ width: "60px", height: "30px", color: "red" }} />

                                                    <IoIdCard style={{ width: "60px", height: "30px", color: "yellow" }} />

                                                    <FaFutbol style={{ width: "60px", height: "30px", color: "blue" }} />
                                                </td> */}
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
                                            {
                                                    takimlar.filter(test4 => test4._id == oyun.takimikiid).map((takim) => {
                                                        return (
                                                            <>
                                                            {
                                                                takim.oyuncular.map((oyuncu) => {
                                                                    return (
                                                                        <>
                                                                           <td style={{ display: 'flex', marginTop: '10px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                                                                <FaFutbol style={{ width: "40px", height: "35px", color: "blue" }} onClick={() => takimIkiGol(oyuncu.id)} />
                                                                                <IoIdCard style={{ width: "40px", height: "35px", color: "yellow" }} onClick={() => takimIkiSariKart(oyuncu.id)} />
                                                                                <IoIdCard style={{ width: "40px", height: "35px", color: "red" }} onClick={() => takimIkiKirmiziKart(oyuncu.id)} />
                                                                                <label style={{ width: '160px', marginLeft: '10px' }} className="labelcss-canli" htmlFor="isim" >{oyuncu.adi} {oyuncu.soyadi}</label>
                                                                                <img style={{ width: '55px', height: '55px', borderRadius: '5rem' }} className="img-oyuncu" src={oyuncu.resim} alt="logo" />
                                                                                
                                                                            </td>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                            </>
                                                        )
                                                    })
                                                }
                                        {/* <td><button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                        <button className='buttoncss-canli' style={{ width: "20px",float:"right"}}></button>
                                    </td> */}
                                        {/* <td><label className="labelcss-canli" htmlFor="kimlikNo" style={{ float: "right" }}>{oyuncu.adi}</label></td> */}
                                        {/* <td><img className="img-oyuncu" src={oyuncu.resim} alt="logo" style={{ float: "right" }} /></td> */}
                                    </tr>
                    </table></td>
                        </tr>
                    </table>
                </form>
                            </>
                        )
                    })
                }

                {/* <form className='formcss-canli'>
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
                </Table>
                </div>
                </form> */}
            </div>
        </div>
    )
}

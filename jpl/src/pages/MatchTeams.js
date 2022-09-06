import { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import { BiFootball } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import TabTeam from './Tab/TabTeam';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyunLive } from '../redux-new/actions/oyunLive'
import moment from 'moment';

export default function MatchTeams() {
    const dispatch = useDispatch();
    const oyunLive = useSelector(state => state.oyunLive); 
  
    useEffect(() => {
      dispatch(getAllOyunLive());
    }, []);

    return (
        <div>
        <Header />
        <Slider />


        <div id="match">
            <div className="container">
                <div className="match-details col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                    {
                        oyunLive.length > 0
                        ? oyunLive.map((item, index) => {
                            return (
                                <>
                                <div className="team text-left">
                                <img src={require("../assets/img/logo-junior.png")} alt="" /><span>{item.takimbiradi}</span>
                                </div>
                                <div className="schedule">
                                    <h1 className="time" style={{marginTop:"-2px",color:"white"}}>1:2</h1>
                                </div>
                                <div className="team right text-right">
                                    <span>{item.takimikiadi}</span>
                                    <img src={require("../assets/img/logo-junior.png")} alt="" />
                                </div>
                                </>
                            )})
                            : <div>Loading...</div>
                    }

                </div>

               <div className="match-formation col-lg-12 col-md-12">
                    <div className="player gk">
                        <div className="caption">GK</div>
                    </div>
                    <div className="player lwb">
                        <div className="caption">LWB</div>
                    </div>
                    <div className="player lcb">
                        <div className="caption">LCB</div>
                    </div>
                    <div className="player cb">
                        <div className="caption">CB</div>
                    </div>
                    <div className="player rcb">
                        <div className="caption">RCB</div>
                    </div>
                    <div className="player rwb">
                        <div className="caption">RWB</div>
                    </div>
                    <div className="player lcm">
                        <div className="caption">LCM</div>
                    </div>
                    <div className="player rcm">
                        <div className="caption">RCM</div>
                    </div>
                    <div className="player ls">
                        <div className="caption">LS</div>
                    </div>
                    <div className="player cf">
                        <div className="caption">CF</div>
                    </div>
                    <div className="player rs">
                        <div className="caption">RS</div>
                    </div>
                </div> 
                <div className='clearfix'/>
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
                        <Table.Row style={{ display: "table" }}>
                            <Table.Cell className='liveplay-l' ><FaChevronDown/></Table.Cell>
                            <Table.Cell className='liveplay-time' >90'</Table.Cell>
                            <Table.Cell className='liveplay-r' > <FaChevronDown/> Melih Fırat / <FaChevronUp/> Kadir Seven </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table></div>

            </div>
        </div>
        <TabTeam/>
        <Footer />

    </div>
    )
}

import React, { useState } from "react";
import { Table } from 'semantic-ui-react';
import { TabManager } from "./TabManeger";
 import "../../assets/tab/tab.style.css";

const TABS = [
    { label: "A Takımı", value: 1 },
    { label: "B Takımı", value: 2 },
];
export default function TabTeam() {
    const [activeTab, handleTab] = useState(1);
    return (
        <div className="App">
            <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
            <div className="tabb-content">
                {" "}
                <div> {activeTab}

                    <Table celled style={{ marginTop: "50px" }}>
                        <Table.Body>
                            <Table.Row style={{ display: "table" }}>
                                <Table.Cell className='liveplay-l' >
                                    <Table celled>
                                        <Table.Body>
                                            <Table.Row style={{ display: "table" }}>
                                                <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            </Table.Row>
                                            <Table.Row style={{ display: "table" }}>
                                                <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            </Table.Row>
                                            <Table.Row style={{ display: "table" }}>
                                                <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            </Table.Row>
                                            <Table.Row style={{ display: "table" }}>
                                                <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            </Table.Row>
                                            <Table.Row style={{ display: "table" }}>
                                                <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            </Table.Row>
                                            <Table.Row style={{ display: "table" }}>
                                                <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table> </Table.Cell>
                                <Table.Cell className='liveplay-l' > 
                                   
                                    <div className='team-players'>
                                        <div className="profile-single col-xs-12">
                                        <h3 className="col-xs-6">John Doe</h3>
                                            <div className="big-thumbnail col-xs-6">
                                                <img src={require("../../assets/img/avatar.jpg")}
                                                    alt="" />
                                            </div>
                                            <div className="player-description">
                                                
                                                <ul className="player-details pull-left custom-list">
                                                    <li><h5>Position:</h5><span>Forward</span></li>
                                                    <li><h5>Height:</h5><span>5’8” (1.75M)</span></li>
                                                    <li><h5>Weight:</h5><span>141 lbs (64 kg)</span></li>
                                                </ul>
                                                <ul className="player-details pull-right custom-list">
                                                    <li><h5>Age:</h5><span>22</span></li>
                                                    <li><h5>DOB:</h5><span>February 5, 1992</span></li>
                                                    <li><h5>POB:</h5><span>Argentina</span></li>
                                                </ul>
                                                {/* <a href="#" className="button read_more"><span>Read More</span><i className="fa fa-arrow-circle-right"></i></a> */}
                                            </div>
                                        </div></div>
                                 {/*    <Table.Body>
                                        <Table.Row style={{ display: "table" }}>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                        </Table.Row>
                                        <Table.Row style={{ display: "table" }}>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                        </Table.Row>
                                        <Table.Row style={{ display: "table" }}>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                        </Table.Row>
                                        <Table.Row style={{ display: "table" }}>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                        </Table.Row>
                                        <Table.Row style={{ display: "table" }}>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                        </Table.Row>
                                        <Table.Row style={{ display: "table" }}>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                            <Table.Cell className='liveplay-l' >Ali Topçu  </Table.Cell>
                                        </Table.Row>
                                    </Table.Body> */}
                               </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>


                </div>
            </div>
        </div>
    );
}

import { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import { BiFootball } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import TableFikstur from './Fikstur';
import PuanDurumu from './PuanDurumu';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyunLive } from '../redux-new/actions/oyunLive'
import moment from 'moment';
import { getAllSehir } from '../redux-new/actions/sehir';
import { setCurrentLig } from '../redux-new/slices/currentLig';

export default function Match() {
    const dispatch = useDispatch();
    const oyunLive = useSelector(state => state.oyunLive);

    const sehirler = useSelector(state => state.sehir);
    const activeSehir = useSelector(state => state.currentSehir);

    const setLig = (ligadi) => {
        dispatch(setCurrentLig(ligadi));
      }

    useEffect(() => {
        dispatch(getAllOyunLive());
        dispatch(getAllSehir());
    }, []);

    function checkLig(sehir) {
        return sehir == activeSehir.currentSehir;
      }

      let finalTable = sehirler.filter((item) => checkLig(item.sehiradi));

    return (
        <div className='match'>
            <Header />
            <Slider />
            <div className="clearfix"></div>
            <div className="clearfix"></div>
            <div className="clearfix"></div>
            <div className="clearfix"></div>
            <div className="tab-content" style={{ marginTop: "50px" }}>
                <div className="container">
                    <div className="tab-pane fade active in" id="matches">
                        <div class="active-team-tabs">
                            <ul className="nav nav-tabs list-inline experience" role="tablist">
                            {
                                finalTable.length > 0 
                                ? finalTable[0].ligler.map((sehir, index) => {
                                return (
                                    <li onClick={() => setLig(sehir.ligadi)}>
                                    {/* <input type="radio" name="active_tabs" id={`btn-${index}`} class={`btnn-${index}`} checked={sehir.ligadi === 'U8' ? 'checked' : ''} /> */}
                                    <input type="radio" name="active_tabs" id={`btn-${index}`} class={`btnn-${index}`} checked />
                                    <label for={`btn-${index}`} class="btnn">{sehir.ligadi}</label>
                                    </li>
                                )}
                                )
                                : <div>Yükleniyor...</div>
                            }
                                {/* <li>
                                    <input type="radio" name="active_tabs" id="btn-1" class="btnn-1" checked />
                                    <label for="btn-1" class="btnn">U9</label>
                                </li>
                                <li>
                                    <input type="radio" name="active_tabs" id="btn-2" class="btnn-2" />
                                    <label for="btn-2" class="btnn" > U10</label>
                                </li>
                                <li>
                                    <input type="radio" name="active_tabs" id="btn-2" class="btnn-2" />
                                    <label for="btn-2" class="btnn" > U11</label>
                                </li> */}

                            </ul>
                        </div>
                        <div className="tab-pane fade active in" id="seniors-matches">
                            <div className="upcoming col-lg-6 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 clearfix">
                                <h4 className="border">Upcoming Matches</h4>
                                <TableFikstur />
                            </div>
                            <div className="clearfix"></div>
                            <div className="clearfix"></div>
                            <div className="clearfix"></div>
                            <div className="clearfix"></div>
                            <div className="puandurumu col-lg-12 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 clearfix" style={{ marginTop: "30px" }}>
                                <h4 className="border">Puan Durumu</h4>
                                <PuanDurumu />
                            </div>
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
                                        {
                                            oyunLive.length > 0
                                                ? oyunLive.map((item, index) => {
                                                    return (
                                                        <>
                                                            <Table.Row style={{ display: "table" }} key={index}>
                                                                <Table.Cell className='canli-mac-saat' style={{ textAlign: "center" }}>{moment(item.macsaati).toISOString().slice(0, 10)}</Table.Cell>
                                                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>{item.takimbiradi}</Table.Cell>
                                                                <Table.Cell className='canli-skor' style={{ textAlign: "center" }}>{item.macsonu ? item.macsonu : '1-0'}</Table.Cell>
                                                                <Table.Cell className='canli-mac-takim' style={{ textAlign: "center" }}>{item.takimikiadi}</Table.Cell>
                                                                <Table.Cell className='canli-mac-iy' style={{ textAlign: "center" }}>{item.ilkyarisonucu ? item.ilkyarisonucu : '0-0'}</Table.Cell>
                                                            </Table.Row>
                                                        </>
                                                    )
                                                })
                                                : <div>Loading...</div>
                                        }

                                    </Table.Body>
                                </Table>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="juvenile-matches">

                        </div>

                        <div className="tab-pane fade" id="veterans-matches">

                        </div>


                    </div>




                </div>
            </div>
            <Footer />

        </div>
    )
}

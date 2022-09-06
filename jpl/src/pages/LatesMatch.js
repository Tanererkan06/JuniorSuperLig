import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import '../assets/css/fikstur.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyunLive } from '../redux-new/actions/oyunLive'
import moment from 'moment';

function TableLatesMatch() {
    const dispatch = useDispatch();
    const oyunLive = useSelector(state => state.oyunLive); 
  
    useEffect(() => {
      dispatch(getAllOyunLive());
    }, []);

    // console.log("LENGTH: ", oyunLive[oyunLive.length-1]);
  return (
    <div>
        <Table celled>
        <Table.Body>
            <Table.Row style={{ display: "table" }}>
                {
                    oyunLive.length > 0
                    ?
                    <>
                    <Table.Cell className='fikstur-sira-l'> <img src={require("../assets/img/logo-junior.png")} alt="" /></Table.Cell>
                    <Table.Cell className='fikstur-bilgi'>{oyunLive[oyunLive.length-1].macsonu ? oyunLive[oyunLive.length-1].macsonu : '4-2'}</Table.Cell>
                    <Table.Cell className='fikstur-sira-r'> <img src={require("../assets/img/logo-junior.png")} alt="" /></Table.Cell>
                    </>
                    : <div>Loading...</div>
                }
                
            </Table.Row>
        </Table.Body>

        <Table.Footer>
            <Table.Row style={{ display: "table" }}>
                {
                    oyunLive.length > 0
                    ? 
                        <>
                            <Table.Cell className='lates-sıra-l'>{oyunLive[oyunLive.length-1].takimbiradi}</Table.Cell>
                            <Table.Cell className='fikstur-bilgi'>{oyunLive[oyunLive.length-1].yer}<br></br>{moment(oyunLive[oyunLive.length-1].mactarihi).toISOString().slice(0,10)}</Table.Cell>
                            <Table.Cell className='lates-sıra-r'>{oyunLive[oyunLive.length-1].takimikiadi}</Table.Cell>
                        </>
                    : <div>Loading...</div>
                } 
            </Table.Row>
        </Table.Footer>
        </Table>
    </div>
  )
}

export default TableLatesMatch
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import '../assets/css/fikstur.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOyunLive } from '../redux-new/actions/oyunLive'
import moment from 'moment';

function TableFikstur() {
  const dispatch = useDispatch();
  const oyunLive = useSelector(state => state.oyunLive); 

  useEffect(() => {
    dispatch(getAllOyunLive());
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Body>
        {
          oyunLive.length > 0
          ? oyunLive.map((oyun,index) => {
            return (
              <>
              <Table.Row style={{ display: "table" }} key={index}>
                <Table.Cell className='fikstur-sira-l'>Logo</Table.Cell>
                <Table.Cell className='Fikstur-adi'>{oyun.takimbiradi}</Table.Cell>
                <Table.Cell className='fikstur-bilgi'>
                  {oyun.yer} - {moment(oyun.mactarihi).toISOString().slice(0,10)}  
                  </Table.Cell>
                <Table.Cell className='Fikstur-adi'>{oyun.takimikiadi}</Table.Cell>
                <Table.Cell className='fikstur-sira-r'>Logo</Table.Cell>
              </Table.Row>
              </>
            );
          }) : <div>Loading...</div>
        }
      </Table.Body>
  <Table.Footer>
      <Table.Row style={{ display: "table" }}>
        <Table.Cell className='Fikstur-button-p' colSpan='2' ><FaChevronLeft /> Previous</Table.Cell>
       
        <Table.Cell className='fikstur-footer-bilgi'>Week<br></br><FaChevronDown /></Table.Cell>
     
        <Table.Cell className='Fikstur-button-n' colSpan='2' >Next <FaChevronRight /></Table.Cell>

      </Table.Row>

    </Table.Footer> 
     



  </Table>
    </div>
  )
}

export default TableFikstur
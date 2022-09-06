import { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import '../assets/css/puan.durumu.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPuanDurumu } from '../redux-new/actions/puanDurumu'

function PuanDurumu() {
  const dispatch = useDispatch();
  const puanDurumu = useSelector(state => state.puanDurumu); 
  const sehirAdi = useSelector(state => state.currentSehir.currentSehir); 
  const ligAdi = useSelector(state => state.currentLig.currentLig); 

  console.log("SEHIR ADI VE LIG ADI: ", sehirAdi, ligAdi);

  useEffect(() => {
    dispatch(getAllPuanDurumu());
  }, []);

  function checkLig(lig, sehir) {
    return lig == ligAdi && sehir == sehirAdi;
  }

  let finalTable = puanDurumu.filter((item) => checkLig(item.ligadi, item.sehir));

  return (
    <div>
   <Table celled>
 {/*     <Table.Header>
       <Table.Row className='takim' style={{display: "table"}}>
         <Table.HeaderCell className='takim-g' style={{textAlign: "center"}}>1</Table.HeaderCell>
         <Table.HeaderCell className='takim' style={{textAlign: "center",fontWeight: "bold"}}>Takımlar</Table.HeaderCell>
         <Table.HeaderCell className='takim-a' style={{textAlign: "center"}}>O</Table.HeaderCell>
         <Table.HeaderCell className='takim-b' style={{textAlign: "center"}}>G</Table.HeaderCell>
         <Table.HeaderCell className='takim-a' style={{textAlign: "center"}}>B</Table.HeaderCell>
         <Table.HeaderCell className='takim-b' style={{textAlign: "center"}}>M</Table.HeaderCell>
         <Table.HeaderCell className='takim-a' style={{textAlign: "center"}}>A</Table.HeaderCell>
         <Table.HeaderCell className='takim-b' style={{textAlign: "center"}}>Y</Table.HeaderCell>
         <Table.HeaderCell className='takim-a' style={{textAlign: "center"}}>AV</Table.HeaderCell>
         <Table.HeaderCell className='takim-b' style={{textAlign: "center"}}>P</Table.HeaderCell>
       </Table.Row>
     </Table.Header> */} 

     <Table.Body>
     <Table.Row className='takim' style={{display: "table"}}>
         <Table.Cell className='takim-g' style={{textAlign: "center"}}>1</Table.Cell>
         <Table.Cell className='takim' style={{textAlign: "center",fontWeight: "bold"}}>Takımlar</Table.Cell>
         <Table.Cell className='takim-a' style={{textAlign: "center"}}>O</Table.Cell>
         <Table.Cell className='takim-b' style={{textAlign: "center"}}>G</Table.Cell>
         <Table.Cell className='takim-a' style={{textAlign: "center"}}>B</Table.Cell>
         <Table.Cell className='takim-b' style={{textAlign: "center"}}>M</Table.Cell>
         <Table.Cell className='takim-a' style={{textAlign: "center"}}>A</Table.Cell>
         <Table.Cell className='takim-b' style={{textAlign: "center"}}>Y</Table.Cell>
         <Table.Cell className='takim-a' style={{textAlign: "center"}}>AV</Table.Cell>
         <Table.Cell className='takim-b' style={{textAlign: "center"}}>P</Table.Cell>
       </Table.Row>
     {
      finalTable.length > 0
      ? finalTable.map((takim, index) => {
      // ? puanDurumu.sort((a,b) => a.puan - b.puan).map((takim, index) => {
          return (
            <Table.Row className='takim' style={{display: "table"}}>
              <Table.Cell className='takim-g' style={{textAlign: "center", color: 'white'}}>{index + 1}</Table.Cell>
              <Table.Cell className='takim' style={{textAlign: "center"}}>{takim.takimadi}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.oynananoyun}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.galibiyet}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.beraberlik}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.malubiyet}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.attigigol}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.yedigigol}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.avaraj}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.puan}</Table.Cell>
            </Table.Row>
          );
      })
      : <div>Yükleniyor...</div>
    }
     {/* {
      puanDurumu.length > 0
      ? puanDurumu.map((takim, index) => {
      // ? puanDurumu.sort((a,b) => a.puan - b.puan).map((takim, index) => {
          return (
            <Table.Row className='takim' style={{display: "table"}}>
              <Table.Cell className='takim-g' style={{textAlign: "center", color: 'white'}}>{index + 1}</Table.Cell>
              <Table.Cell className='takim' style={{textAlign: "center"}}>{takim.takimadi}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.oynananoyun}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.galibiyet}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.beraberlik}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.malubiyet}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.attigigol}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.yedigigol}</Table.Cell>
              <Table.Cell className='takim-a' style={{textAlign: "center"}}>{takim.avaraj}</Table.Cell>
              <Table.Cell className='takim-b' style={{textAlign: "center"}}>{takim.puan}</Table.Cell>
            </Table.Row>
          );
      })
      : <div>Yükleniyor...</div>
    } */}
         </Table.Body>
   </Table>
    </div>
  )
}

export default PuanDurumu

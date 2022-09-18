import React from 'react'
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../../../App.css';
import '../../../Form.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Multiselect from "react-widgets/Multiselect";
import DropdownList from "react-widgets/DropdownList";
import { createFikstur } from '../../../../redux-new/actions/fikstur';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { eachDayOfInterval } from 'date-fns';
import AuthService from "../../../../services-socket/auth.service";
import roundrobin from 'roundrobin-tournament-js';

export default function DashboardFiksturOlustur() {

  const currentUser = AuthService.getCurrentUser();
  const dispatch = useDispatch();
  const takimData = useSelector(state => state.takim);
  const ligler = useSelector(state => state.ligler);
  const sehirler = useSelector(state => state.sehir);

  const fiksturTuru = [
	{ name: "Tek Maç", value: false },
	{ name: "Rövanşlı Maç", value: true },
]

  const [sehir, setSehir] = useState();
  const [ligId, setLigId] = useState();
  const [takimlar, setTakimlar] = useState([]);
  const [baslangicTarihi, setBaslangicTarihi] = useState(new Date());
  const [bitisTarihi, setBitisTarihi] = useState(new Date());
  const [eslesmeTuru, setEslesmeTuru] = useState(false);
  const [eslesmeler, setEslesmeler] = useState([]);

  const takimVerileri = [
	{ name: "Liverpool", id: "1" },
	{ name: "Manchester United", id: "2" },
	{ name: "Arsenal", id: "3" },
	{ name: "Chelsea", id: "4" },
  ]

  useEffect(() => {
    dispatch(getAllTakim());
    dispatch(getAllLigler());
	dispatch(getAllSehir());
  }, []);

  const takimFunction2 = (value) => {
    setTakimlar(value);
  }

  const ligFunction = (value) => {
    setLigId(value.id)
  }

  const sehirFunction = (value) => {
	setSehir(value.sehiradi);
  }

  const eslesmeTuruFunction = (value) => {
	setEslesmeTuru(value.value);
  }

  const saveFikstur = (e) => {
	e.preventDefault();
	let teams = [];

	const result = eachDayOfInterval(
		{ start: new Date(baslangicTarihi), end: new Date(bitisTarihi) },
		{ step: Math.floor(Math.random()*(8-7+1)+7)}
	)
	  
	for(let z = 0; z < result.length; z++){
		result[z].setHours(Math.floor(Math.random()*(17-15+1)+15));
	}

	for(let i = 0; i < takimlar.length; i++){
		teams.push(takimlar[i].name);
	}

	const tournament = roundrobin(teams, eslesmeTuru);

	for(let i = 0; i < tournament.length; i++) {
		for(let j = 0 ; j < tournament[i].length; j++) {
		  // console.log(tournament[i][j][0] + " vs " + tournament[i][j][1]); // liverpool vs manchester united
		  tournament[i][j][2] = result[i];
		}
	  }

  	console.log("TOURNAMENT: ", tournament);
    const data = {sehir, ligId, takimlar, baslangicTarihi, bitisTarihi, eslesmeTuru, eslesmeler: tournament};
    dispatch(createFikstur(data));
  }

  return (
    <div className='dashboard-container'>
      <SideBar menu={sidebar_menu} />

      <div className='dashboard-body'>
        <form className='formcss-canli'>
          <div className='div2'>
          <label className="labelcss-atanan-canli" htmlFor='id'>Şehir Seç</label>
            {/* <input className="inputcss" placeholder="Şehir" name="sehir" value={sehir} disabled /> */}
			<DropdownList
                data={sehir}
                dataKey='id'
                textField='sehiradi'
                defaultValue={'Şehir seçin'}
                onChange={(value) => { sehirFunction(value)}}
              />
            <label className="labelcss-atanan-canli" htmlFor='id'>Lig Seç</label>
            <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                defaultValue={'Ligi seçin'}
                onChange={(value) => { ligFunction(value)}}
              />
            <label className="labelcss-atanan-canli" htmlFor='id'>Takımlar</label>
            {/* <Multiselect
              data={takimData}
              dataKey="id"
              textField="adi"
              // defaultValue={'Takım seçin'}
              onChange={(value) => { takimFunction2(value)}}
            /> */}
            <Multiselect
              data={takimVerileri}
              dataKey="id"
              textField="name"
              // defaultValue={'Takım seçin'}
              onChange={(value) => { takimFunction2(value)}}
            />
			<label className="labelcss-atanan-canli" htmlFor='id'>Eşleşme Türü</label>
            <DropdownList
                data={fiksturTuru}
                dataKey='id'
                textField='name'
                defaultValue={'Eşleşme türünü seçin'}
                onChange={(value) => { eslesmeTuruFunction(value)}}
              />
            <label className="labelcss-atanan-canli" htmlFor='id'>Lig Başlangıç Tarihi</label>
            <input className="inputcss" placeholder="Başlangıç Tarihi" type="date" name="tarih" onChange={(event) => setBaslangicTarihi(event.target.value)} />
            <label className="labelcss-atanan-canli" htmlFor='id'>Lig Bitiş Tarihi</label>
            <input className="inputcss" placeholder="Bitiş Tarihi" type="date" name="tarih" onChange={(event) => setBitisTarihi(event.target.value)} />
            <div className="buttondiv">
            <button className="buttoncss-fikstur-baslat" onClick={(e) => saveFikstur(e)}>Fikstur Oluştur</button>
            </div></div></form>
      </div>
    </div>
  )
}

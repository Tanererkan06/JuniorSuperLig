import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updatePuanDurumu } from '../../../../redux-new/actions/puanDurumu';
// import { getAllTakim } from '../../../../redux-new/actions/takim';
import { useEffect, useState } from 'react';
// import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import PuanDurumuService from '../../../../services-new/PuanDurumuService';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from "../../../../services-socket/auth.service";

function UpdatePuanDurumu(props) {
    // Değişken tanımlamaları
    const notify = () => toast.success('Veriler güncellendi!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

      const activeSehir = useSelector(state => state.currentSehir.currentSehir);
      const currentUser = AuthService.getCurrentUser();

    const id = props.id;
    const [sezon, setSezon] = useState("");
    const [lig, setLig] = useState("");
    const [ligAdi, setLigAdi] = useState("");
const [sehir, setSehir] = useState(currentUser.sehir);
    const [takimId, setTakimId] = useState("");
    const [takimAdi, setTakimAdi] = useState("");
    const [oynananOyun, setOynananOyun] = useState("");
    const [galibiyet, setGalibiyet] = useState("");
    const [maglubiyet, setMaglubiyet] = useState("");
    const [beraberlik, setBeraberlik] = useState("");
    const [attigiGol, setAttigiGol] = useState("");
    const [yedigiGol, setYedigiGol] = useState("");
    const [averaj, setAveraj] = useState("");
    const [puan, setPuan] = useState("");
    const [published, setPublished] = useState(true);

    // const [takimData, setTakimData] = useState([]);
    const puanDurumu = useSelector(state => state.puanDurumu);
    
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getAllTakim());
    // }, []);
    
    // Useeffect tanımlamaları
    useEffect(() => {
          PuanDurumuService.getById(id).then(response => {
            setSezon(response.data.sezon);
            setLig(response.data.lig);
            setLigAdi(response.data.ligadi);
            setTakimId(response.data.takimid);
            setTakimAdi(response.data.takimadi);
            setOynananOyun(response.data.oynananoyun);
            setGalibiyet(response.data.galibiyet);
            setMaglubiyet(response.data.malubiyet);
            setBeraberlik(response.data.beraberlik);
            setAttigiGol(response.data.attigigol);
            setYedigiGol(response.data.yedigigol);
            setAveraj(response.data.avaraj);
            setPuan(response.data.puan);
            setPublished(response.data.published);
        })
    }, [dispatch])

    // Fonksiyon tanımlamaları
    // const takimFunction = async (value) => {
    //   await setTakimAdi(value.adi);
    //   await setTakimId(value.id);
    //   const data = { takimid: value.id, takimadi: value.adi};
    //   // //console.log("GITMEDEN KI VEIRLERE BAKAM: ", data);
    //   dispatch(updatePuanDurumu({id: props.id, data}));
    // }

    const updatePuanDurumuFunc = () => {
          const data = {sezon, lig, ligadi: ligAdi, takimid: takimId, takimadi: takimAdi, oynananoyun: oynananOyun, galibiyet, malubiyet: maglubiyet, beraberlik, attigigol: attigiGol, yedigigol: yedigiGol, avaraj: averaj, puan, published};
          dispatch(updatePuanDurumu({id: props.id, data}));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }

  return (
    <>
        <form className="formcss">
          <div className="div2">
            <label className="labelcss" htmlFor='sehir'>Şehir</label>
            <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehir" value={sehir} disabled />
          </div>
        <div className="col-xs-12">
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Sezon</label>
            <input type="number" placeholder="Sezon" name="sezon" value={sezon} onChange={(event) => { setSezon(event.target.value); }} />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Lig</label>
            <input type="number" placeholder="Lig" name="sezon" value={lig} onChange={(event) => { setLig(event.target.value); }} />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Lig Adı</label>
            <input type="text" placeholder="Lig Adı" name="sezon" value={ligAdi} onChange={(event) => { setLigAdi(event.target.value); }} />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Takım Adı</label>
            <input type="text" placeholder="Takım Adı" name="takimadi" value={takimAdi} onChange={(event) => { setTakimAdi(event.target.value); }} />
          </div>
        </div>
          <div className="col-xs-12">
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor="adi">Oynanan Oyun</label>
                <input type="number" className="inputcss" placeholder="Oynanan Oyun" value={oynananOyun} name="oynananoyun" onChange={(event) => { setOynananOyun(event.target.value); }} />
              </div>
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor='soyadi'>Galibiyet</label>
                <input className="inputcss"type="number" placeholder="Galibiyet" value={galibiyet} name="Galibiyet" onChange={(event) => { setGalibiyet(event.target.value); }} />
              </div>
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor='soyadi'>Mağlubiyet</label>
                <input className="inputcss" type="number" placeholder="Mağlubiyet" value={maglubiyet} name="maglubiyet" onChange={(event) => { setMaglubiyet(event.target.value); }} />
              </div>
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor='soyadi'>Beraberlik</label>
                <input className="inputcss" type="number" placeholder="Beraberlik" value={beraberlik} name="beraberlik" onChange={(event) => { setBeraberlik(event.target.value); }} />
              </div>
          </div>
          <div className="col-xs-12">
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Attığı Gol</label>
              <input className="inputcss" type="number" placeholder="Attığı Gol" value={attigiGol} name="telefon" onChange={(event) => { setAttigiGol(event.target.value); }} />
            </div>      
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Yediği Gol</label>
              <input className="inputcss" type="number" placeholder="Yediği Gol" value={yedigiGol} name="telefon" onChange={(event) => { setYedigiGol(event.target.value); }} />
            </div>      
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Averaj</label>
              <input className="inputcss" type="number" placeholder="Averaj" value={averaj} name="telefon" onChange={(event) => { setAveraj(event.target.value); }} />
            </div>      
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Puan</label>
              <input className="inputcss" type="number" placeholder="Puan" value={puan} name="telefon" onChange={(event) => { setPuan(event.target.value); }} />
            </div>      
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Published: True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div>
          
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <button className='listele-button listele-button-success' onClick={updatePuanDurumuFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdatePuanDurumu
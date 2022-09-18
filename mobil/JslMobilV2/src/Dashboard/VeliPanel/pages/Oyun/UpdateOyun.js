import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateOyun } from '../../../../redux-new/actions/oyun';
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
import OyunService from '../../../../services-new/OyunService';
import GozlemciService from '../../../../services-new/GozlemciService';
import AuthService from "../../../../services-socket/auth.service";
import { getAllGozlemci } from '../../../../redux-new/actions/gozlemci';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { getAllHakem } from '../../../../redux-new/actions/hakem';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { getAllOyunKonum } from '../../../../redux-new/actions/oyunKonum';

function UpdateOyun(props) {
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
      const currentUser = AuthService.getCurrentUser();
      const activeSehir = useSelector(state => state.currentSehir.currentSehir);

    const id = props.id;
    const [adi, setAdi] = useState("");
    const [macTarihi, setMacTarihi] = useState();
    const [macSaati, setMacSaati] = useState();
    const [sehir, setSehir] = useState(currentUser.sehir);
    const [yer, setYer] = useState("");
    const [lig, setLig] = useState("");
    const [macSonu, setMacSonu] = useState("");
    const [ilkYariSonucu, setIlkYariSonucu] = useState("");
    const [takimBirId, setTakimBirId] = useState("");
    const [takimBirAdi, setTakimBirAdi] = useState("");
    const [takimIkiId, setTakimIkiId] = useState("");
    const [takimIkiAdi, setTakimIkiAdi] = useState("");
    const [gozlemciId, setGozlemciId] = useState("");
    const [gozlemciAdi, setGozlemciAdi] = useState("");
    // const [ortaHakem, setOrtaHakem] = useState("");
    // const [yanHakemBir, setYanHakemBir] = useState("");
    // const [yanHakemIki, setYanHakemIki] = useState("");
    // const [dorduncuHakem, setDorduncuHakem] = useState("");
    const [yorum, setYorum] = useState("");
    const [published, setPublished] = useState(true);

    // const gozlemci = useSelector(state => state.gozlemci);
    const takim = useSelector(state => state.takim);
    // const hakem = useSelector(state => state.hakem);
    const ligler = useSelector(state => state.ligler);
    // const sehir = useSelector(state => state.sehir);
    const oyunKonum = useSelector(state => state.oyunKonum);
    
    const [gozlemciData, setGozlemciData] = useState([]);

    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
        OyunService.getById(id).then(response =>{
          //console.log(response.data);
            setAdi(response.data.adi);
            let mactarihi = moment(response.data.mactarihi).toISOString().slice(0,10); 
            let macsaati = moment(response.data.macsaati).toISOString().slice(0,10); 
            setMacTarihi(mactarihi);
            setMacSaati(macsaati);
            setSehir(response.data.sehir);
            setYer(response.data.yer);
            setLig(response.data.lig);
            setMacSonu(response.data.macsonu);
            setIlkYariSonucu(response.data.ilkyarisonucu);
            setTakimBirId(response.data.takimbirid);
            setTakimBirAdi(response.data.takimbiradi);
            setTakimIkiId(response.data.takimikiid);
            setTakimIkiAdi(response.data.takimikiadi);
            setGozlemciId(response.data.gozlemciid);
            setGozlemciAdi(response.data.gozlemciadi);
            // setOrtaHakem(response.data.ortahakem);
            // setYanHakemBir(response.data.yanhakembir);
            // setYanHakemIki(response.data.yanhakemiki);
            // setDorduncuHakem(response.data.dorduncuhakem);
            setYorum(response.data.yorum);
        });
    }, [])

    useEffect(() => {
      // dispatch(getAllGozlemci());
      GozlemciService.tumGozlemciler().then(response => {
        setGozlemciData(response.data);
    })
    }, []);

    useEffect(() => {
      dispatch(getAllTakim());
    }, []);

    // useEffect(() => {
    //   dispatch(getAllHakem());
    // }, []);

    useEffect(() => {
      dispatch(getAllLigler());
    }, []);

    // useEffect(() => {
    //   dispatch(getAllSehir());
    // }, []);

    useEffect(() => {
      dispatch(getAllOyunKonum());
    }, []);

    // Fonksiyon tanımlamaları
    const takimBirFunction = (value) => {
      setTakimBirAdi(value.adi);
      setTakimBirId(value._id);
      const data = { takimbirid: value._id, takimbiradi: value.adi};
      dispatch(updateOyun({id: props.id, data}));
    }

    const takimIkiFunction = (value) => {
      setTakimIkiAdi(value.adi);
      setTakimIkiId(value._id);
      const data = { takimikiid: value._id, takimikiadi: value.adi};
      dispatch(updateOyun({id: props.id, data}));
    }

    const gozlemciFunction = async (value) => {
      setGozlemciAdi(value.username);
      setGozlemciId(value._id); 
      const data = { gozlemciid: value._id, gozlemciadi: value.username};
      dispatch(updateOyun({id: props.id, data}));
    }

    const ligFunction = (value) => {
      setLig(value.ligadi);
      const data = { ligadi: value.ligadi};
      dispatch(updateOyun({id: props.id, data}));
    }

    // const ortaHakemFunction = (value) => {
    //   setOrtaHakem(value.adi)
    //   const data = { ortahakem: value.adi};
    //   dispatch(updateOyun({id: props.id, data}));
    // }

    // const yanHakemBirFunction = (value) => {
    //   setYanHakemBir(value.adi)
    //   const data = { yanhakembir: value.adi};
    //   dispatch(updateOyun({id: props.id, data}));
    // }

    // const yanHakemIkiFunction = (value) => {
    //   setYanHakemIki(value.adi)
    //   const data = { yanhakemiki: value.adi};
    //   dispatch(updateOyun({id: props.id, data}));
    // }

    // const dorduncuHakemFunction = (value) => {
    //   setDorduncuHakem(value.adi)
    //   const data = { dorduncuhakem: value.adi};
    //   dispatch(updateOyun({id: props.id, data}));
    // }

    // const sehirFunction = (value) => {
    //   setIl(value.sehiradi);
    //   const data = { il: value.sehiradi};
    //   dispatch(updateOyun({id: props.id, data}));
    // }

    const oyunKonumFunction = (value) => {
      setYer(value.adi);
      const data = { yer: value.adi};
      dispatch(updateOyun({id: props.id, data}));
    }

    const updateOyunFunc = () => {
      // if((takimBirAdi != takimIkiAdi) && (ortaHakem != yanHakemBir) && (ortaHakem != yanHakemIki) && (ortaHakem != dorduncuHakem) && (yanHakemBir != yanHakemIki) && (yanHakemBir != dorduncuHakem) && (yanHakemIki != dorduncuHakem))
      // {
      if(takimBirAdi != takimIkiAdi)
      {
        // const data = {adi, mactarihi: macTarihi, macsaati: macSaati, lig, il, yer, takimbirid: takimBirId, takimbiradi: takimBirAdi, takimikid: takimIkiId, takimikiadi: takimIkiAdi, gozlemciid: gozlemciId, gozlemciadi: gozlemciAdi, ortahakem: ortaHakem, yanhakembir: yanHakemBir, yanhakemiki: yanHakemIki, dorduncuhakem: dorduncuHakem, yorum, macsonu: macSonu, ilkyarisonucu: ilkYariSonucu, published}
        const data = {adi, mactarihi: macTarihi, macsaati: macSaati, lig, sehir, yer, takimbirid: takimBirId, takimbiradi: takimBirAdi, takimikid: takimIkiId, takimikiadi: takimIkiAdi, gozlemciid: gozlemciId, gozlemciadi: gozlemciAdi, yorum, macsonu: macSonu, ilkyarisonucu: ilkYariSonucu, published}
          dispatch(updateOyun({id: props.id, data}));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }
      else {
        alert("Aynı şeyler seçilemez, örneğin A takımı ile A takımı aynı anda seçilmez.");
      }       
    }


  return (
    <>
        <form className="formcss">
          <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
            {/* <div className="col-xs-4">
              <label label className="labelcss" htmlFor="id">Id:</label>
              <input className="inputcss" type="text" placeholder="Id" name="id" value={id} onChange={(event) => { setId(event.target.value); }} />
            </div> */}
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="adi">Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" value={adi} onChange={(event) => { setAdi(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="yorum">Yorum</label>
              <input className="inputcss" type="text" placeholder="Yorum" name="yorum" value={yorum} onChange={(event) => { setYorum(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="macTarihi">Müsabaka Tarihi</label>
              <input className="inputcss" type="date" placeholder="Müsabaka tarihi" name="macTarihi" value={macTarihi} onChange={(event) => { setMacTarihi(event.target.value); }} />
            </div>
            <div>
             <label className="labelcss" htmlFor="macSaati">Müsabaka Saati</label>
             <input className="inputcss" type="date" placeholder="Müsabaka saati" name="macSaati" value={macSaati} onChange={(event) => { setMacSaati(event.target.value); }} />
            </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
            <div className='col-xs-4'>
                 <label className="labelcss" htmlFor="il">Şehir</label>
                 <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehir" value={sehir} disabled />
            </div>
            <div className='col-xs-4'>
              <label className="labelcss" htmlFor="yer">Yer</label>
              {/* <input className="inputcss" type="text" placeholder="Yer" name="yer" value={yer} onChange={(event) => { setYer(event.target.value); }} /> */}
              <DropdownList
                data={oyunKonum}
                dataKey='id'
                textField='adi'
                value={yer}
                onChange={(value) => { oyunKonumFunction(value)}}
              />
            </div>
            <div className='col-xs-4'>
              <label className="labelcss" htmlFor="lig">Lig</label>
              {/* <input className="inputcss" type="number" placeholder="Lig" name="yer" value={lig} onChange={(event) => { setYer(event.target.value); }} /> */}
              <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                value={lig}
                onChange={(value) => { ligFunction(value)}}
              />
            </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="birinciTakim">Birinci Takım</label>
            <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                value={takimBirAdi}
                onChange={(value) => { takimBirFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="ikinciTakim">İkinci Takım</label>
            <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                value={takimIkiAdi}
                onChange={(value) => { takimIkiFunction(value)}}
              />
            </div>
          </div>
          <div className="div2">
            <div>
            <label className="labelcss" htmlFor="gozlemci">Gözlemci</label>
            <DropdownList
                data={gozlemciData}
                dataKey='id'
                textField='username'
                value={gozlemciAdi}
                onChange={(value) => { gozlemciFunction(value)}}
              />
            </div>
          </div>
          {/* <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="ortaHakem">Orta Hakem</label>
            <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                value={ortaHakem}
                onChange={(value) => { ortaHakemFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="birinciYanHakem">Birinci Yan Hakem</label>
            <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                value={yanHakemBir}
                onChange={(value) => { yanHakemBirFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="ikinciYanHakem">İkinci Yan Hakem</label>
            <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                value={yanHakemIki}
                onChange={(value) => { yanHakemIkiFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="dorduncuHakem">Dördüncü Hakem</label>
            <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                value={dorduncuHakem}
                onChange={(value) => { dorduncuHakemFunction(value)}}
              />
            </div>
          </div> */}
          <div className="div2">
            <div>
                <label className="labelcss" htmlFor="macSonu">Maç Sonu</label>
                <input className='inputcss'  type="text" id="macSonu" name="macSonu" value={macSonu} placeholder="Maç Sonu" onChange={(event) => { setMacSonu(event.target.value); }} />
            </div>
            <div>
                <label className="labelcss" htmlFor="ilkYariSonucu">İlk Yarı Sonucu</label>
                <input className='inputcss' type="text" id="ilkYariSonucu" name="ilkYariSonucu" value={ilkYariSonucu} placeholder="İlk Yarı Sonucu" onChange={(event) => { setIlkYariSonucu(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label className="labelcss" htmlFor="true">Published: True</label>
                <input  type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(true); }} />
            </div>
            <div>
               <label className="labelcss" htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(false); }} />
            </div>
          </div>
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={updateOyunFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateOyun
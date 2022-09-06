import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createOyun } from '../../../../redux-new/actions/oyun';
import { getAllGozlemci } from '../../../../redux-new/actions/gozlemci';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { getAllHakem } from '../../../../redux-new/actions/hakem';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';

function CreateOyun(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Oyun eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

  const [adi, setAdi] = useState("");
  const [macTarihi, setMacTarihi] = useState("");
  const [macSaati, setMacSaati] = useState("");
  const [il, setIl] = useState("");
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
  const [ortaHakem, setOrtaHakem] = useState("");
  const [yanHakemBir, setYanHakemBir] = useState("");
  const [yanHakemIki, setYanHakemIki] = useState("");
  const [dorduncuHakem, setDorduncuHakem] = useState("");
  const [yorum, setYorum] = useState("");
  const [published, setPublished] = useState(true);

  const gozlemci = useSelector(state => state.gozlemci);
  const takim = useSelector(state => state.takim);
  const hakem = useSelector(state => state.hakem);
  const ligler = useSelector(state => state.ligler);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllGozlemci());
    }, []);

    useEffect(() => {
      dispatch(getAllTakim());
    }, []);

    useEffect(() => {
      dispatch(getAllHakem());
    }, []);

    useEffect(() => {
      dispatch(getAllLigler());
    }, []);

    // Fonksiyon tanımlamaları
    const takimBirFunction = (value) => {
      setTakimBirAdi(value.adi);
      setTakimBirId(value.id);
    }

    const takimIkiFunction = (value) => {
      setTakimIkiAdi(value.adi);
      setTakimIkiId(value.id);
    }

    const gozlemciFunction = (value) => {
      setGozlemciAdi(value.adi);
      setGozlemciId(value.id);
    }

    const ligFunction = (value) => {
      setLig(value.ligadi);
    }

    const ortaHakemFunction = (value) => {
      setOrtaHakem(value.adi)
    }

    const yanHakemBirFunction = (value) => {
      setYanHakemBir(value.adi)
    }

    const yanHakemIkiFunction = (value) => {
      setYanHakemIki(value.adi)
    }

    const dorduncuHakemFunction = (value) => {
      setDorduncuHakem(value.adi)
    }

    const createOyunFunc = () => {
      if((takimBirAdi != takimIkiAdi) && (ortaHakem != yanHakemBir) && (ortaHakem != yanHakemIki) && (ortaHakem != dorduncuHakem) && (yanHakemBir != yanHakemIki) && (yanHakemBir != dorduncuHakem) && (yanHakemIki != dorduncuHakem))
      {
        const data = { adi, macTarihi, macSaati, lig, il, yer, takimBirId, takimBirAdi, takimIkiId, takimIkiAdi, gozlemciId, gozlemciAdi, ortaHakem, yanHakemBir, yanHakemIki, dorduncuHakem, yorum, macSonu, ilkYariSonucu, published }
          dispatch(createOyun(data));
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
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="adi">Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="yorum">Yorum</label>
              <input className="inputcss" type="text" placeholder="Yorum" name="yorum" onChange={(event) => { setYorum(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="macTarihi">Müsabaka Tarihi</label>
              <input className="inputcss" type="date" placeholder="Müsabaka Tarihi" name="macTarihi" onChange={(event) => { setMacTarihi(event.target.value); }} />
            </div>
            <div>
             <label className="labelcss" htmlFor="macSaati">Müsabaka Saati</label>
             <input className="inputcss" type="date" placeholder="Müsabaka Saati" name="macSaati" onChange={(event) => { setMacSaati(event.target.value); }} />
            </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className='col-xs-4'>
                <label className="labelcss" htmlFor="il">İl</label>
                <input className="inputcss" type="text" placeholder="İl" name="il" onChange={(event) => { setIl(event.target.value); }} />
            </div>
            <div className='col-xs-4'>
              <label className="labelcss" htmlFor="yer">Yer</label>
              <input className="inputcss" type="text" placeholder="Yer" name="yer" onChange={(event) => { setYer(event.target.value); }} />
            </div>
            <div className='col-xs-4'>
              <label className="labelcss" htmlFor="lig">Lig</label>
              {/* <input className="inputcss" type="number" placeholder="Lig" name="lig" onChange={(event) => { setLig(event.target.value); }} /> */}
              <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                defaultValue={'Lig seçin'}
                onChange={(value) => { ligFunction(value)}}
              />
            </div>
          </div>
          <div className="div2">
            <div >
              <label className="labelcss" htmlFor="birinciTakim">Birinci Takım</label>
              <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                defaultValue={'Birinci Takımı seçin'}
                onChange={(value) => { takimBirFunction(value)}}
              />
            </div>
            <div>
            <label className="labelcss" htmlFor="ikinciTakim">İkinci Takım</label>
            <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                defaultValue={'İkinci Takımı seçin'}
                onChange={(value) => { takimIkiFunction(value)}}
              />
            </div>
          </div>
          <div className="div2">
            <div>
            <label className="labelcss" htmlFor="gozlemci">Gözlemci</label>
              <DropdownList
                data={gozlemci}
                dataKey='id'
                textField='adi'
                defaultValue={'Gözlemci seçin'}
                onChange={(value) => { gozlemciFunction(value)}}
              />
            </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="ortaHakem">Orta Hakem</label>
              <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                defaultValue={'Orta Hakemi seçin'}
                onChange={(value) => { ortaHakemFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="birinciYanHakem">Birinci Yan Hakem</label>
            <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                defaultValue={'Birinci Yan Hakemi seçin'}
                onChange={(value) => { yanHakemBirFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="ikinciYanHakem">İkinci Yan Hakem</label>
            <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                defaultValue={'İkinci Yan Hakemi seçin'}
                onChange={(value) => { yanHakemIkiFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
            <label className="labelcss" htmlFor="dorduncuHakem">Dördüncü Hakem</label>
            <DropdownList
                data={hakem}
                dataKey='id'
                textField='adi'
                defaultValue={'Dördüncü Hakemi seçin'}
                onChange={(value) => { dorduncuHakemFunction(value)}}
              />
            </div>
          </div>
          <div className="div2">
            <div>
                <label className="labelcss" htmlFor="macSonu">Maç Sonu</label>
                <input className='inputcss'  type="text" id="macSonu" name="macSonu" placeholder="Maç Sonu" onChange={(event) => { setMacSonu(event.target.value); }} />
            </div>
            <div>
                <label className="labelcss" htmlFor="ilkYariSonucu">İlk Yarı Sonucu</label>
                <input className='inputcss' type="text" id="ilkYariSonucu" name="ilkYariSonucu" placeholder="İlk Yarı Sonucu" onChange={(event) => { setIlkYariSonucu(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label className="labelcss" htmlFor="true">Published: True</label>
                <input  type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label className="labelcss" htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div>
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createOyunFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateOyun
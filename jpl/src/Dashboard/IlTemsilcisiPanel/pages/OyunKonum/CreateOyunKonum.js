import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createOyunKonum } from '../../../../redux-new/actions/oyunKonum';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';

function CreateOyunKonum(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Oyun Konum eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [adi, setAdi] = useState("");
    const [konum, setKonum] = useState("");
    const [il, setIl] = useState("");
    const [takimId, setTakimId] = useState("");
    const [takimAdi, setTakimAdi] = useState("");
    const [sorumlu, setSorumlu] = useState("");
    const [sorumluIletisim, setSorumluIletisim] = useState("");
    const [published, setPublished] = useState(true);

    const takim = useSelector(state => state.takim);
    const sehir = useSelector(state => state.sehir);

    // Useeffect tanımlamaları
    useEffect(() => {
     dispatch(getAllTakim());
    }, []);

    useEffect(() => {
     dispatch(getAllSehir());
    }, []);

    // Fonksiyon tanımlamaları
    const takimFunction = (value) => {
      setTakimId(value.id);
      setTakimAdi(value.adi);
    }

    const sehirFunction = (value) => {
      // console.log("SEHIR VALUE: ", value);
      setIl(value.sehiradi);
    }

    const createOyunKonumFunc = () => {
        // if(adi.length > 0 & konum.length > 0 & il.length > 0 & takimAdi.length > 0 & sorumlu.length > 0 && sorumluIletisim.length > 0)
        // {
          const data = {adi, konum, il, takimId, takimAdi, sorumlu, sorumluIletisim, published}
          console.log("create ekrani data: ", data);
          dispatch(createOyunKonum(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        // }
      //   else {
      //     alert("Lütfen tüm alanları doldurunuz.");
      // }
    }

  return (
    <>
        <form className="formcss">
          <div className="div2">
            <div>
              <label className="labelcss"htmlFor="adi">Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss"htmlFor="konum">Konum</label>
              <input className="inputcss" type="text" placeholder="Konum" name="konum" onChange={(event) => { setKonum(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss"htmlFor="il">İl</label>
              {/* <input className="inputcss" type="text" placeholder="İl" name="il" onChange={(event) => { setIl(event.target.value); }} /> */}
              <DropdownList
                data={sehir}
                dataKey='id'
                textField='sehiradi'
                defaultValue={'İl seçin'}
                onChange={(value) => { sehirFunction(value)}}
              />
            </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
            {/* <div className="col-xs-3">
              <label className="labelcss"htmlFor="takimId">Takim id:</label>
              <input className="inputcss" type="number" placeholder="Takım id" name="takimId" onChange={(event) => { setTakimId(event.target.value); }} />
            </div> */}
            <div className="col-xs-3">
              <label className="labelcss"htmlFor="takimAdi">Takım Adı</label>
              {/* <input className="inputcss" type="text" placeholder="Takım adı" name="takimAdi" onChange={(event) => { setTakimAdi(event.target.value); }} /> */}
              <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                defaultValue={'Takım seçin'}
                onChange={(value) => { takimFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
              <label className="labelcss"htmlFor="sorumlu">Sorumlu</label>
              <input className="inputcss" type="text" placeholder="Sorumlu" name="sorumlu" onChange={(event) => { setSorumlu(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss"htmlFor="sorumluIletisim">Sorumlu İletişim</label>
              <input className="inputcss" type="number" placeholder="Sorumlu iletişim" name="sorumluIletisim" onChange={(event) => { setSorumluIletisim(event.target.value); }} />
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
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createOyunKonumFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateOyunKonum
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateOyunKonum } from '../../../../redux-new/actions/oyunKonum';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OyunKonumService from '../../../../services-new/OyunKonumService'
import AuthService from "../../../../services-socket/auth.service";

function UpdateOyunKonum(props) {
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
    const [adi, setAdi] = useState("");
    const [konum, setKonum] = useState("");
    const [sehir, setSehir] = useState(currentUser.sehir);
    const [takimId, setTakimId] = useState("");
    const [takimAdi, setTakimAdi] = useState("");
    const [sorumlu, setSorumlu] = useState("");
    const [sorumluIletisim, setSorumluIletisim] = useState("");
    const [published, setPublished] = useState(true);

    const takim = useSelector(state => state.takim);

    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
        OyunKonumService.getById(id).then(response => {
            setAdi(response.data.adi);
            setKonum(response.data.konum);
            setSehir(response.data.sehir);
            setTakimId(response.data.takimid);
            setTakimAdi(response.data.takimadi);
            setSorumlu(response.data.sorumlu);
            setSorumluIletisim(response.data.sorumluiletisim);
            setPublished(response.data.published);
        });
    }, [])

    useEffect(() => {
      dispatch(getAllTakim());
    }, []);


    // Fonksiyon tanımlamaları
    const takimFunction = (value) => {
      setTakimId(value.id);
      setTakimAdi(value.adi);
      const data = { takimid: value.id, takimadi: value.adi};
      dispatch(updateOyunKonum({id: props.id, data}));
    }


    const updateOyunKonumFunc = () => {
        // if(adi.length > 0 && konum.length > 0 && il.length > 0 && takimId.length > 0 && takimAdi.length > 0 && sorumlu.length > 0 && sorumluIletisim.length > 0)
        // {
          const data = {adi, konum, sehir, takimid: takimId, takimadi: takimAdi, sorumlu, sorumluiletisim: sorumluIletisim, published}
          dispatch(updateOyunKonum({id: props.id, data}));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }
        // else {
        //   alert("Lütfen tüm alanları doldurunuz.");
        // }    
    // }


  return (
    <>
        <form className="formcss">
          <div className="div2">
            {/* <div>
              <label className="labelcss"htmlFor="id">Id:</label>
              <input className="inputcss" type="text" placeholder="Id" name="id" onChange={(event) => { setId(event.target.value); }} />
            </div> */}
            <div>
              <label className="labelcss"htmlFor="adi">Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" value={adi} onChange={(event) => { setAdi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss"htmlFor="konum">Konum</label>
              <input className="inputcss" type="text" placeholder="Konum" name="konum" value={konum} onChange={(event) => { setKonum(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss"htmlFor="il">Şehir</label>
              <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehir" value={sehir} disabled />
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
                value={takimAdi}
                onChange={(value) => { takimFunction(value)}}
              />
            </div>
            <div className="col-xs-3">
              <label className="labelcss"htmlFor="sorumlu">Sorumlu</label>
              <input className="inputcss" type="text" placeholder="Sorumlu" value={sorumlu} name="sorumlu" onChange={(event) => { setSorumlu(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss"htmlFor="sorumluIletisim">Sorumlu İletişim</label>
              <input className="inputcss" type="number" placeholder="Sorumlu iletişim" value={sorumluIletisim} name="sorumluIletisim" onChange={(event) => { setSorumluIletisim(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={updateOyunKonumFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateOyunKonum
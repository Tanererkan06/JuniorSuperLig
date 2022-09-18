import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateNews } from '../../../../redux-new/actions/news';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import NewsService from '../../../../services-new/NewsService';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
import { RichTextEditor } from '@mantine/rte';
import ReactFlagsSelect from "react-flags-select";
import AuthService from "../../../../services-socket/auth.service";
function UpdateNews(props) {
    // Değişken tanımlamaları
    const currentUser = AuthService.getCurrentUser();

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

    const id = props.id;
    const [baslik, setBaslik] = useState("");
    const [icerik, setIcerik] = useState("");
    const [resim, setResim] = useState("");
    const [kisaIcerik, setKisaIcerik] = useState("");
    const [tarih, setTarih] = useState("");
    const [ulke, setUlke] = useState("");
    const [sehir, setSehir] = useState("");
    const [lig, setLig] = useState("");
    const [takimId, setTakimId] = useState("");
    const [published, setPublished] = useState(true);

    const takimlar = useSelector(state => state.takim);
    const ligler = useSelector(state => state.ligler);
    const sehirler = useSelector(state => state.sehir);
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllTakim());
    }, [])

    useEffect(() => {
      dispatch(getAllLigler());
    }, [])

     useEffect(() => {
       dispatch(getAllSehir());
    }, [])
    
    // Useeffect tanımlamaları
    useEffect(() => {
          NewsService.getById(id).then(response => {
            console.log("GELEN RESP: ", response.data);
            setBaslik(response.data.baslik.replaceAll('&lt;','<'));
            setIcerik(response.data.icerik.replaceAll('&lt;','<'));
            setKisaIcerik(response.data.kisaicerik.replaceAll('&lt;','<'));
            setUlke(response.data.ulke);
            // setSehir(response.data.sehir);
            setLig(response.data.lig);
            setTakimId(response.data.takimid);
            let date = moment(response.data.tarih).toISOString().slice(0,10);            
            setTarih(date);
        })
    }, [dispatch])

    // Fonksiyon tanımlamaları
    const takimFunction = (value) => {
      setTakimId(value._id);
      const data = { takimid: value._id};
      dispatch(updateNews({id: props.id, data}));
    }

    const sehirFunction = (value) => {
      setSehir(value.sehiradi);
      const data = { sehir: value.sehiradi};
      dispatch(updateNews({id: props.id, data}));
    }

    const ligFunction = (value) => {
      setLig(value.ligadi);
      const data = { lig: value.ligadi};
      dispatch(updateNews({id: props.id, data}));
    }

    const updateNewsFunc = () => {
          // const data = {adi, soyadi, telefon, eposta, sifre, adres, uyruk, resim, dogumyeri: dogumYeri, dogumtarihi: dogumTarihi, takimid: takimId, takimadi: takimAdi, published};
          const data = {baslik, icerik, resim, kisaicerik: kisaIcerik, tarih, ulke, sehir, lig, takimid: takimId, published};
          dispatch(updateNews({id: props.id, data}));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }


  return (
    <>
        <form>
        <div className="col-xs-12">
          <div className='col-xs-6'>
            <label className="labelcss" htmlFor='resim'>Fotograf </label>
            <input  type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
          </div>  
          <div className='col-xs-6'>
            <label className="labelcss" htmlFor='tarih'>Tarih </label>
            <input  type="date" placeholder="Tarih" name="tarih" value={tarih} onChange={(event) => { setTarih(event.target.value); }} />
          </div>  
        </div>
        <div className="col-xs-12" style={{ marginTop: '10px' }}>
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='id'>Ülke</label>
            <ReactFlagsSelect
              selected={ulke}
              onSelect={code => setUlke(code)}
              placeholder="Lütfen ülke seçin"
              showSelectedLabel={true}
              showOptionLabel={true}
              searchable = {true}
              // blacklistCountries={true}
              searchPlaceholder = "Ülke arayın"
              // className="news-countries"
              // selectButtonClassName="news-countries-item"
            />
          </div>  
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='id'>Şehir</label>
            <DropdownList
                data={sehirler}
                dataKey='id'
                textField='sehiradi'
                Value={sehir}
                onChange={(value) => { sehirFunction(value)}}
              />
          </div>  
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='id'>Lig</label>
            <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                value={lig}
                onChange={(value) => { ligFunction(value)}}
              />
          </div>  
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='id'>Takım</label>
            {
              takimlar.length > 0
              ? takimlar.filter(takim => takim._id === takimId).map((takim, index) => {
                return (
                  <DropdownList
                    data={takimlar}
                    dataKey='id'
                    textField='adi'
                    value={takim.adi}
                    onChange={(value) => { takimFunction(value)}}
                  />
                )
              })
              : <div>Yükleniyor...</div>
            }        
          </div>  
        </div>
        <div className="col-xs-12">
          <div className='col-xs-12'>
          <label className="labelcss" htmlFor='baslik'>Başlık </label>
              <RichTextEditor value={baslik} onChange={setBaslik} />
          </div>
        </div>
        <div className="col-xs-12">
          <div className='col-xs-12'>
          <label className="labelcss" htmlFor='icerik'>İçerik </label>
              <RichTextEditor value={icerik} onChange={setIcerik} />
          </div>
        </div>
        <div className="col-xs-12">
          <div className='col-xs-12'>
          <label className="labelcss" htmlFor='kisaIcerik'>Kısa İçerik </label>
              <RichTextEditor value={kisaIcerik} onChange={setKisaIcerik} />
          </div>
        </div>
        <div className="div2">
        <div>
              <label htmlFor="true">Published: True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div>   
        </div>
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <button className='listele-button listele-button-success' onClick={updateNewsFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateNews
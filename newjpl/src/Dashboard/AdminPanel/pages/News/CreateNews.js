import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createNews } from '../../../../redux-new/actions/news';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import { RichTextEditor } from '@mantine/rte';
import ReactFlagsSelect from "react-flags-select";
import AuthService from "../../../../services-socket/auth.service";

function CreateNews(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Haber eklendi!', {
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

    // const [id, setId] = useState(null);
    const [baslik, setBaslik] = useState("");
    const [icerik, setIcerik] = useState("");
    const [resim, setResim] = useState("");
    const [kisaIcerik, setKisaIcerik] = useState("");
    const [tarih, setTarih] = useState("");
    const [ulke, setUlke] = useState("");
    const [sehir, setSehir] = useState(currentUser.sehir);
    const [lig, setLig] = useState("");
    const [takimId, setTakimId] = useState("");
    const [published, setPublished] = useState(true);

  const takimlar = useSelector(state => state.takim);
  const ligler = useSelector(state => state.ligler);
  // const sehirler = useSelector(state => state.sehir);


    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllTakim());
    }, [])

    useEffect(() => {
      dispatch(getAllLigler());
    }, [])

    // useEffect(() => {
    //   dispatch(getAllSehir());
    // }, [])

    // Fonksiyon tanımlamaları
    const takimFunction = (value) => {
      setTakimId(value._id);
    }

    // const sehirFunction = (value) => {
    //   setSehir(value.sehiradi);
    // }
    useEffect(() => {
      dispatch(getAllSehir());
    }, []);



    const sehirler = useSelector(state => state.sehir);


    const sehirFunction = (value) => {
          setSehir(value.sehiradi)
        }
    const ligFunction = (value) => {
      setLig(value.ligadi);
    }

    const createNewsFunc = async () => {
          // const data = {baslik, icerik, resim, kisaIcerik, tarih, ulke, sehir, lig, takimId, desc, published};
          const data = {baslik, icerik, resim, kisaIcerik, tarih, ulke, sehir, lig, takimId, published};
          console.log("data:" ,data);
          dispatch(createNews(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }

  return (
    <>
        {/* <form className="formcss-news"> */}
        <form>
        <div className="col-xs-12">
          <div className='col-xs-6'>
            <label className="labelcss" htmlFor='resim'>Fotograf </label>
            <input  type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
          </div>  
          <div className='col-xs-6'>
            <label className="labelcss" htmlFor='tarih'>Tarih </label>
            <input  type="date" placeholder="Tarih" name="tarih" onChange={(event) => { setTarih(event.target.value); }} />
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
                defaultValue={'Şehir seçin'}
                onChange={(value) => { sehirFunction(value)}}
              />
          </div>  
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='id'>Lig</label>
            <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                defaultValue={'Ligi seçin'}
                onChange={(value) => { ligFunction(value)}}
              />
          </div>  
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='id'>Takım</label>
            <DropdownList
                data={takimlar}
                dataKey='id'
                textField='adi'
                defaultValue={'Takımı seçin'}
                onChange={(value) => { takimFunction(value)}}
              />
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
          {/* <div>
              <label htmlFor="true">Published: True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px'}}>
            <button className='listele-button listele-button-success' onClick={createNewsFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateNews
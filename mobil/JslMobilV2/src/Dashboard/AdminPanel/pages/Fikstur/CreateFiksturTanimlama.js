import { useEffect, useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createFikstur } from '../../../../redux-new/actions/fikstur';
import { getAllLig } from '../../../../redux-new/actions/ligler';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';

function createFikstur(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Fikstur eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [ligId, setLigId] = useState("");
    const [baslangictarihi, setBaslangictarihi] = useState();
    const [bitistarihi, setBitistarihi] = useState();
    const [aktiflig, setAktiflig] = useState(true);
    const [isDeleted, setIsDeleted] = useState(false);
    const [pazartesi, setPazartesi] = useState(false);
    const [sali, setSali] = useState(false);
    const [carsamba, setCarsamba] = useState(false);
    const [persembe, setPersembe] = useState(false);
    const [cuma, setCuma] = useState(false);
    const [cumartesi, setCumartesi] = useState(false);
    const [pazar, setPazar] = useState(false);
    const [published, setPublished] = useState(true);

    
    const ligler = useSelector(state => state.ligler);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllLig());
    }, []);

    // Fonksiyon tanımlamaları
    const liglerFunction = (value) => {
      //console.log("GELEN VALUE: ", value);
      setLigId(value.id)
    }
 
    const createFikturFunc = () => {
          const data = { ligid, baslangictarihi,bitistarihi,aktiflig,isDeleted,pazartesi,sali,carsamba,persembe,cuma,cumartesi,pazar, published };
          dispatch(createFikstur(data));
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
          
          <div>
            <label className="labelcss" htmlFor='ligId'>Lig Id</label>
               <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                defaultValue={'Ligi seçin'}
                onChange={(value) => { liglerFunction(value)}}
              />
          </div> 
          <div>
            <label className="labelcss" htmlFor='baslangictarihi'>Başlangıç Tarihi</label>
              <input className="inputcss" type="text" placeholder="Baslangıç Tarihi" name="baslangictarihi" onChange={(event) => { setBaslangictarihi(event.target.value); }} />
          </div> 
          <div>
            <label className="labelcss" htmlFor='bitistarihi'>Bitiş Tarihi</label>
              <input className="inputcss" type="text" placeholder="Bitiş Tarihi" name="bitistarihi" onChange={(event) => { setBitistarihi(event.target.value); }} />
          </div>
        </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Aktif Lig :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setAktiflig(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Aktif Lig :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setAktiflig(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Is Deleted :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setIsDeleted(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Is Deleted :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setIsDeleted(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Salı :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setSali(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Salı :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setSali(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Pazartesi :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPazartesi(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Pazartesi :True</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPazartesi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Çarşamba : True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setCarsamba(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Çarşamba :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setCarsamba(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Persembe :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPersembe(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Perşembe :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPersembe(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Cuma :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setCuma(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Cuma :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setCuma(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Cumartesi :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setCumartesi(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Cumartesi :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setCumartesi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Pazar :True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPazar(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Pazar :False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPazar(event.target.value); }} />
            </div>
          </div>
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <button className='listele-button listele-button-success' onClick={createFikturFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default createFikstur
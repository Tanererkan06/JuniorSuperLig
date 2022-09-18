import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateLigler } from '../../../../redux-new/actions/ligler';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LiglerService from "../../../../services-new/LiglerService";
import Multiselect from "react-widgets/Multiselect";
import AuthService from "../../../../services-socket/auth.service";
import DropdownList from "react-widgets/DropdownList";
function UpdateLigler(props) {
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
    const [ligAdi, setLigAdi] = useState("");
    const [sehir, setSehir] = useState("");
    const [published, setPublished] = useState(true);

    const sehirler = useSelector(state => state.sehir);
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllSehir());
    }, []);

    useEffect(() => {
      LiglerService.getById(id).then(response => {
            setLigAdi(response.data.ligadi);
            setSehir(response.data.sehir);
            setPublished(response.data.published);
        });
    }, [])


    // Fonksiyon tanımlamaları
    const sehirFunction = (value) => {
      setSehir(value)
      const data = { sehir: value.sehiradi};
      dispatch(updateLigler({ id: props.id, data}))
    }

    const updateLiglerFunc = () => {
          const ligadi = ligAdi;
          const data = {ligadi, sehir, published};
          dispatch(updateLigler({id: props.id, data}));
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
           <label className="labelcss" htmlFor='ligAdi'>Lig Adı</label>
            <input className="inputcss" type="text" placeholder="Lig Adı" name="ligAdi" value={ligAdi} onChange={(event) => { setLigAdi(event.target.value); }} />
          </div>
          <div>
           <label className="labelcss" htmlFor='sehirAdi'>Şehir Adı</label>
           <DropdownList
                data={sehirler}
                dataKey='id'
                textField='sehiradi'
                value={sehir}
                onChange={(value) => { sehirFunction(value)}}
              />
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
            <button className='listele-button listele-button-success' onClick={updateLiglerFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateLigler
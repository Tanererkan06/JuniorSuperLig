import { useEffect, useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createFiksturTakim } from '../../../../redux-new/actions/fiksturTakim';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

function DashboardFiksturTakimTanimlamaEkrani(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();
  const navigate = useHistory();


  const notify = () => toast.success('Fikstür Takım eklendi!', {
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
    const [takimId, setTakimId] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [published, setPublished] = useState(true);

    const ligler = useSelector(state => state.ligler);
    const takimlar = useSelector(state => state.takim);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllLigler());
    }, []);

    useEffect(() => {
      dispatch(getAllTakim());
    }, []);

    // Fonksiyon tanımlamaları
    const liglerFunction = (value) => {
      // //console.log("LIGLERE GELEN VALUE: ", value.id);
      setLigId(value.id)
    }

    const takimFunction = (value) => {
      // //console.log("TAKIMA GELEN VALUE: ", value._id);
      setTakimId(value._id)
    }

 
    const createFikturTakimFunc = () => {
          const data = { ligid: ligId, takimid: takimId, IsDeleted: isDeleted, published };
          dispatch(createFiksturTakim(data));
          notify();
          setTimeout(() => {
            // props.close();
            // window.location.reload(false);
            navigate.push('/dashboardadmin');
          }, 4500);
    }

  return (
    <>
        <form className="formcss">
        <div className="div2">
          
          <div className='div2'>
            <div>
            <label className="labelcss" htmlFor='ligId'>Lig</label>
               <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                defaultValue={'Ligi seçin'}
                onChange={(value) => { liglerFunction(value)}}
              />
          </div> 
          <div>
          <label className="labelcss" htmlFor='takimId'>Takım</label>
            {/* <Multiselect
              data={takimlar}
              dataKey="id"
              textField="adi"
              // defaultValue={'Takım seçin'}
              onChange={(value) => { takimFunction(value)}}
            /> */}
            <DropdownList
                data={takimlar}
                dataKey='id'
                textField='adi'
                defaultValue={'Takımı seçin'}
                onChange={(value) => { takimFunction(value)}}
              />
          </div>
        </div>
        </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Is Deleted :True</label>
                <input type="radio" id="true" name="published1" placeholder="True" value="true" onChange={(event) => { setIsDeleted(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Is Deleted :False</label>
                <input type="radio" id="false" name="published1" placeholder="False" value="false" onChange={(event) => { setIsDeleted(event.target.value); }} />
            </div>
          </div>
          {/* <div className="div2">
            <div>
                <label htmlFor="true">Published :True</label>
                <input type="radio" id="true" name="published2" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published  :False</label>
                <input type="radio" id="false" name="published2" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
          <ToastContainer />
            <button className='listele-button listele-button-success' onClick={createFikturTakimFunc}>Kaydet</button>
            {/* <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button> */}
        </div>
    </>
    
  )
}

export default DashboardFiksturTakimTanimlamaEkrani
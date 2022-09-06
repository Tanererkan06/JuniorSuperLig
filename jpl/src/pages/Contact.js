import { useEffect, useState } from 'react'
import '../assets/css/style.css';
import '../assets/css/style.css.map';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import '../Dashboard/App.css';
import '../Dashboard/Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../redux-new/actions/contact'
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
    const dispatch = useDispatch();

    const [isim, setIsim] = useState('');
    const [telefon, setTelefon] = useState('');
    const [eposta, setEposta] = useState('');
    const [konu, setKonu] = useState('');
    const [mesaj, setMesaj] = useState('');

    const notify = () => toast.success('Mesaj başarıyla gönderildi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const gonderFunction = () => {
        const data = { isim: isim, telefon: telefon, eposta: eposta, konu: konu, mesaj: mesaj };
        console.log("DATA: ", data);
        dispatch(createContact(data));
        alert("Mesaj başarıyla gönderildi!")
        notify();
    }

    return (
        <div>
            <Header />
            <Slider />

            <div id="news" className="news">
                <div className="container" style={{ marginTop: "20px" }}>
                    <form className="formcss">
                    <h1>İletişim Bilgilerimiz</h1>
                        <div className="div2">
                            <div className='div2'>
                                <label className="labelcss" htmlFor="adi">Adres</label>
                                <label className="labelcss" htmlFor="adi">Adres</label>
                                <label className="labelcss" htmlFor="yorum">Telefon</label>
                                <label className="labelcss" htmlFor="yorum">Telefon</label>
                            </div>
                            <div>
                            <label className="labelcss" htmlFor="yorum">Harita</label>
                            </div>
                        </div>
                        
                    </form>
                    <form className="formcss">
                    <h1>İletişim Formu</h1>
                        <div className="div2">
                            <div>
                                <label className="labelcss" htmlFor="adi">İsminiz</label>
                                <input className="inputcss" type="text" placeholder="İsminiz" name="isim" onChange={(event) => setIsim(event.target.value)} />
                            </div>
                            <div>
                                <label className="labelcss" htmlFor="yorum">Telefon</label>
                                <input className="inputcss" type="text" placeholder="Telefon" name="telefon" onChange={(event) => setTelefon(event.target.value)} />
                            </div>
                        </div>
                        <div className="div2">
                            <div>
                                <label className="labelcss" htmlFor="macTarihi">E-posta</label>
                                <input className="inputcss" type="email" placeholder="E-posta" name="eposta" onChange={(event) => setEposta(event.target.value)}/>
                            </div>
                            <div>
                                <label className="labelcss" htmlFor="macSaati">Konu</label>
                                <input className="inputcss" type="text" placeholder="Konu" name="konu" onChange={(event) => setKonu(event.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <label className="labelcss" htmlFor="macTarihi">Mesajınınz</label>
                            <input className="inputcss" type="text" placeholder="Mesajınız" name="mesaj" onChange={(event) => setMesaj(event.target.value)}/>
                        </div>



                        <div >
                            <button className='listele-button listele-button-success' onClick={() => gonderFunction()} style={{ float: 'right' }}>Gönder</button>
                        </div>
                    </form>
                <ToastContainer />



                </div>
            </div>
            <Footer />
        </div>
    )
}

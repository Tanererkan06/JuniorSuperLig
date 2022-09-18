import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from '../../redux-new/actions/contact'

const Contact = () => {
  const dispatch = useDispatch();
  const { contactInfo } = useAuth();

  const activeSehir = useSelector(state => state.currentSehir.currentSehir);

  const [isim, setIsim] = useState('');
  const [telefon, setTelefon] = useState('');
  const [eposta, setEposta] = useState('');
  const [sehir, setSehir] = useState(activeSehir);
  const [konu, setKonu] = useState('');
  const [mesaj, setMesaj] = useState('');
  const [published, setPublished] = useState(true);

  const gonderFunction = () => {
    const data = { isim: isim, telefon: telefon, sehir, eposta: eposta, konu: konu, mesaj: mesaj, published };
    dispatch(createContact(data));
    alert("Mesaj başarıyla gönderildi!")
    // notify();
}

  return (
    <div id="contact" className="contact">
      <div>
        <div className="backText">
          <h1>İletişim</h1>
        </div>
        <Container>
          <div className="sub-heading border-end border-1 border-light pe-3 text-end">
            <span>İletişim</span>
            <p>İletişim bilgilerimize buradan ulaşabilirsiniz.</p>
          </div>
          <div className="row column-reverse align-items-center py-5">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 py-4">
              <div className="responsive75">
                <div className="border-bottom d-flex align-items-center justify-content-between">
                  <h3>Bilgilerimiz</h3>
                  <div>
                    <a href="https://www.facebook.com/juniorsuperlig" target="_blank"><AiFillFacebook className='mx-2 fs-3'/></a>
                    <a href="https://www.instagram.com/juniorsuperlig/" target="_blank"><AiFillInstagram className='mx-2 fs-3'/></a>
                    <a href="https://www.youtube.com/channel/UCSfk2ZKXQmYWdEsoVoLk4Lg" target="_blank"><AiFillYoutube className='mx-2 fs-3'/></a> 
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                    {/* <h5>Home</h5> */}
                    <p>
                      {contactInfo?.address
                        ? contactInfo?.address
                        : "Yahyalar, Ankara Cd. No:73, 54100 Adapazarı/Sakarya"}
                    </p>
                  </div>
                  {/* <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                    <h5>Our Process</h5>
                    <p>News / Blogs</p>
                    <button className="submitBtn">Visit Now</button>
                  </div> */}
                </div>
                <div className="border-bottom">
                  <h3>İletişim</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between pt-3 contactResponsive">
                  <p>
                    <span>
                      <IoCall className="me-2" />
                    </span>
                    {contactInfo?.primary
                      ? contactInfo?.primary
                      : "0530 833 42 54"}
                  </p>
                  <p>
                    <span>
                      <FaEnvelope className="me-2" />
                    </span>
                    {contactInfo?.secondary
                      ? contactInfo?.secondary
                      : "info@juniorsuperlig.com"}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 py-4">
              <div className="contactForm">
                <form>
                  <div className="mb-4">
                    <label className="d-block">Adı Soyadı</label>
                    <input type="text" name="" id="" onChange={(event) => setIsim(event.target.value)}/>
                  </div>
                  <div className="mb-4">
                    <label className="d-block">Telefon</label>
                    <input type="text" name="" id="" onChange={(event) => setTelefon(event.target.value)}/>
                  </div>
                  <div className="mb-4">
                    <label className="d-block">Email Adresi</label>
                    <input type="text" name="" id="" onChange={(event) => setEposta(event.target.value)}/>
                  </div>
                  <div className="mb-4">
                    <label className="d-block">Konu</label>
                    <input type="text" name="" id="" onChange={(event) => setKonu(event.target.value)}/>
                  </div>
                  <div className="mb-4">
                    <label className="d-block">Mesaj</label>
                    <textarea name="" id="" rows="auto" onChange={(event) => setMesaj(event.target.value)}></textarea>
                  </div>
                  <input type="submit" className="submitBtn" onClick={() => gonderFunction()} value="Gönder" />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;

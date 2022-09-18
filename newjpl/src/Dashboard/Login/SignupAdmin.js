import React, { useState, useEffect, useRef } from "react";
import { isEmail } from "validator";
import AuthService from "../../services-socket/auth.service";
import '../Form.css'
import './login.css'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { getAllSehir } from '../../redux-new/actions/sehir';
import Modal from 'react-modal';
//Benim sonradan eklediklerim
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import axios from 'axios';

const customStyles = {
    content: {
        // top: '50%',
        // left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // color: 'black',
        // width: '60%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
    }
};

const SignupAdmin = () => {
    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();
    const sehirler = useSelector(state => state.sehir);

    useEffect(() => {
        dispatch(getAllSehir());
    }, []);

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const [isim, setIsim] = useState("");
    const [sehir, setSehir] = useState("");
    const [telefon, setTelefon] = useState("");
    const [otp, setOtp] = useState("");
    const [username, setUsername] = useState("");
    // const [roles, setRoles] = useState(["User"]);
    const [roles, setRoles] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const [verify, setVerify] = useState();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    // const onChangeRoles = (e) => {
    //     const roles = e.target.value;
    //     setRoles(roles);
    // };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();

    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }

      if (form.checkValidity() === true) {
        AuthService.register(username, email, password, otp, isim, sehir, telefon, roles
            ).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
      }

      setValidated(true);
    };


    /*db.ROLES = ["User", "Admin", "Gozcu", "Veli","Hakem","IlYoneticisi","Sponsor"]; */

    const [show, setShow] = useState(false);

    let roleData = [
        { id: "admin", name: 'admin' },
        { id: "Kullanıcı", name: 'user' },
        { id: "Veli", name: 'veli' },
        { id: "Gözlemci", name: 'gozcu' },
        // { id: "Hakem", name: 'hakem' },
        { id: "İl Temsilcisi", name: 'ilYoneticisi' },  
        { id: "Sponsor", name: 'sponsor' },
        { id: "Veli ve Antrenör", name: 'veliVeAntrenor' }, // role bulunamadı hatası veriyor
        { id: "Antrenör", name: 'antrenor' }, // role bulunamadı hatası veriyor
    ];

    let sehirData = [
        { id: "Istanbul", name: "Istanbul" },
        { id: "Sakarya", name: "Sakarya" },
    ];

    const roleFunction = (value) => {
        setRoles(value.name);
    }

    const sehirFunction = (value) => {
        setSehir(value.sehiradi);
    }

    //Modal tanımlamaları
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }

    // const sendOTP = (telefon) => {
    //     // axios.post("http://juniorsuperlig.com:8000/user/vertify", {
    //     axios.post("http://localhost:8000/user/vertify", {
    //         telno: telefon
    //     }).then(response => {
    //         setVerify(response.data);
    //     })
    // }

    // const check = () => {
    //     if (verify == otp) {
    //         if (document.querySelectorAll('input[type="checkbox"]:checked').length == 1) {
    //             setShow(true);
    //         }
    //         setShow2(true);
    //     }
    //     setShow1(true);
    // }

    return (
        <div className="login">
            <ToastContainer className="p-3" position="top-end">
                <Toast onClose={() => setShow1(false)} show={show1} delay={4000} autohide bg="dark" position="top-end">
                    <Toast.Header>
                        <img
                        src={require('../../utilities/images/logo/logo-junior.png')}
                        className="rounded me-2"
                        alt=""
                        style={{ width: '20px', height: '20px' }}
                        />
                        <strong className="me-auto">Junior Süper Lig</strong>
                        <small>Şimdi</small>
                    </Toast.Header>
                    <Toast.Body>Doğrulama kodu hatalı, lütfen kontrol ediniz!</Toast.Body>
                </Toast>
            </ToastContainer>
            <ToastContainer className="p-3" position="top-end">
                <Toast onClose={() => setShow2(false)} show={show2} delay={5000} autohide bg="dark">
                    <Toast.Header>
                        <img
                        src={require('../../utilities/images/logo/logo-junior.png')}
                        className="rounded me-2"
                        alt=""
                        style={{ width: '20px', height: '20px' }}
                        />
                        <strong className="me-auto">Junior Süper Lig</strong>
                        <small>Şimdi</small>
                    </Toast.Header>
                    <Toast.Body>Kayıt olabilmek için gizlilik sözleşmesini kabul edip onaylamanız gerekmektedir!</Toast.Body>
                </Toast>
            </ToastContainer>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="mx-auto" style={{ width: "50%", }}  >
                <Image
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    roundedCircle="true"
                    className="profile-img-card"
                />
                {!successful && (
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>Adı ve Soyadı</Form.Label>
                            <Form.Control type="text" placeholder="Adı ve Soyadı" name="adiSoyadi"
                                value={isim}
                                onChange={(event) => setIsim(event.target.value)}
                                // validations={[required]} 
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Şehir</Form.Label>
                            <label className="labelcss" htmlFor="adivesoyadi"></label>
                            <DropdownList
                                data={sehirler}
                                dataKey='id'
                                textField='sehiradi'
                                defaultValue={'Şehir seçin'}
                                onChange={(value) => { sehirFunction(value) }}
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Kullanıcı Adı</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Kullanıcı Adı"
                                value={username}
                                onChange={onChangeUsername}
                                // validations={[required, vusername]}
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={onChangeEmail}
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Şifre"
                                value={password}
                                onChange={onChangePassword}
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Üyelik Tipi</Form.Label>
                            <DropdownList
                                data={roleData}
                                dataKey='id'
                                textField='id'
                                defaultValue={'Rol seçin'}
                                onChange={(value) => { roleFunction(value) }}
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefon Numarası</Form.Label>
                            <Form.Control
                                type="text"
                                name="tel_no"
                                placeholder="905555555555"
                                value={telefon}
                                onChange={(event) => setTelefon(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                            {/* <Button onClick={() => sendOTP(telefon)} className="mt-2">Doğrulama Kodu Gönder</Button> */}
                        </Form.Group>

                        {/* <Form.Group className="mb-3">
                            <Form.Label>Doğrulama Kodu</Form.Label>
                            <Form.Control
                                type="text"
                                name="otp"
                                placeholder="Doğrulama Kodu"
                                value={otp}
                                onChange={(event) => setOtp(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback>İyi görünüyor!</Form.Control.Feedback>
                        </Form.Group> */}


                        {/* <Form.Group className="mb-3">
                            <Form.Label htmlFor="gizlilikSozlesmesi" onClick={openModal}>Gizlilik Sözleşmesi</Form.Label>
                            <Form.Check
                                required
                                // label="Agree to terms and conditions"
                                feedback="Kayıt olmadan önce sözleşmeyi okuyup kabul etmelisin."
                                feedbackType="invalid"
                            />
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Gizlilik Sözleşmesi</h2>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum autem quos quibusdam a dolores, incidunt totam quod ipsum ea exercitationem hic accusantium corporis praesentium consequuntur ratione, nam possimus beatae laboriosam aut tenetur repellendus eaque at laborum saepe. Necessitatibus molestiae impedit ea sapiente inventore! Voluptate debitis quis libero odio exercitationem voluptatum!</p>
                                </div>
                                <Button className="buttoncss-login" onClick={closeModal} >Kapat</Button>
                            </Modal>
                        </Form.Group> */}
                        <Form.Group>
                            <Button className="mb-3" type="submit">Kayıt Ol</Button>
                        </Form.Group>
                        {/* {
                            show
                                ?
                                <>
                                    <Form.Group>
                                        <Button className="mb-3" type="submit">Kayıt Ol</Button>
                                    </Form.Group>
                                </>
                                : 
                                <>
                                    <div className="signup-warning"><b style={{ display: 'inline-block' }}>Uyarı:</b> Kayıt ol butonunu görebilmek için gizlilik sözleşmesini okuyup, kabul etmeniz gerekmektedir.</div>
                                    <Button className="mb-3" onClick={() => check()}>Doğrula</Button>
                                </>
                        } */}
                    </div>
                )}
                {message && (
                    <Form.Group>
                        <div
                            className={
                                successful ? "alert alert-success" : "alert alert-danger"
                            }
                            role="alert"
                        >
                            {message}
                        </div>
                    </Form.Group>
                )}
                {/* <Form.Check style={{ display: "none" }} ref={checkBtn} /> */}
            </Form>
        </div>
    );
};

export default SignupAdmin;


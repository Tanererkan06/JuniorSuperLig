
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services-socket/auth.service";
import '../Form.css'
import './login.css'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      width: '60%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }
  };

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="invalid-feedback d-block">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="invalid-feedback d-block">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="invalid-feedback d-block">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Signup = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    // const [roles, setRoles] = useState(["User"]);
    const [roles, setRoles] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

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

    const onChangeRoles = (e) => {
        const roles = e.target.value;
        setRoles(roles);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password,roles 
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
    };

/*db.ROLES = ["User", "Admin", "Gozcu", "Veli","Hakem","IlYoneticisi","Sponsor"]; */

    const [show, setShow] = useState(false);

    let roleData = [
        { id: "Kullanıcı", name: "user" },
        { id: "Veli", name: "veli" },
        { id: "Sponsor", name: "sponsor" },
        
    ];

    const roleFunction = (value) => {
        // console.log("ROLE GELEN: ", value.name);
        setRoles(value.name);
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

    const [counter, setCounter] = useState(0);

    const checkCounter = (event) => {
        if(event.target.checked == true) {
            setCounter(counter + 1);
            setShow(true);
        } else {
            setCounter(counter - 1);
            setShow(false);
        }
    }

    const checkGizlilikSozlesmesi = () => {
        if(counter == 1) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Üyelik Tipi</label>

                          
                                <DropdownList
                                    data={roleData}
                                    dataKey='id'
                                    required
                                    textField='id'
                                    defaultValue={'Rol seçin'}
                                    onChange={(value) => { roleFunction(value)}}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gizlilikSozlesmesi" className="signup-label" onClick={openModal}>Gizlilik Sözleşmesi</label>
                                <input type="checkbox" style={{ marginLeft: '10px'}} onChange={(event) => { checkCounter(event)}} />
                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Gizlilik Sözleşmesi</h2>
                                    <div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, nobis. Vero quae beatae qui. Quibusdam excepturi incidunt et, illum, aut nesciunt quasi numquam possimus suscipit, quod voluptas odio. Cumque animi alias, quod culpa pariatur sed consectetur explicabo laudantium facere doloremque est asperiores assumenda odio sunt, temporibus incidunt voluptatibus aliquam hic non nihil earum beatae soluta. Officiis eos impedit possimus. Omnis voluptatum beatae hic, esse quisquam adipisci quam, laborum quae commodi nostrum minus sunt totam mollitia eum ut iste! Animi, nulla. Pariatur cumque optio voluptate provident illum, possimus dolore et accusamus tempora at excepturi neque odio voluptatum vitae voluptates totam suscipit modi ut maiores quae aperiam laboriosam nisi! Magnam rerum veritatis ratione unde adipisci exercitationem voluptate, corrupti a neque tenetur, sequi aspernatur odio esse quis repellat. Iste, quod ut officiis sequi laudantium est optio labore sed voluptatem reprehenderit velit eveniet? Possimus ullam ut rem exercitationem labore maiores accusamus quisquam veniam et deleniti. Neque autem quod molestias dolore quia cum, non ratione ipsa recusandae omnis minima voluptatibus, eius numquam sit laboriosam repellendus cupiditate itaque quas expedita id! Quae, facere eaque? Quibusdam suscipit temporibus itaque nam possimus velit quis odit nulla architecto accusamus ullam, quas facilis esse dolorem modi quaerat eveniet nisi voluptatum?</p>
                                    </div>
                                    <button onClick={closeModal} className="btn btn-primary btn-block">Kapat</button>
                                </Modal>
                            </div>
                            {
                                show
                                ?   <div className="form-group">
                                    <button className="btn btn-primary btn-block" onClick={() => checkGizlilikSozlesmesi()}>Sign Up</button>
                                    </div>
                                : <div className="signup-warning"><b style={{ display: 'inline-block'}}>Uyarı:</b> Kayıt ol butonunu görebilmek için gizlilik sözleşmesini okuyup, kabul etmeniz gerekmektedir.</div>
                            }
                            
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div
                                className={
                                    successful ? "alert alert-success" : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>

    )
}
export default Signup;
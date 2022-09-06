
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import SideBar from '../AdminPanel/components/Sidebar';
import sidebar_menu from '../AdminPanel/constants/sidebar-menu';

import AuthService from "../../services-socket/auth.service";
import '../Form.css'
import './login.css'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

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


export default function Signup() {

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

    let roleData = [
        { id: "Admin", name: 'admin' },
        { id: "User", name: 'user' },
        { id: "Veli", name: 'veli' },
        { id: "Gozcu", name: 'gozcu' },
        { id: "Hakem", name: 'hakem' },
        { id: "IlYoneticisi", name: 'ilYoneticisi' },  
        { id: "Sponsor", name: 'sponsor' },
        { id: "Veli ve Antrenör", name: 'veliVeAntrenor' }, // role bulunamadı hatası veriyor
        { id: "Antrenör", name: 'antrenor' }, // role bulunamadı hatası veriyor
    ];

    const roleFunction = (value) => {
        // console.log("ROLE GELEN: ", value.name);
        setRoles(value.name);
    }

    return (
    <div className='dashboard-container'>
      <SideBar menu={sidebar_menu} />

      <div className='dashboard-body'>
      <div className="card-login-signup">
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
                                <label htmlFor="password">Role</label>

                                {/* <Input
                                    type="text"
                                    className="form-control"
                                    name="roles"
                                    value={roles}
                                     onChange={onChangeRoles} 
                                /> */}
                                <DropdownList
                                    data={roleData}
                                    dataKey='id'
                                    textField='id'
                                    defaultValue={'Rol seçin'}
                                    onChange={(value) => { roleFunction(value)}}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
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
        </div>
    </div>

    )
}

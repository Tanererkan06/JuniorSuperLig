import React, { useState, useRef, useEffect } from "react";
import './login.css';
import AuthService from "../../services-socket/auth.service";
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

//Benim sonradan eklediklerim
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const history = useHistory();
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const roller = ["ROLE_USER", "ROLE_ADMIN", "ROLE_GOZCU", "ROLE_VELI", "ROLE_HAKEM", "ROLE_ILYONETICISI", "ROLE_SPONSOR", "ROLE_VELIVEANTRENOR", "ROLE_ANTRENOR"];


  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

      AuthService.login(username, password).then(
        (data) => {

          const resdata = data;

          Object.values(roller).forEach(val => {

            if (roller[val] === resdata.roles[val]) {
              const yetkilendirmerolu = JSON.stringify(resdata.roles)
              // navigate("/profile");

              // const roller = ["ROLE_USER", "ROLE_ADMIN", "ROLE_GOZCU", "ROLE_VELI", "ROLE_HAKEM", "ROLE_ILYONETICISI", "ROLE_SPONSOR", "ROLE_VELIVEANTRENOR", "ROLE_ANTRENOR"];

              if (yetkilendirmerolu == `["ROLE_USER"]`) {
                history.push("/dashboarduser");
                window.location.reload();
              }
              if (yetkilendirmerolu == `["ROLE_ADMIN"]`) {
                history.push("/dashboardadmin");
                window.location.reload();
              }
              if (yetkilendirmerolu == `["ROLE_GOZCU"]`) {
                history.push("/dashboardgozlemci");
                window.location.reload();
              }
              if (yetkilendirmerolu == `["ROLE_VELI"]`) {
                history.push("/dashboardveli");
                window.location.reload();
              }
              if (yetkilendirmerolu == `["ROLE_ILYONETICISI"]`) {
                history.push("/dashboardiltemsilcisi");
                window.location.reload();
              }
              if (yetkilendirmerolu == `["ROLE_SPONSOR"]`) {
                history.push("/dashboardsponsor");
                window.location.reload();
              }
              if (yetkilendirmerolu == `["ROLE_VELIVEANTRENOR"]`) // dashboardı eksik
              {
                history.push("/dashboardveliveantrenor");
                window.location.reload();

              }
              if (yetkilendirmerolu == `["ROLE_ANTRENOR"]`) {
                history.push("/dashboardantrenor");
                window.location.reload();
              }
            }
            else {
              //console.log("Hatalı Role" );
            }
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
  };

  return (
    <div className="login">
        <Form onSubmit={handleLogin} ref={form} className="mx-auto" style={{width:"50%",}}  >
          <Image
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            roundedCircle="true"
            className="profile-img-card"
          />
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control type="text" placeholder="Kullanıcı Adı" name="username"
                  value={username} onChange={onChangeUsername}
                  validations={[required]}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Şifre</Form.Label>
              <Form.Control type="password" placeholder="Şifre" name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {message && (
                <div>
                  <div  role="alert">
                    {message}
                  </div>
                </div>
              )}
              <Form.Check type="checkbox" style={{ display: "none" }} label="Check me out" ref={checkBtn} />
           
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
            {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )} Giriş Yap
            </Button>
            
          </Form>

    </div>
  );
};

export default Login;


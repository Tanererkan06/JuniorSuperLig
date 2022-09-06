import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services-socket/auth.service";

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
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

 
  const roller = ["ROLE_USER", "ROLE_ADMIN", "ROLE_GOZCU", "ROLE_VELI", "ROLE_HAKEM", "ROLE_ILYONETICISI", "ROLE_SPONSOR", "ROLE_VELIVEANTRENOR", "ROLE_ANTRENOR"];

  const navigate = useNavigate();

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

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        (data) => {

          const resdata = data;
        
  
       

        Object.values(roller).forEach(val  => {

          if(roller[val ]===resdata.roles[val])
          {
           
           // console.log(roller[val ]);
           const yetkilendirmerolu = JSON.stringify(resdata.roles)
            // console.log(yetkilendirmerolu);
            // console.log(`["ROLE_USER"]`);
            // navigate("/profile");

// const roller = ["ROLE_USER", "ROLE_ADMIN", "ROLE_GOZCU", "ROLE_VELI", "ROLE_HAKEM", "ROLE_ILYONETICISI", "ROLE_SPONSOR", "ROLE_VELIVEANTRENOR", "ROLE_ANTRENOR"];
           
            if(yetkilendirmerolu == `["ROLE_USER"]`)
            {
              navigate("/dashboarduser");
              window.location.reload();
            }
            if(yetkilendirmerolu ==  `["ROLE_ADMIN"]`)
            {
              navigate("/dashboardadmin");
              window.location.reload();
            }
            if(yetkilendirmerolu ==  `["ROLE_GOZCU"]`)
            {
              navigate("/dashboardgozlemci");
              window.location.reload();
            }
            if(yetkilendirmerolu ==  `["ROLE_VELI"]`)
            {
              navigate("/dashboardveli");
              window.location.reload();
            }
            if(yetkilendirmerolu ==  `["ROLE_HAKEM"]`) // dashboardı eksik
            {
              navigate("/dashboardhakem");
              window.location.reload();
            }
            if(yetkilendirmerolu ==  `["ROLE_ILYONETICISI"]`)
            {
              navigate("/dashboardiltemsilcisi");
              window.location.reload();
            }
            if(yetkilendirmerolu ==  `["ROLE_SPONSOR"]`)
            {
              navigate("/dashboardsponsor");
              window.location.reload();
            }
            if(yetkilendirmerolu ==  `["ROLE_VELIVEANTRENOR"]`) // dashboardı eksik
            {
              navigate("/dashboardveliveantrenor");
              window.location.reload();

            }
            if(yetkilendirmerolu ==  `["ROLE_ANTRENOR"]`)
            {
              navigate("/dashboardantrenor");
              window.location.reload();
            }
          }
          else
          {
            console.log("Hatalı Role" )
         
          }
         // console.log(key, roller[key]);
        });
         /*   if (yetkilendirmerolu === data.roles["ROLE_SPONSOR"]) {
            console.log("dataaaa:" + JSON.stringify(data))
          }
          else {
            console.log("yanlış role:")
            // console.log("dataaaa:"+JSON.stringify(data.roles))
            //
          }   */
          /*  
           window.location.reload(); */
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
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
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
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
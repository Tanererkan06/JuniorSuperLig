import axios from "axios";

// const API_URL = "localhost:8000/api/auth/";
const API_URL = "http://localhost:8000/api/auth/";
               //localhost:8000/api/auth/signup

const register = (username, email, password, otp, isim, sehir, telefon, roles
  ) => {
    const data = {
      username,
      email,
      password,
      otp,
      isim,
      sehir,
      telefon,
      roles:[roles] 
    }
  // return axios.post("localhost:8000/api/auth/signup", data);
  return axios.post("http://localhost:8000/api/auth/signup", data);
  
  ////console.log(data)
  //axios.post("localhost:8000/api/auth/signup",data);
};

const login = (username, password) => {
  return axios
    // .post("localhost:8000/api/auth/signin", {
    .post("http://localhost:8000/api/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        console.log("GIRILEN VERI: ", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;

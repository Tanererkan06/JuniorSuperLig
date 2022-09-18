import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getGozcuBoard = () => {
  return axios.get(API_URL + "gozcu", { headers: authHeader() });
};

const getVeliBoard = () => {
  return axios.get(API_URL + "veli", { headers: authHeader() });
};

const getHakemBoard = () => {
  return axios.get(API_URL + "hakem", { headers: authHeader() });
};

const getIlYoneticisiBoard = () => {
  return axios.get(API_URL + "ilYoneticisi", { headers: authHeader() });
};

const getSponsorBoard = () => {
  return axios.get(API_URL + "sponsor", { headers: authHeader() });
};

const userService = {
/*   getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard, 
  */

  //duzeltilecek

  getPublicContent,
  getUserBoard,
  getAdminBoard,
  getGozcuBoard,
  getVeliBoard,
  getHakemBoard,
  getIlYoneticisiBoard,
  getSponsorBoard,
};

export default userService
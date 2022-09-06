import http from "../http-common";

const getAll = () => {
  return http.get("/oyuncukonum");
};

const getById = id => {
  return http.get(`/oyuncukonum/${id}`);
};

const getAllPublished = () => {
  return http.get("/oyuncukonum/published");
};

const create = data => {
  return http.post("/oyuncukonum", data);
};

const update = (id, data) => {
  return http.put(`/oyuncukonum/${id}`, data);
};

const remove = id => {
  return http.delete(`/oyuncukonum/${id}`);
};

const removeAll = () => {
  return http.delete(`/oyuncukonum`);
};

const OyunKonumService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default OyunKonumService;
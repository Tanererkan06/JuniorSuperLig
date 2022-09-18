import http from "../http-common";

const getAll = () => {
  return http.get("/bannerreklam");
};

const getById = id => {
  return http.get(`/bannerreklam/${id}`);
};

const getAllPublished = () => {
  return http.get("/bannerreklam/published");
};

const create = data => {
  return http.post("/bannerreklam", data);
};

const update = (id, data) => {
  return http.put(`/bannerreklam/${id}`, data);
};

const remove = id => {
  return http.delete(`/bannerreklam/${id}`);
};

const removeAll = () => {
  return http.delete(`/bannerreklam`);
};

const BannerReklamService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default BannerReklamService;
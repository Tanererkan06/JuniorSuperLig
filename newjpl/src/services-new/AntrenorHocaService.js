import http from "../http-common";

const getAll = () => {
  return http.get("/antrenorhoca");
};

const getById = id => {
  return http.get(`/antrenorhoca/${id}`);
};

const getAllPublished = () => {
  return http.get("/antrenorhoca/published");
};

const create = data => {
  return http.post("/antrenorhoca", data);
};

const update = (id, data) => {
  return http.put(`/antrenorhoca/${id}`, data);
};

const remove = id => {
  return http.delete(`/antrenorhoca/${id}`);
};

const removeAll = () => {
  return http.delete(`/antrenorhoca`);
};

const AntrenorHocaService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default AntrenorHocaService;
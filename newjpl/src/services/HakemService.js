import http from "../http-common";

const getAll = () => {
  return http.get("/hakem");
};

const getById = id => {
  return http.get(`/hakem/${id}`);
};

const getAllPublished = () => {
  return http.get("/hakem/published");
};

const create = data => {
  return http.post("/hakem", data);
};

const update = (id, data) => {
  return http.put(`/hakem/${id}`, data);
};

const remove = id => {
  return http.delete(`/hakem/${id}`);
};

const removeAll = () => {
  return http.delete(`/hakem`);
};

const HakemService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default HakemService;
import http from "../http-common";

const getAll = () => {
  return http.get("/sehir");
};

const getById = id => {
  return http.get(`/sehir/${id}`);
};

const getAllPublished = () => {
  return http.get("/sehir/published");
};

const create = data => {
  return http.post("/sehir", data);
};

const update = (id, data) => {
  return http.put(`/sehir/${id}`, data);
};

const remove = id => {
  return http.delete(`/sehir/${id}`);
};

const removeAll = () => {
  return http.delete(`/sehir`);
};

const SehirService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default SehirService;
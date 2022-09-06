import http from "../http-common";

const getAll = () => {
  return http.get("/puandurumu");
};

const getById = id => {
  return http.get(`/puandurumu/${id}`);
};

const getAllPublished = () => {
  return http.get("/puandurumu/published");
};

const create = data => {
  return http.post("/puandurumu", data);
};

const update = (id, data) => {
  return http.put(`/puandurumu/${id}`, data);
};

const remove = id => {
  return http.delete(`/puandurumu/${id}`);
};

const removeAll = () => {
  return http.delete(`/puandurumu`);
};

const PuanDurumuService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default PuanDurumuService;
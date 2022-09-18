import http from "../http-common";

const getAll = () => {
  return http.get("/takim");
};

const getById = id => {
  return http.get(`/takim/${id}`);
};

const getAllPublished = () => {
  return http.get("/takim/published");
};

const create = data => {
  return http.post("/takim", data);
};

const update = (id, data) => {
  return http.put(`/takim/${id}`, data);
};

const remove = id => {
  return http.delete(`/takim/${id}`);
};

const removeAll = () => {
  return http.delete(`/takim`);
};

const TakimService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default TakimService;
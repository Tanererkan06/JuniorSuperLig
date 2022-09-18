import http from "../http-common";

const getAll = () => {
  return http.get("/ligler");
};

const getById = id => {
  return http.get(`/ligler/${id}`);
};

const getAllPublished = () => {
  return http.get("/ligler/published");
};

const create = data => {
  return http.post("/ligler", data);
};

const update = (id, data) => {
  return http.put(`/ligler/${id}`, data);
};

const remove = id => {
  return http.delete(`/ligler/${id}`);
};

const removeAll = () => {
  return http.delete(`/ligler`);
};

const LiglerService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default LiglerService;
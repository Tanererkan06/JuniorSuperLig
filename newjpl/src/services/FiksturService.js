import http from "../http-common";

const getAll = () => {
  return http.get("/fikstur");
};

const getById = id => {
  return http.get(`/fikstur/${id}`);
};

const getAllPublished = () => {
  return http.get("/fikstur/published");
};

const create = data => {
  return http.post("/fikstur", data);
};

const update = (id, data) => {
  return http.put(`/fikstur/${id}`, data);
};

const remove = id => {
  return http.delete(`/fikstur/${id}`);
};

const removeAll = () => {
  return http.delete(`/fikstur`);
};

const FiksturService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default FiksturService;
import http from "../http-common";

const getAll = () => {
  return http.get("/fiksturTakim");
};

const getById = id => {
  return http.get(`/fiksturTakim/${id}`);
};

const getAllPublished = () => {
  return http.get("/fiksturTakim/published");
};

const create = data => {
  return http.post("/fiksturTakim", data);
};

const update = (id, data) => {
  return http.put(`/fiksturTakim/${id}`, data);
};

const remove = id => {
  return http.delete(`/fiksturTakim/${id}`);
};

const removeAll = () => {
  return http.delete(`/fiksturTakim`);
};

const FiksturTakimService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default FiksturTakimService;
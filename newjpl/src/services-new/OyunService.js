import http from "../http-common";

const getAll = () => {
  return http.get("/oyun");
};

const getById = id => {
  return http.get(`/oyun/${id}`);
};

const getAllPublished = () => {
  return http.get("/oyun/published");
};

const create = data => {
  return http.post("/oyun", data);
};

const update = (id, data) => {
  return http.put(`/oyun/${id}`, data);
};

const remove = id => {
  return http.delete(`/oyun/${id}`);
};

const removeAll = () => {
  return http.delete(`/oyun`);
};

const OyunService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default OyunService;
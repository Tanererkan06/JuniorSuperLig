import http from "../http-common";

const getAll = () => {
  return http.get("/iltemsilcisi");
};

const getById = id => {
  return http.get(`/iltemsilcisi/${id}`);
};

const getAllPublished = () => {
  return http.get("/iltemsilcisi/published");
};

const create = data => {
  return http.post("/iltemsilcisi", data);
};

const update = (id, data) => {
  return http.put(`/iltemsilcisi/${id}`, data);
};

const remove = id => {
  return http.delete(`/iltemsilcisi/${id}`);
};

const removeAll = () => {
  return http.delete(`/iltemsilcisi`);
};

const IlTemsilcisiService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default IlTemsilcisiService;
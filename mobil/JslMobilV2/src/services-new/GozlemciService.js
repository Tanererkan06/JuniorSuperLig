import http from "../http-common";

const getAll = () => {
  return http.get("/gozlemci");
};

const getById = id => {
  return http.get(`/gozlemci/${id}`);
};

const getAllPublished = () => {
  return http.get("/gozlemci/published");
};

const create = data => {
  return http.post("/gozlemci", data);
};

const update = (id, data) => {
  return http.put(`/gozlemci/${id}`, data);
};

const remove = id => {
  return http.delete(`/gozlemci/${id}`);
};

const removeAll = () => {
  return http.delete(`/gozlemci`);
};

const tumGozlemciler = () => {
  return http.get('/api/test/tumgozculer');
}

const GozlemciService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
  tumGozlemciler,
};

export default GozlemciService;
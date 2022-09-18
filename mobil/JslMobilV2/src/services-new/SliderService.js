import http from "../http-common";

const getAll = () => {
  return http.get("/slider");
};

const getById = id => {
  return http.get(`/slider/${id}`);
};

const getAllPublished = () => {
  return http.get("/slider/published");
};

const create = data => {
  return http.post("/slider", data);
};

const update = (id, data) => {
  return http.put(`/slider/${id}`, data);
};

const remove = id => {
  return http.delete(`/slider/${id}`);
};

const removeAll = () => {
  return http.delete(`/slider`);
};

const SliderService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default SliderService;
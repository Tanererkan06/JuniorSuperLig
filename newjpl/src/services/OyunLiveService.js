import http from "../http-common";

const getAll = () => {
  return http.get("/oyunlive");
};

const getById = id => {
  return http.get(`/oyunlive/${id}`);
};

const getAllPublished = () => {
  return http.get("/oyunlive/published");
};

const create = data => {
  return http.post("/oyunlive", data);
};

const update = (id, data) => {
  return http.put(`/oyunlive/${id}`, data);
};

const remove = id => {
  return http.delete(`/oyunlive/${id}`);
};

const removeAll = () => {
  return http.delete(`/oyunlive`);
};

const OyunLiveService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default OyunLiveService;
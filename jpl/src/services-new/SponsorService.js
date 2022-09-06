import http from "../http-common";

const getAll = () => {
  return http.get("/sponsor");
};

const getById = id => {
  return http.get(`/sponsor/${id}`);
};

const getAllPublished = () => {
  return http.get("/sponsor/published");
};

const create = data => {
  return http.post("/sponsor", data);
};

const update = (id, data) => {
  return http.put(`/sponsor/${id}`, data);
};

const remove = id => {
  return http.delete(`/sponsor/${id}`);
};

const removeAll = () => {
  return http.delete(`/sponsor`);
};

const SponsorService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default SponsorService;
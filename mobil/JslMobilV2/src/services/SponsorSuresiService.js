import http from "../http-common";

const getAll = () => {
  return http.get("/sponsorsuresi");
};

const getById = id => {
  return http.get(`/sponsorsuresi/${id}`);
};

const getAllPublished = () => {
  return http.get("/sponsorsuresi/published");
};

const create = data => {
  return http.post("/sponsorsuresi", data);
};

const update = (id, data) => {
  return http.put(`/sponsorsuresi/${id}`, data);
};

const remove = id => {
  return http.delete(`/sponsorsuresi/${id}`);
};

const removeAll = () => {
  return http.delete(`/sponsorsuresi`);
};

const SponsorSuresiService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default SponsorSuresiService;
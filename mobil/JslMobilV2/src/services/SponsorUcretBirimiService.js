import http from "../http-common";

const getAll = () => {
  return http.get("/sponsorucretbirimi");
};

const getById = id => {
  return http.get(`/sponsorucretbirimi/${id}`);
};

const getAllPublished = () => {
  return http.get("/sponsorucretbirimi/published");
};

const create = data => {
  return http.post("/sponsorucretbirimi", data);
};

const update = (id, data) => {
  return http.put(`/sponsorucretbirimi/${id}`, data);
};

const remove = id => {
  return http.delete(`/sponsorucretbirimi/${id}`);
};

const removeAll = () => {
  return http.delete(`/sponsorucretbirimi`);
};

const SponsorUcretBirimiService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default SponsorUcretBirimiService;
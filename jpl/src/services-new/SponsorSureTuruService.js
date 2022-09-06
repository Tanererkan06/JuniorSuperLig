import http from "../http-common";

const getAll = () => {
  return http.get("/sponsorsureturu");
};

const getById = id => {
  return http.get(`/sponsorsureturu/${id}`);
};

const getAllPublished = () => {
  return http.get("/sponsorsureturu/published");
};

const create = data => {
  return http.post("/sponsorsureturu", data);
};

const update = (id, data) => {
  return http.put(`/sponsorsureturu/${id}`, data);
};

const remove = id => {
  return http.delete(`/sponsorsureturu/${id}`);
};

const removeAll = () => {
  return http.delete(`/sponsorsureturu`);
};

const SponsorSureTuruService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default SponsorSureTuruService;
import http from "../http-common";

const getAll = () => {
  return http.get("/sponsorkategori");
};

const getById = id => {
  return http.get(`/sponsorkategori/${id}`);
};

const getAllPublished = () => {
  return http.get("/sponsorkategori/published");
};

const create = data => {
  return http.post("/sponsorkategori", data);
};

const update = (id, data) => {
  return http.put(`/sponsorkategori/${id}`, data);
};

const remove = id => {
  return http.delete(`/sponsorkategori/${id}`);
};

const removeAll = () => {
  return http.delete(`/sponsorkategori`);
};

const SponsorKategoriService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default SponsorKategoriService;
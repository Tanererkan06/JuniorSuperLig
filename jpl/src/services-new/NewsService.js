import http from "../http-common";

const getAll = () => {
  return http.get("/news");
};

const getById = id => {
  return http.get(`/news/${id}`);
};

const getAllPublished = () => {
  return http.get("/news/published");
};

const create = data => {
  return http.post("/news", data);
};

const update = (id, data) => {
  return http.put(`/news/${id}`, data);
};

const remove = id => {
  return http.delete(`/news/${id}`);
};

const removeAll = () => {
  return http.delete(`/news`);
};

const NewsService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default NewsService;
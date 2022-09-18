import http from "../http-common";

const getAll = () => {
  return http.get("/news");
};

const getById = id => {
  return http.get(`/news/${id}`);
};
const get = id => {
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

const timelineAll = data => {
  return http.post(`/news/timeline/all`, data);
};

const NewsService = {
  getAll,
  getById,
  get,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
  timelineAll,
};

export default NewsService;
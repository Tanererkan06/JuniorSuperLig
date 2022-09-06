import http from "../http-common";

const getAll = () => {
  return http.get("/contact");
};

const getById = id => {
  return http.get(`/contact/${id}`);
};

const getAllPublished = () => {
  return http.get("/contact/published");
};

const create = data => {
  return http.post("/contact", data);
};

const update = (id, data) => {
  return http.put(`/contact/${id}`, data);
};

const remove = id => {
  return http.delete(`/contact/${id}`);
};

const removeAll = () => {
  return http.delete(`/contact`);
};

const ContactService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default ContactService;
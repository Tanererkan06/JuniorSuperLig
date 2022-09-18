import http from "../http-common";

const getAll = () => {
  return http.get("/veli");
};

const getById = id => {
  return http.get(`/veli/${id}`);
};

const getAllPublished = () => {
  return http.get("/veli/published");
};

const create = data => {
  return http.post("/veli", data);
};

const update = (id, data) => {
  return http.put(`/veli/${id}`, data);
};

const remove = id => {
  return http.delete(`/veli/${id}`);
};

const removeAll = () => {
  return http.delete(`/veli`);
};

const isRealPerson = (data) => {
  return http.post("/veli/gercekkisimi", data);
}

const tumVeliler = () => {
  return http.get('/api/test/tumveliler');
}

const VeliService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
  isRealPerson,
  tumVeliler,
};

export default VeliService;
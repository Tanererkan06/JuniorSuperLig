import http from "../http-common";

const getAll = () => {
  return http.get("/oyuncukarti");
};

const getById = id => {
  return http.get(`/oyuncukarti/${id}`);
};

const getAllPublished = () => {
  return http.get("/oyuncukarti/published");
};

const create = data => {
  return http.post("/oyuncukarti", data);
};

const update = (id, data) => {
  return http.put(`/oyuncukarti/${id}`, data);
};

const remove = id => {
  return http.delete(`/oyuncukarti/${id}`);
};

const removeAll = () => {
  return http.delete(`/oyuncukarti`);
};

const OyuncuKartiService = {
  getAll,
  getById,
  getAllPublished,
  create,
  update,
  remove,
  removeAll,
};

export default OyuncuKartiService;
import io from "socket.io-client";
const Fikstur =  io.connect("http://localhost:3001/Fikstur");

export default class FiksturService {
  create(payload) { // işlem yapma
    console.log("Fiksturcreate: ", { payload });
    return Fikstur.emit("Fiksturcreate", payload);
  }

  update(payload) {
    console.log("Fiksturupdate: ", { payload });
    return Fikstur.emit("Fiksturupdate", payload);
  }

  getAll() { // veri dinleme
    Fikstur.emit("FiksturfindAll");
    Fikstur.on('outputFikstur', function(data){
      console.log("outputFikstur: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("FiksturfindOne: ", { payload });
    Fikstur.emit("FiksturfindOne", payload);
    Fikstur.on('outputByIdFikstur', function(data){
          console.log("outputByIdFikstur: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Fikstur.emit("FiksturfindAllPublished");
    Fikstur.on('outputPublishedFikstur', function(data){
      console.log("outputPublishedFikstur: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Fikstur.emit("Fiksturdelete", { _id });
    console.log("Fiksturdelete: ", { payload });
    Fikstur.emit("Fiksturdelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("FiksturdeleteAll: ");
    Fikstur.emit("FiksturdeleteAll");
  }
}
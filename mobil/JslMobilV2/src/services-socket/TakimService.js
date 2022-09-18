import io from "socket.io-client";
const Takim =  io.connect("localhost:8000/Takim");

export default class TakimService {
  create(payload) { // işlem yapma
    //console.log("Takimcreate: ", { payload });
    return Takim.emit("Takimcreate", payload);
  }

  update(payload) {
    //console.log("Takimupdate: ", { payload });
    return Takim.emit("Takimupdate", payload);
  }

  getAll() { // veri dinleme
    Takim.emit("TakimfindAll");
    Takim.on('outputTakim', function(data){
      //console.log("outputTakim: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("TakimfindOne: ", { payload });
    Takim.emit("TakimfindOne", payload);
    Takim.on('outputByIdTakim', function(data){
          //console.log("outputByIdTakim: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Takim.emit("TakimfindAllPublished");
    Takim.on('outputPublishedTakim', function(data){
      //console.log("outputPublishedTakim: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Takim.emit("Takimdelete", { _id });
    //console.log("Takimdelete: ", { payload });
    Takim.emit("Takimdelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("TakimdeleteAll: ");
    Takim.emit("TakimdeleteAll");
  }
}
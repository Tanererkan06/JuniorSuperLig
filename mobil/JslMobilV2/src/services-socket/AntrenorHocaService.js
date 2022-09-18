import io from "socket.io-client";
const AntrenorHoca =  io.connect("localhost:8000/AntrenorHoca");

export default class AntrenorHocaService {
  create(payload) { // işlem yapma
    //console.log("AntrenorHocacreate: ", { payload });
    return AntrenorHoca.emit("AntrenorHocacreate", payload);
  }

  update(payload) {
    //console.log("AntrenorHocaupdate: ", { payload });
    return AntrenorHoca.emit("AntrenorHocaupdate", payload);
  }

  getAll() { // veri dinleme
    AntrenorHoca.emit("AntrenorHocafindAll");
    AntrenorHoca.on('outputAntrenorHoca', function(data){
      //console.log("outputAntrenorHoca: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("AntrenorHocafindOne: ", { payload });
    AntrenorHoca.emit("AntrenorHocafindOne", payload);
    AntrenorHoca.on('outputByIdAntrenorHoca', function(data){
          //console.log("outputByIdAntrenorHoca: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    AntrenorHoca.emit("AntrenorHocafindAllPublished");
    AntrenorHoca.on('outputPublishedAntrenorHoca', function(data){
      //console.log("outputPublishedAntrenorHoca: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // AntrenorHoca.emit("AntrenorHocadelete", { _id });
    //console.log("AntrenorHocadelete: ", { payload });
    AntrenorHoca.emit("AntrenorHocadelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("AntrenorHocadeleteAll: ");
    AntrenorHoca.emit("AntrenorHocadeleteAll");
  }
}
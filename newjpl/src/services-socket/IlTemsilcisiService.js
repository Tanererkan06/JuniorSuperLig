import io from "socket.io-client";
const IlTemsilcisi =  io.connect("localhost:8000/IlTemsilcisi");

export default class IlTemsilcisiService {
  create(payload) { // işlem yapma
    //console.log("IlTemsilcisicreate: ", { payload });
    return IlTemsilcisi.emit("IlTemsilcisicreate", payload);
  }

  update(payload) {
    //console.log("IlTemsilcisiupdate: ", { payload });
    return IlTemsilcisi.emit("IlTemsilcisiupdate", payload);
  }

  getAll() { // veri dinleme
    IlTemsilcisi.emit("IlTemsilcisifindAll");
    IlTemsilcisi.on('outputIlTemsilcisi', function(data){
      //console.log("outputIlTemsilcisi: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("IlTemsilcisifindOne: ", { payload });
    IlTemsilcisi.emit("IlTemsilcisifindOne", payload);
    IlTemsilcisi.on('outputByIdIlTemsilcisi', function(data){
          //console.log("outputByIdIlTemsilcisi: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    IlTemsilcisi.emit("IlTemsilcisifindAllPublished");
    IlTemsilcisi.on('outputPublishedIlTemsilcisi', function(data){
      //console.log("outputPublishedIlTemsilcisi: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // IlTemsilcisi.emit("IlTemsilcisidelete", { _id });
    //console.log("IlTemsilcisidelete: ", { payload });
    IlTemsilcisi.emit("IlTemsilcisidelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("IlTemsilcisideleteAll: ");
    IlTemsilcisi.emit("IlTemsilcisideleteAll");
  }
}
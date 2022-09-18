import io from "socket.io-client";
const Oyun =  io.connect("localhost:8000/Oyun");

export default class OyunService {
  create(payload) { // işlem yapma
    //console.log("Oyuncreate: ", { payload });
    return Oyun.emit("Oyuncreate", payload);
  }

  update(payload) {
    //console.log("Oyunupdate: ", { payload });
    return Oyun.emit("Oyunupdate", payload);
  }

  getAll() { // veri dinleme
    Oyun.emit("OyunfindAll");
    Oyun.on('outputOyun', function(data){
      //console.log("outputOyun: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("OyunfindOne: ", { payload });
    Oyun.emit("OyunfindOne", payload);
    Oyun.on('outputByIdOyun', function(data){
          //console.log("outputByIdOyun: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Oyun.emit("OyunfindAllPublished");
    Oyun.on('outputPublishedOyun', function(data){
      //console.log("outputPublishedOyun: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Oyun.emit("Oyundelete", { _id });
    //console.log("Oyundelete: ", { payload });
    Oyun.emit("Oyundelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("OyundeleteAll: ");
    Oyun.emit("OyundeleteAll");
  }
}
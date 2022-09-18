import io from "socket.io-client";
const PuanDurumu =  io.connect("localhost:8000/PuanDurumu");

export default class PuanDurumuService {
  create(payload) { // işlem yapma
    //console.log("PuanDurumucreate: ", { payload });
    return PuanDurumu.emit("PuanDurumucreate", payload);
  }

  update(payload) {
    //console.log("PuanDurumuupdate: ", { payload });
    return PuanDurumu.emit("PuanDurumuupdate", payload);
  }

  getAll() { // veri dinleme
    PuanDurumu.emit("PuanDurumufindAll");
    PuanDurumu.on('outputPuanDurumu', function(data){
      //console.log("outputPuanDurumu: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("PuanDurumufindOne: ", { payload });
    PuanDurumu.emit("PuanDurumufindOne", payload);
    PuanDurumu.on('outputByIdPuanDurumu', function(data){
          //console.log("outputByIdPuanDurumu: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    PuanDurumu.emit("PuanDurumufindAllPublished");
    PuanDurumu.on('outputPublishedPuanDurumu', function(data){
      //console.log("outputPublishedPuanDurumu: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // PuanDurumu.emit("PuanDurumudelete", { _id });
    //console.log("PuanDurumudelete: ", { payload });
    PuanDurumu.emit("PuanDurumudelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("PuanDurumudeleteAll: ");
    PuanDurumu.emit("PuanDurumudeleteAll");
  }
}
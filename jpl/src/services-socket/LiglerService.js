import io from "socket.io-client";
const Ligler =  io.connect("http://localhost:3001/Ligler");

export default class LiglerService {
  create(payload) { // işlem yapma
    console.log("Liglercreate: ", { payload });
    return Ligler.emit("Liglercreate", payload);
  }

  update(payload) {
    console.log("Liglerupdate: ", { payload });
    return Ligler.emit("Liglerupdate", payload);
  }

  getAll() { // veri dinleme
    Ligler.emit("LiglerfindAll");
    Ligler.on('outputLigler', function(data){
      console.log("outputLigler: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("LiglerfindOne: ", { payload });
    Ligler.emit("LiglerfindOne", payload);
    Ligler.on('outputByIdLigler', function(data){
          console.log("outputByIdLigler: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Ligler.emit("LiglerfindAllPublished");
    Ligler.on('outputPublishedLigler', function(data){
      console.log("outputPublishedLigler: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Ligler.emit("Liglerdelete", { _id });
    console.log("Liglerdelete: ", { payload });
    Ligler.emit("Liglerdelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("LiglerdeleteAll: ");
    Ligler.emit("LiglerdeleteAll");
  }
}
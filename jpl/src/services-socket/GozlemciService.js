import io from "socket.io-client";
const Gozlemci =  io.connect("http://localhost:3001/Gozlemci");

export default class GozlemciService {
  create(payload) { // işlem yapma
    console.log("Gozlemcicreate: ", { payload });
    return Gozlemci.emit("Gozlemcicreate", payload);
  }

  update(payload) {
    console.log("Gozlemciupdate: ", { payload });
    return Gozlemci.emit("Gozlemciupdate", payload);
  }

  getAll() { // veri dinleme
    Gozlemci.emit("GozlemcifindAll");
    Gozlemci.on('outputGozlemci', function(data){
      console.log("outputGozlemci: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("GozlemcifindOne: ", { payload });
    Gozlemci.emit("GozlemcifindOne", payload);
    Gozlemci.on('outputByIdGozlemci', function(data){
          console.log("outputByIdGozlemci: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Gozlemci.emit("GozlemcifindAllPublished");
    Gozlemci.on('outputPublishedGozlemci', function(data){
      console.log("outputPublishedGozlemci: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Gozlemci.emit("Gozlemcidelete", { _id });
    console.log("Gozlemcidelete: ", { payload });
    Gozlemci.emit("Gozlemcidelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("GozlemcideleteAll: ");
    Gozlemci.emit("GozlemcideleteAll");
  }
}
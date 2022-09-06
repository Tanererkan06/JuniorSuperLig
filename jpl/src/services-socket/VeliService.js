import io from "socket.io-client";
const Veli =  io.connect("http://localhost:3001/Veli");

export default class VeliService {
  create(payload) { // işlem yapma
    console.log("Velicreate: ", { payload });
    return Veli.emit("Velicreate", payload);
  }

  update(payload) {
    console.log("Veliupdate: ", { payload });
    return Veli.emit("Veliupdate", payload);
  }

  getAll() { // veri dinleme
    Veli.emit("VelifindAll");
    Veli.on('outputVeli', function(data){
      console.log("outputVeli: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("VelifindOne: ", { payload });
    Veli.emit("VelifindOne", payload);
    Veli.on('outputByIdVeli', function(data){
          console.log("outputByIdVeli: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Veli.emit("VelifindAllPublished");
    Veli.on('outputPublishedVeli', function(data){
      console.log("outputPublishedVeli: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Veli.emit("Velidelete", { _id });
    console.log("Velidelete: ", { payload });
    Veli.emit("Velidelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("VelideleteAll: ");
    Veli.emit("VelideleteAll");
  }
}
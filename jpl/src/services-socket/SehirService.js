import io from "socket.io-client";
const Sehir =  io.connect("http://localhost:3001/Sehir");

export default class SehirService {
  create(payload) { // işlem yapma
    console.log("Sehircreate: ", { payload });
    return Sehir.emit("Sehircreate", payload);
  }

  update(payload) {
    console.log("Sehirupdate: ", { payload });
    return Sehir.emit("Sehirupdate", payload);
  }

  getAll() { // veri dinleme
    Sehir.emit("SehirfindAll");
    Sehir.on('outputSehir', function(data){
      console.log("outputSehir: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("SehirfindOne: ", { payload });
    Sehir.emit("SehirfindOne", payload);
    Sehir.on('outputByIdSehir', function(data){
          console.log("outputByIdSehir: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Sehir.emit("SehirfindAllPublished");
    Sehir.on('outputPublishedSehir', function(data){
      console.log("outputPublishedSehir: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Sehir.emit("Sehirdelete", { _id });
    console.log("Sehirdelete: ", { payload });
    Sehir.emit("Sehirdelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("SehirdeleteAll: ");
    Sehir.emit("SehirdeleteAll");
  }
}
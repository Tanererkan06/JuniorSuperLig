import io from "socket.io-client";
const Hakem =  io.connect("http://localhost:3001/Hakem");

export default class HakemService {
  create(payload) { // işlem yapma
    console.log("Hakemcreate: ", { payload });
    return Hakem.emit("Hakemcreate", payload);
  }

  update(payload) {
    console.log("Hakemupdate: ", { payload });
    return Hakem.emit("Hakemupdate", payload);
  }

  getAll() { // veri dinleme
    Hakem.emit("HakemfindAll");
    Hakem.on('outputHakem', function(data){
      console.log("outputHakem: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("HakemfindOne: ", { payload });
    Hakem.emit("HakemfindOne", payload);
    Hakem.on('outputByIdHakem', function(data){
          console.log("outputByIdHakem: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Hakem.emit("HakemfindAllPublished");
    Hakem.on('outputPublishedHakem', function(data){
      console.log("outputPublishedHakem: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Hakem.emit("Hakemdelete", { _id });
    console.log("Hakemdelete: ", { payload });
    Hakem.emit("Hakemdelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("HakemdeleteAll: ");
    Hakem.emit("HakemdeleteAll");
  }
}
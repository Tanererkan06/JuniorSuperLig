import io from "socket.io-client";
const OyunKonum =  io.connect("http://localhost:3001/OyunKonum");

export default class OyunKonumService {
  create(payload) { // işlem yapma
    console.log("OyunKonumcreate: ", { payload });
    return OyunKonum.emit("OyunKonumcreate", payload);
  }

  update(payload) {
    console.log("OyunKonumupdate: ", { payload });
    return OyunKonum.emit("OyunKonumupdate", payload);
  }

  getAll() { // veri dinleme
    OyunKonum.emit("OyunKonumfindAll");
    OyunKonum.on('outputOyunKonum', function(data){
      console.log("outputOyunKonum: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("OyunKonumfindOne: ", { payload });
    OyunKonum.emit("OyunKonumfindOne", payload);
    OyunKonum.on('outputByIdOyunKonum', function(data){
          console.log("outputByIdOyunKonum: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    OyunKonum.emit("OyunKonumfindAllPublished");
    OyunKonum.on('outputPublishedOyunKonum', function(data){
      console.log("outputPublishedOyunKonum: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // OyunKonum.emit("OyunKonumdelete", { _id });
    console.log("OyunKonumdelete: ", { payload });
    OyunKonum.emit("OyunKonumdelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("OyunKonumdeleteAll: ");
    OyunKonum.emit("OyunKonumdeleteAll");
  }
}
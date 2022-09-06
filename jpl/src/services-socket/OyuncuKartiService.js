import io from "socket.io-client";
const OyuncuKarti =  io.connect("http://localhost:3001/OyuncuKarti");

export default class OyuncuKartiService {
  create(payload) { // işlem yapma
    console.log("OyuncuKarticreate: ", { payload });
    return OyuncuKarti.emit("OyuncuKarticreate", payload);
  }

  update(payload) {
    console.log("OyuncuKartiupdate: ", { payload });
    return OyuncuKarti.emit("OyuncuKartiupdate", payload);
  }

  getAll() { // veri dinleme
    OyuncuKarti.emit("OyuncuKartifindAll");
    OyuncuKarti.on('outputOyuncuKarti', function(data){
      console.log("outputOyuncuKarti: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("OyuncuKartifindOne: ", { payload });
    OyuncuKarti.emit("OyuncuKartifindOne", payload);
    OyuncuKarti.on('outputByIdOyuncuKarti', function(data){
          console.log("outputByIdOyuncuKarti: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    OyuncuKarti.emit("OyuncuKartifindAllPublished");
    OyuncuKarti.on('outputPublishedOyuncuKarti', function(data){
      console.log("outputPublishedOyuncuKarti: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // OyuncuKarti.emit("OyuncuKartidelete", { _id });
    console.log("OyuncuKartidelete: ", { payload });
    OyuncuKarti.emit("OyuncuKartidelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("OyuncuKartideleteAll: ");
    OyuncuKarti.emit("OyuncuKartideleteAll");
  }
}
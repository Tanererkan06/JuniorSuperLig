import io from "socket.io-client";
const OyunLive =  io.connect("http://localhost:3001/OyunLive");

export default class OyunLiveService {
  create(payload) { // işlem yapma
    console.log("OyunLivecreate: ", { payload });
    return OyunLive.emit("OyunLivecreate", payload);
  }

  update(payload) {
    console.log("OyunLiveupdate: ", { payload });
    return OyunLive.emit("OyunLiveupdate", payload);
  }

  getAll() { // veri dinleme
    OyunLive.emit("OyunLivefindAll");
    OyunLive.on('outputOyunLive', function(data){
      console.log("outputOyunLive: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("OyunLivefindOne: ", { payload });
    OyunLive.emit("OyunLivefindOne", payload);
    OyunLive.on('outputByIdOyunLive', function(data){
          console.log("outputByIdOyunLive: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    OyunLive.emit("OyunLivefindAllPublished");
    OyunLive.on('outputPublishedOyunLive', function(data){
      console.log("outputPublishedOyunLive: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // OyunLive.emit("OyunLivedelete", { _id });
    console.log("OyunLivedelete: ", { payload });
    OyunLive.emit("OyunLivedelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("OyunLivedeleteAll: ");
    OyunLive.emit("OyunLivedeleteAll");
  }
}
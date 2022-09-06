import io from "socket.io-client";
const SponsorSuresi =  io.connect("http://localhost:3001/SponsorSuresi");

export default class SponsorSuresiService {
  create(payload) { // işlem yapma
    console.log("SponsorSuresicreate: ", { payload });
    return SponsorSuresi.emit("SponsorSuresicreate", payload);
  }

  update(payload) {
    console.log("SponsorSuresiupdate: ", { payload });
    return SponsorSuresi.emit("SponsorSuresiupdate", payload);
  }

  getAll() { // veri dinleme
    SponsorSuresi.emit("SponsorSuresifindAll");
    SponsorSuresi.on('outputSponsorSuresi', function(data){
      console.log("outputSponsorSuresi: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("SponsorSuresifindOne: ", { payload });
    SponsorSuresi.emit("SponsorSuresifindOne", payload);
    SponsorSuresi.on('outputByIdSponsorSuresi', function(data){
          console.log("outputByIdSponsorSuresi: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    SponsorSuresi.emit("SponsorSuresifindAllPublished");
    SponsorSuresi.on('outputPublishedSponsorSuresi', function(data){
      console.log("outputPublishedSponsorSuresi: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // SponsorSuresi.emit("SponsorSuresidelete", { _id });
    console.log("SponsorSuresidelete: ", { payload });
    SponsorSuresi.emit("SponsorSuresidelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("SponsorSuresideleteAll: ");
    SponsorSuresi.emit("SponsorSuresideleteAll");
  }
}
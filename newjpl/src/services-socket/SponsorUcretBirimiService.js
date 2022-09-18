import io from "socket.io-client";
const SponsorUcretBirimi =  io.connect("localhost:8000/SponsorUcretBirimi");

export default class SponsorUcretBirimiService {
  create(payload) { // işlem yapma
    //console.log("SponsorUcretBirimicreate: ", { payload });
    return SponsorUcretBirimi.emit("SponsorUcretBirimicreate", payload);
  }

  update(payload) {
    //console.log("SponsorUcretBirimiupdate: ", { payload });
    return SponsorUcretBirimi.emit("SponsorUcretBirimiupdate", payload);
  }

  getAll() { // veri dinleme
    SponsorUcretBirimi.emit("SponsorUcretBirimifindAll");
    SponsorUcretBirimi.on('outputSponsorUcretBirimi', function(data){
      //console.log("outputSponsorUcretBirimi: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("SponsorUcretBirimifindOne: ", { payload });
    SponsorUcretBirimi.emit("SponsorUcretBirimifindOne", payload);
    SponsorUcretBirimi.on('outputByIdSponsorUcretBirimi', function(data){
          //console.log("outputByIdSponsorUcretBirimi: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    SponsorUcretBirimi.emit("SponsorUcretBirimifindAllPublished");
    SponsorUcretBirimi.on('outputPublishedSponsorUcretBirimi', function(data){
      //console.log("outputPublishedSponsorUcretBirimi: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // SponsorUcretBirimi.emit("SponsorUcretBirimidelete", { _id });
    //console.log("SponsorUcretBirimidelete: ", { payload });
    SponsorUcretBirimi.emit("SponsorUcretBirimidelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("SponsorUcretBirimideleteAll: ");
    SponsorUcretBirimi.emit("SponsorUcretBirimideleteAll");
  }
}
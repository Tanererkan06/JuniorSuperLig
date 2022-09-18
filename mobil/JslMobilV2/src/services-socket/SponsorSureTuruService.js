import io from "socket.io-client";
const SponsorSureTuru =  io.connect("localhost:8000/SponsorSureTuru");

export default class SponsorSureTuruService {
  create(payload) { // işlem yapma
    //console.log("SponsorSureTurucreate: ", { payload });
    return SponsorSureTuru.emit("SponsorSureTurucreate", payload);
  }

  update(payload) {
    //console.log("SponsorSureTuruupdate: ", { payload });
    return SponsorSureTuru.emit("SponsorSureTuruupdate", payload);
  }

  getAll() { // veri dinleme
    SponsorSureTuru.emit("SponsorSureTurufindAll");
    SponsorSureTuru.on('outputSponsorSureTuru', function(data){
      //console.log("outputSponsorSureTuru: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("SponsorSureTurufindOne: ", { payload });
    SponsorSureTuru.emit("SponsorSureTurufindOne", payload);
    SponsorSureTuru.on('outputByIdSponsorSureTuru', function(data){
          //console.log("outputByIdSponsorSureTuru: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    SponsorSureTuru.emit("SponsorSureTurufindAllPublished");
    SponsorSureTuru.on('outputPublishedSponsorSureTuru', function(data){
      //console.log("outputPublishedSponsorSureTuru: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // SponsorSureTuru.emit("SponsorSureTurudelete", { _id });
    //console.log("SponsorSureTurudelete: ", { payload });
    SponsorSureTuru.emit("SponsorSureTurudelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("SponsorSureTurudeleteAll: ");
    SponsorSureTuru.emit("SponsorSureTurudeleteAll");
  }
}
import io from "socket.io-client";
const Sponsor =  io.connect("localhost:8000/Sponsor");

export default class SponsorService {
  create(payload) { // işlem yapma
    //console.log("Sponsorcreate: ", { payload });
    return Sponsor.emit("Sponsorcreate", payload);
  }

  update(payload) {
    //console.log("Sponsorupdate: ", { payload });
    return Sponsor.emit("Sponsorupdate", payload);
  }

  getAll() { // veri dinleme
    Sponsor.emit("SponsorfindAll");
    Sponsor.on('outputSponsor', function(data){
      //console.log("outputSponsor: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("SponsorfindOne: ", { payload });
    Sponsor.emit("SponsorfindOne", payload);
    Sponsor.on('outputByIdSponsor', function(data){
          //console.log("outputByIdSponsor: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Sponsor.emit("SponsorfindAllPublished");
    Sponsor.on('outputPublishedSponsor', function(data){
      //console.log("outputPublishedSponsor: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Sponsor.emit("Sponsordelete", { _id });
    //console.log("Sponsordelete: ", { payload });
    Sponsor.emit("Sponsordelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("SponsordeleteAll: ");
    Sponsor.emit("SponsordeleteAll");
  }
}
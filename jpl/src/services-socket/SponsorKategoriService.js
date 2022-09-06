import io from "socket.io-client";
const SponsorKategori =  io.connect("http://localhost:3001/SponsorKategori");

export default class SponsorKategoriService {
  create(payload) { // işlem yapma
    console.log("SponsorKategoricreate: ", { payload });
    return SponsorKategori.emit("SponsorKategoricreate", payload);
  }

  update(payload) {
    console.log("SponsorKategoriupdate: ", { payload });
    return SponsorKategori.emit("SponsorKategoriupdate", payload);
  }

  getAll() { // veri dinleme
    SponsorKategori.emit("SponsorKategorifindAll");
    SponsorKategori.on('outputSponsorKategori', function(data){
      console.log("outputSponsorKategori: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("SponsorKategorifindOne: ", { payload });
    SponsorKategori.emit("SponsorKategorifindOne", payload);
    SponsorKategori.on('outputByIdSponsorKategori', function(data){
          console.log("outputByIdSponsorKategori: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    SponsorKategori.emit("SponsorKategorifindAllPublished");
    SponsorKategori.on('outputPublishedSponsorKategori', function(data){
      console.log("outputPublishedSponsorKategori: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // SponsorKategori.emit("SponsorKategoridelete", { _id });
    console.log("SponsorKategoridelete: ", { payload });
    SponsorKategori.emit("SponsorKategoridelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("SponsorKategorideleteAll: ");
    SponsorKategori.emit("SponsorKategorideleteAll");
  }
}
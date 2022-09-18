import io from "socket.io-client";
const BannerReklam =  io.connect("localhost:8000/BannerReklam");

export default class BannerReklamService {
  create(payload) { // işlem yapma
    //console.log("BannerReklamcreate: ", { payload });
    return BannerReklam.emit("BannerReklamcreate", payload);
  }

  update(payload) {
    //console.log("BannerReklamupdate: ", { payload });
    return BannerReklam.emit("BannerReklamupdate", payload);
  }

  getAll() { // veri dinleme
    BannerReklam.emit("BannerReklamfindAll");
    BannerReklam.on('outputBannerReklam', function(data){
      //console.log("outputBannerReklam: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    //console.log("BannerReklamfindOne: ", { payload });
    BannerReklam.emit("BannerReklamfindOne", payload);
    BannerReklam.on('outputByIdBannerReklam', function(data){
          //console.log("outputByIdBannerReklam: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    BannerReklam.emit("BannerReklamfindAllPublished");
    BannerReklam.on('outputPublishedBannerReklam', function(data){
      //console.log("outputPublishedBannerReklam: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // BannerReklam.emit("BannerReklamdelete", { _id });
    //console.log("BannerReklamdelete: ", { payload });
    BannerReklam.emit("BannerReklamdelete", payload);
  }

  deleteAll() { // işlem yapma
    //console.log("BannerReklamdeleteAll: ");
    BannerReklam.emit("BannerReklamdeleteAll");
  }
}
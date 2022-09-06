import io from "socket.io-client";
const Contact =  io.connect("http://localhost:3001/Contact");

export default class ContactService {
  create(payload) { // işlem yapma
    console.log("Contactcreate: ", { payload });
    return Contact.emit("Contactcreate", payload);
  }

  update(payload) {
    console.log("Contactupdate: ", { payload });
    return Contact.emit("Contactupdate", payload);
  }

  getAll() { // veri dinleme
    Contact.emit("ContactfindAll");
    Contact.on('outputContact', function(data){
      console.log("outputContact: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("ContactfindOne: ", { payload });
    Contact.emit("ContactfindOne", payload);
    Contact.on('outputByIdContact', function(data){
          console.log("outputByIdContact: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Contact.emit("ContactfindAllPublished");
    Contact.on('outputPublishedContact', function(data){
      console.log("outputPublishedContact: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Contact.emit("Contactdelete", { _id });
    console.log("Contactdelete: ", { payload });
    Contact.emit("Contactdelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("ContactdeleteAll: ");
    Contact.emit("ContactdeleteAll");
  }
}
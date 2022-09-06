import io from "socket.io-client";
const Slider =  io.connect("http://localhost:3001/Slider");

export default class SliderService {
  create(payload) { // işlem yapma
    console.log("Slidercreate: ", { payload });
    return Slider.emit("Slidercreate", payload);
  }

  update(payload) {
    console.log("Sliderupdate: ", { payload });
    return Slider.emit("Sliderupdate", payload);
  }

  getAll() { // veri dinleme
    Slider.emit("SliderfindAll");
    Slider.on('outputSlider', function(data){
      console.log("outputSlider: ", data);
      return data;
    });
  }

  getById(payload) { // işlem yapma
    console.log("SliderfindOne: ", { payload });
    Slider.emit("SliderfindOne", payload);
    Slider.on('outputByIdSlider', function(data){
          console.log("outputByIdSlider: ", data);
          return data;
        });
  }

  getAllPublished() { // veri dinleme
    Slider.emit("SliderfindAllPublished");
    Slider.on('outputPublishedSlider', function(data){
      console.log("outputPublishedSlider: ", data);
      return data;
    });
  }

  delete(payload) { // işlem yapma
    // const _id = id;
    // Slider.emit("Sliderdelete", { _id });
    console.log("Sliderdelete: ", { payload });
    Slider.emit("Sliderdelete", payload);
  }

  deleteAll() { // işlem yapma
    console.log("SliderdeleteAll: ");
    Slider.emit("SliderdeleteAll");
  }
}
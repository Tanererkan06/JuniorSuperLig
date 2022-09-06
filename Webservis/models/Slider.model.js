module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        baslik: String, 
        resimbaslik: String, 
        src:String,
        resimicerik:String,
        videobaslik:String,
        url:String,
        veritipi:String,
        slidetipi:Boolean,
        published: Boolean, 
      },
      { timestamps: true }
    );
  
     schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    }); 
  
    const Slider = mongoose.model("Slider", schema);
    return Slider;
  };
  
  
  
  
  
  
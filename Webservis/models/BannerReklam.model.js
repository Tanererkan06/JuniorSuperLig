module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        reklamveren:String,
        resim:String,
        tarih:Date,
        url:String,
        published: Boolean,  
      },
      { timestamps: true }
    );
  
     schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    }); 
  
    const BannerReklam = mongoose.model("BannerReklam", schema);
    return BannerReklam;
  };
  
  
  
  
  
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        iletisimadres:String,
        iletisimnumber:String,
        iletisimeposta:String,
        harita:Number,
        isim:String,
        sehir: String,
        telefon:String,
        eposta:String,
        konu:String,
        mesaj:String,
        published: Boolean, 
      },
      { timestamps: true }
    );
  
     schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    }); 
  
    const Contact = mongoose.model("Contact", schema);
    return Contact;
  };
  
  
  
  
  
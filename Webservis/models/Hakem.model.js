 
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      soyadi:String,
      dogumtarihi:Date,
      gosterdigisarikart:Number,
      gosterdigikirmizikart:Number,
      oyunsayisi:Number,
      resim:String,
      gorevliolduguoyun:Number,
      telefon:Number,
      eposta:String,
      adres:String,
      sifre:String,
      published: Boolean
      
   /*     /*    img:
      {
        data: Buffer,
        contentType: String
      }, */   
    },
    { timestamps: true }
  );

   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); 

  const Hakem = mongoose.model("Hakem", schema);
  return Hakem;
};



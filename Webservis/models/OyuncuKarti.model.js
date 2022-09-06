
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      kimlikno:Number,
      adi:String,
      soyadi:String,
      dogumyeri:String,
      Dogumtarihi:Date,
      boy:Number,
      kilo:Number,
      pozisyon:String,
      // takimid:Number,
      takimid:String,
      takimadi:String,
      // lig:Number,
      lig:String,
      formano:Number,
      oynadigimacsayisi:Number,
      atilangolsayisi:Number,
      asist:Number,
      resim:String,
      oncekitakimi:String,
      sarikart:Number,
      kirmizikart:Number,
      // hocaid:Number,
      hocaid:String,
      hocaadi:String,
      veli:String,
      telefon:Number,
      adres:String,
      eposta:String,
      sifre:Number,
      uyruk:String,
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

  const OyuncuKarti = mongoose.model("OyuncuKarti", schema);
  return OyuncuKarti;
};






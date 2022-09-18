module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      soyadi:String,
      telefon:String,
      eposta:String,
      sifre:Number,
      adres:String,
      uyruk:String,
      resim:String,
      dogumyeri:String,
      dogumtarihi:Date,
      // takimid:Number,
      takimid:String,
      takimadi:String,
      sehir: String,
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

  const AntrenorHoca = mongoose.model("AntrenorHoca", schema);
  return AntrenorHoca;
};

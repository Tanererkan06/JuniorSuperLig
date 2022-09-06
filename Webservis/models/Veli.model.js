 module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      soyadi:String,
      telefon:Number,
      eposta:String,
      resim:String,
      // oyuncuid:Number,
      oyuncuid:String,
      oyuncuadi:String,
      sifre:Number,
      adres:String,
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

  const Veli = mongoose.model("Veli", schema);
  return Veli;
};













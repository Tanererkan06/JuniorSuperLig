 
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      ligid:String,
      baslangictarihi:Date,
      bitistarihi:Date,
      aktiflig:Boolean,
      isDeleted:Boolean,
      pazartesi:Boolean,
      sali:Boolean,
      carsamba:Boolean,
      persembe:Boolean,
      cuma:Boolean,
      cumartesi:Boolean,
      pazar:Boolean,
      published: Boolean

      /* mactarihi:Date,
      oyunyeri:String,
      ligadi:String,
      sezon:Number,
      evsahibitakmid:Number,
      deplasmantakimid:Number,
      evsahibitakimadi:String,
      deplasmantakimadi:String, */
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

  const Fikstur = mongoose.model("Fikstur", schema);
  return Fikstur;
};
 
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      ligid:Number,
      ligadi:String,
      sezon:Number,
      başlangıctarihi:Date,
      bitistarihi:Date,
      mactarihi:Date,
      evsahibitakmid:Number,
      deplasmantakimid:Number,
      evsahibitakimadi:String,
      deplasmantakimadi:String,
      oyunyeri:String,
      
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

  const Fikstur = mongoose.model("Fikstur", schema);
  return Fikstur;
};
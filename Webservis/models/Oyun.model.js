module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      mactarihi:Date,
      macsaati:Date,
      // lig:Number,
      lig:String,
      il:String,
      yer:String,
      // takimbirid:Number,
      takimbirid:String,
      takimbiradi:String,
      // takimikiid:Number,
      takimikiid:String,
      takimikiadi:String,
      // gozlemciid:Number,
      // gozlemci: {type: mongoose.Types.ObjectId, ref: "gozlemcis"},
      gozlemciid:String,
      gozlemciadi:String,
      ortahakem:String,
      yanhakembir:String,
      yanhakemiki:String,
      dorduncuhakem:String,
      yorum:String,
      macsonu:String,
      ilkyarisonucu:String,
     /*  golatanid:Number,
      golatanadi:String,
      golsaati:Date,
      sarikartgosterilenid:Number,
      kirmizikartgosterilenid:Number,
      sarikartgosterilenadi:String,
      kirmizikartgosterilenadi:String,
      uzatmasuresi:Date,
      oyuncudegisikligi:String, */
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

  const Oyun = mongoose.model("Oyun", schema);
  return Oyun;
};









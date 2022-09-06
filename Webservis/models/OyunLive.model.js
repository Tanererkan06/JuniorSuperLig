module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      mactarihi:Date,
      macsaati:Date,
      il:String,
      yer:String,
      takimbirid:Number,
      takimbiradi:String,
      takimikiid:Number,
      takimikiadi:String,
      gozlemciid:Number,
      gozlemciadi:String,
      ortahakem:String,
      yanhakembir:String,
      yanhakemiki:String,
      dorduncuhakem:String,
      yorum:String,
      golatanid:Number,
      golatanadi:String,
      golsaati:Date,
      sarikartgosterilenid:Number,
      kirmizikartgosterilenid:Number,
      sarikartgosterilenadi:String,
      kirmizikartgosterilenadi:String,
      uzatmasuresi:Date,
      oyuncudegisikligi:String,
      macsonu:String,
      ilkyarisonucu:String,
      lig:Number,
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

  const OyunLive = mongoose.model("OyunLive", schema);
  return OyunLive;
};









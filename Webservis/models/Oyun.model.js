module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      mactarihi:Date,
      macsaati:Date,
      lig:String,
      sehir:String,
      yer:String,
      takimbirid:String,
      takimbiradi:String,
      takimbiresamelistesi:Array,
      takimikiid:String,
      takimikiadi:String,
      takimikiesamelistesi:Array,
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









 module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      sezon:Number,
      sehir: String,
      lig:Number,
      ligadi:String,
      takimid:String,
      takimadi:String,
      oynananoyun:Number,
      galibiyet:Number,
      malubiyet:Number,
      beraberlik:Number,
      attigigol:Number,
      yedigigol:Number,
      avaraj:Number,
      puan:Number,
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

  const PuanDurumu = mongoose.model("PuanDurumu", schema);
  return PuanDurumu;
};









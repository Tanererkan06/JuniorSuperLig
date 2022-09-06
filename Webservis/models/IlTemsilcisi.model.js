module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      // soyadi:String,
      // dogumtarihi:Date,
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

  const ilTemsilcisi = mongoose.model("ilTemsilcisi", schema);
  return ilTemsilcisi;
};





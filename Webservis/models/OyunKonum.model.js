 module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
      konum:String,
      sehir:String,
      takimid:String,
      takimadi:String,
      sorumlu:String,
      sorumluiletisim:Number,
      published: Boolean 
    },
    { timestamps: true }
  );

   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); 

  const OyunKonum = mongoose.model("OyunKonum", schema);
  return OyunKonum;
};







 
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      sehir: String,
      ligid:String,
      ligadi: String,
      takimlar: Array,
      baslangictarihi:Date,
      bitistarihi:Date,
      eslesmeturu: String,
      eslesmeler: Array,
      published: Boolean
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
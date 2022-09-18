 module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      ligid:String,
      ligadi:String,
      ulke:String,
      // sehir: 
      //   {
      //     type: Array,
      //     required: true,
      //   },
      sehir: String,
      ilce:String,
      published: Boolean,
    },
    { timestamps: true }
  );

   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); 

  const Ligler = mongoose.model("Ligler", schema);
  return Ligler;
};





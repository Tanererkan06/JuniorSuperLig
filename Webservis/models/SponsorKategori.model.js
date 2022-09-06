module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi:String,
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

  const SponsorKategori = mongoose.model("SponsorKategori", schema);
  return SponsorKategori;
};










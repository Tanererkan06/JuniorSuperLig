 

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      // adi:String,
      adi:Number,
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

  const SponsorSuresi = mongoose.model("SponsorSuresi", schema);
  return SponsorSuresi;
};










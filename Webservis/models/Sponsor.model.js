 module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
    sponsorid:Number,
    sponsoradi:String,
    sponsoril:String,
    sponsorkategori:String,
    sponsorreklami:String,
    // sponsorluksuresi:Number,
    sponsorluksuresi:String,
    sponsorluksureturu: String,
    sponsorlukucreti:Number,
    sponsorlukucretbirimi:String,
    eposta:String,
    sifre:Number,
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

  const Sponsor = mongoose.model("Sponsor", schema);
  return Sponsor;
};










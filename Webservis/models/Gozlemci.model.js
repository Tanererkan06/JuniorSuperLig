 
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      // oyunliveid:Number,
      
      // oyunliveid: 
      // {
      //   type: Array,
      //   required: true,
      // },
      
      adi: String,
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

  const Gozlemci = mongoose.model("Gozlemci", schema);
  return Gozlemci;
};


 module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      ligadi:String,
      sehir: 
        {
          type: Array,
          required: true,
        },
      published: Boolean,
      
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

  const Ligler = mongoose.model("Ligler", schema);
  return Ligler;
};





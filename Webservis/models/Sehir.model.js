module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        sehiradi:String,
        ligler: 
        {
          type: Array,
          required: true,
        },
        takimlar: 
        {
          type: Array,
          required: true,
        },
        published: Boolean, 
      },
      { timestamps: true }
    );
  
     schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    }); 
  
    const Sehir = mongoose.model("Sehir", schema);
    return Sehir;
  };
  
  
  
  
  
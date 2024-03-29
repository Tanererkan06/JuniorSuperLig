 
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        sehir: String,
        ligid:String,
        takimid:String,
        IsDeleted:Boolean,
      },
      { timestamps: true }
    );
  
     schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    }); 
  
    const FiksturTakim = mongoose.model("FiksturTakim", schema);
    return FiksturTakim;
  };
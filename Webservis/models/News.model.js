// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     {
//       baslik: String,
//       icerik: String,
//       resim: String,
//       kisaicerik: String,
//       tarih: Date,
//       published: Boolean, 
//       ulke: String,
//       sehir: String,
//       lig: String,
//       takimid: {
//         type: String,
//         //required: true,
//       },
//       desc: {
//         type: String,
//         max: 500,
//       },
//       likes: {
//         type: Array,
//         default: [],
//       },
//     },
//     { timestamps: true }
//   );

//   schema.method("toJSON", function () {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });

//   const News = mongoose.model("News", schema);
//   return News;
// };

const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    baslik: String,
    icerik: String,
    resim: String,
    kisaicerik: String,
    tarih: Date,
    published: Boolean, 
    ulke: String,
    sehir: String,
    lig: String,
    takimid: {
      type: String,
      //required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
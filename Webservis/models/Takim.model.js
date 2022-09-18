// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     {
//       adi:  {
//         type: String,
//         default: "",
//       },
//       kurulustarihi:  {
//         type: Date,
//         default: "",
//       },
//       telefon:  {
//         type: Number,
//         default: "",
//       },
//       sifre:  {
//         type: Number,
//         default: "",
//       },
//       adres:  {
//         type: String,
//         default: "",
//       },
//       oyunkonum:  {
//         type: String,
//         default: "",
//       },
//       fax:  {
//         type: Number,
//         default: "",
//       },
//       website:  {
//         type: String,
//         default: "",
//       },
//       oyuncular:  {
//         type: Array,
//         default: [],
//       },
     
//       hocaid:  {
//         type: String,
//         default: "",
//       },
//       hocaadi:  {
//         type: String,
//         default: "",
//       },
//       logo:  {
//         type: String,
//         default: "",
//       },
//       konum:  {
//         type: String,
//         default: "",
//       },
//       sorumlu:  {
//         type: String,
//         default: "",
//       },
//       sorumluiletisim:  
//       {
//         type: Number,
//         default: "",
//       },
//       eposta:  {
//         type: String,
//         default: "",
//       },
//        lig:  {
//         type: String,
//         default: "",
//       },
//       favori:  {
//         type: Number,
//         default: "",
//       },
//       published:  {
//         type: Boolean,
//         default: "",
//       },
//       TakimId: {
//         type: String,
//         // required: true,
//       },
//       desc: {
//         type: String,
//         max: 500,
//       },
//       img: {
//         type: String,
//       },
//       likes: {
//         type: Array,
//         default: [],
//       }, 
//       profilePicture: {
//         type: String,
//         default: "",
//       },
//       coverPicture: {
//         type: String,
//         default: "",
//       },
//       followers: {
//         type: Array,
//         default: [],
//       },
//       followings: {
//         type: Array,
//         default: [],
//       }, 
//       desc: {
//         type: String,
//         max: 50,
//       },
//       sehir: {
//         type: String,
//         max: 50,
//       },
//       from: {
//         type: String,
//         max: 50,
//       },
//       relationship: {
//         type: Number,
//         enum: [1, 2, 3],
//       },
//     },
//     { timestamps: true }
//   );

//   schema.method("toJSON", function () {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });

//   const Takim = mongoose.model("Takim", schema);
//   return Takim;
// };


const mongoose = require("mongoose");

const TakimSchema = new mongoose.Schema(
  {
      adi:  {
        type: String,
        default: "",
      },
      kurulustarihi:  {
        type: Date,
        default: "",
      },
      telefon:  {
        type: Number,
        default: "",
      },
      sifre:  {
        type: Number,
        default: "",
      },
      adres:  {
        type: String,
        default: "",
      },
      oyunkonum:  {
        type: String,
        default: "",
      },
      fax:  {
        type: Number,
        default: "",
      },
      website:  {
        type: String,
        default: "",
      },
      oyuncular:  {
        type: Array,
        default: [],
      },
      hocaid:  {
        type: String,
        default: "",
      },
      hocaadi:  {
        type: String,
        default: "",
      },
      veli: {
        type: Array,
        default: [],
      },
      logo:  {
        type: String,
        default: "",
      },
      konum:  {
        type: String,
        default: "",
      },
      sorumlu:  {
        type: String,
        default: "",
      },
      sorumluiletisim:  
      {
        type: Number,
        default: "",
      },
      eposta:  {
        type: String,
        default: "",
      },
       lig:  {
        type: String,
        default: "",
      },
      favori:  {
        type: Number,
        default: "",
      },
      published:  {
        type: Boolean,
        default: "",
      },
      takimId: {
        type: String,
        // required: true,
      },
      desc: {
        type: String,
        max: 500,
      },
      img: {
        type: String,
      },
      likes: {
        type: Array,
        default: [],
      }, 
      profilePicture: {
        type: String,
        default: "",
      },
      coverPicture: {
        type: String,
        default: "",
      },
      followers: {
        type: Array,
        default: [],
      },
      followings: {
        type: Array,
        default: [],
      }, 
      desc: {
        type: String,
        max: 50,
      },
      sehir: {
        type: String,
        max: 50,
      },
      from: {
        type: String,
        max: 50,
      },
      relationship: {
        type: Number,
        enum: [1, 2, 3],
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Takim", TakimSchema);

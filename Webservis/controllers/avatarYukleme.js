const uploadFile = require("../middleware/imageUpload");

const upload = async (req, res) => {
      try {
        await uploadFile(req, res);
    
        if(!req.file) {
            return res.json({
                success: false,
                message: "Dosya yuklenemedi"
            })
        }
        // return success
        return res.json({
            success: true,
            message: "Dosya basariyla yuklendi",
            file: req.file
        })
     
      } catch (err) {
        console.log(err);
      }
    };
    
    const getFile = (req, res) => {
        var filename = req.params.filename;
        res.sendFile(__dirname + '/uploads/' + filename);
    };
    
module.exports = {
    upload,
    getFile,
};
const User = require("../models/user.model");
const Role = require("../models/role.model");

const ErrorResponse = require('../utils/errorResponse');


exports.signup = async (req, res, next)=>{

    const {email} = req.body;
    const userExist = await User.findOne({email});
    
    // if (userExist){
      
    //  return  next(new ErrorResponse('E-mail already exists', 400))
    // }

    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}


exports.signin = async (req, res, next)=>{

    try{
        const {email, password,role} = req.body;
        if(!email || !password){
       
            return  next(new ErrorResponse('E-mail and password are required', 400))
        }

        // check user e-mail
        const user = await User.findOne({email});
        if(!user){
           
            return  next(new ErrorResponse('Invalid credentials', 400))
        }

        // verify user password
        const isMatched = await user.comparePassword(password);
        if (!isMatched){
         
          return  next(new ErrorResponse('Invalid credentials', 400))
        }

        generateToken(user, 200, res);
    }
    catch(error){
        console.log(error);
       
        next(new ErrorResponse('Cannot log in, check your credentials', 400))
    }
   
}


const generateToken = async (user, statusCode, res) =>{

    const token = await user.jwtGenerateToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.EXPIRE_TOKEN)
    };

    res
    .status(statusCode)
    .cookie('token', token, options )
    .json({success: true, token})
}


//LOG OUT USER
exports.logout = (req, res, next)=>{
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}
 
exports.gozculistesi = (req, res, next)=>{

    const gozcu ="6314995711bed2acdb4e2fae";
//server resetlenirse bu id'yi güncellenen yeni gozcu id'sine göre değiştir.
    
   User.find(
    {
        roles:gozcu
    }
   )

     .then(data => {
        res.send(data);
       console.log(data)
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving gozcus."
       });
     }); 
}

exports.findAll = (req, res) => {
    // const adi = req.query.adi;
    // var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};
  
    User.find()
      .then(data => {
         res.send(data);
        console.log(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found user with id " + id });
        else  res.send(data);
        console.log(data)
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id=" + id });
      });
  };
 

exports.singleUser = async (req, res, next)=>{

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            sucess: true,
            user
        })
        
    } catch (error) {
        next(error)
        
    }
   
}

exports.followTeamsNews = async (req, res, next)=>{

    
   
}

exports.followTeamsNewsDetail = async (req, res, next)=>{

    
   
}
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const ErrorResponse = require('../utils/errorResponse');


// check if user is authenticated
exports.isAuthenticated = async (req, res, next) =>{

    const {token} = req.cookies;

    // make sure token exists
    if (!token){
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }
}

// admin middleware
exports.isUser = (req, res, next) =>{
    if (req.user.role === 0){
        return next (new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();

}

exports.isGozcu = (req, res, next) =>{
    if (req.user.role === 2){
        return next (new ErrorResponse('Access denied, you must be an Gozcu', 401));
    }
    next();

}

exports.isVeli = (req, res, next) =>{
    if (req.user.role === 3){
        return next (new ErrorResponse('Access denied, you must be an Veli', 401));
    }
    next();

}

exports.isSponsor = (req, res, next) =>{
    if (req.user.role === 4){
        return next (new ErrorResponse('Access denied, you must be an Sponsor', 401));
    }
    next();

}

exports.isİlTemsilcisi = (req, res, next) =>{
    if (req.user.role === 5){
        return next (new ErrorResponse('Access denied, you must be an İl Temsilcisi', 401));
    }
    next();

}

exports.isAntrenor = (req, res, next) =>{
    if (req.user.role === 6){
        return next (new ErrorResponse('Access denied, you must be an Antrenor', 401));
    }
    next();

}

exports.isVeliVeAntrenor = (req, res, next) =>{
    if (req.user.role === 7){
        return next (new ErrorResponse('Access denied, you must be an Veli Ve Antrenor', 401));
    }
    next();

}

 
const express = require('express');
const bcrypt= require('bcrypt');
const resRouter = express.Router();
const Res = require('../model/restaurant');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();


resRouter.get('/', async (req, res, next)=> {
    try {
        const allrestaurant = await Res.find();
        res.json(allrestaurant);
    } catch(err){
        res.send('Error'+err);
    }
});

resRouter.post('/newres', (req, res, next)=> {
    const newRestaurant = new Res({
        name: req.body.name,
        resid: req.body.resid,
        username: req.body.username,
        password: req.body.password,
        desc: req.body.desc
    });
        newRestaurant.save((err, doc)=> {
        if(err){
            res.status(501).json({msg: 'Restuarant not added', error: err});
        } else {
            res.status(200).json({data: doc, msg:'Restaurant added successfully'})
        }
    });

    const output = `
        <div><h1> Congo.. Your Restaurant added </h1></div>
        <h3>Restaurant Name: </h3>${req.body.name}
        <h3>Restaurant ID:</h3> ${req.body.resid}
        <h3>Restaurant UserName: </h3> ${req.body.username}
        <h3>Restaurant Password: </h3>${req.body.password}
        <h3>Restaurant Description: </h3> ${req.body.desc}
        <h2>Thanks from KB.....</h2> `


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    });
    
    const mailOptions = {
        from: 'demouserkb@gmail.com',
        to: 'kbcdefgh33@gmail.com', 
        subject: 'Restaurant Added', 
        html: output
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    })   
});


resRouter.get('/:resid', async(req, res, next)=> {
    const restaurantId = await Res.find({resid: req.params.resid});
    res.json(restaurantId);
});


resRouter.delete('/:resid', (req, res, next)=> {
    resid = (req.params.resid)
    Res.deleteOne({resid: resid}, (err)=>{
        if(err){
            console.log("Error on Delete: "+err);
        }
        console.log("Delete sccessfully resid is: "+resid);
    });
});




module.exports = resRouter;
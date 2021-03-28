const express = require('express');
const bcrypt= require('bcrypt');
const resRouter = express.Router();
const Res = require('../model/restaurant');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const dotenv = require('dotenv');

dotenv.config();


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
        <div><h1> A new Restaurant added </h1></div>
        <h3>Restaurant Name: ${req.body.name}</h3>
        <h3>Restaurant ID: ${req.body.resid}</h3>
        <h3>Restaurant UserName: ${req.body.username}</h3>
        <h3>Restaurant Password ${req.body.password}</h3>
        <h3>Restaurant Description: ${req.body.desc}</h3>
        <h3>Thanks from KB</h3>
    `

        const auth = {
            auth: {
            api_key: process.env.API_KEY,
            domain: process.env.DOMAIN
            }
        };

        const transporter = nodemailer.createTransport(mailGun(auth));
    
    const mailOptions = {
        from: 'kamalruidas33@gmail.com',
        to: 'kbcdefgh33@gmail.com',
        subject: 'ADD RESTAURENT',
        html: output
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
        console.log("Error From Mail Server: "+err)
        } else{
        console.log("mail sent from Mail Server: "+data)
        }
    });

   
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
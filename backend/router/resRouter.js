const express = require('express');
const bcrypt= require('bcrypt');
const resRouter = express.Router();
const Res = require('../model/restaurant');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


resRouter.get('/', async (req, res, next)=> {
    try {
        const allrestaurant = await Res.find();
        res.json(allrestaurant);
    } catch(err){
        res.send('Error'+err);
    }
});

resRouter.post('/newres', async (req, res, next)=> {
    const newRestaurant = new Res({
        name: req.body.name,
        resid: req.body.resid,
        username: req.body.username,
        password: req.body.password,
        desc: req.body.desc
    });
        await newRestaurant.save((err, doc)=> {
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
            api_key: '10ff5494a4e8ab4a67af20c9fd34e5c4-29561299-c3843b01',
            domain: 'sandbox4269621a196542b0a407745512a13ed8.mailgun.org'
            }
        };

        const transporter = nodemailer.createTransport(mailGun(auth));
    
    const mailOptions = {
        from: 'demouserkb@gamil.com',
        to: 'kbcdefgh33@gmail.com',
        subject: 'testmail',
        html: output
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
        console.log("Error "+err)
        } else{
        console.log("mail sent"+data)
        }
    });

   
});


resRouter.get('/:resid', async(req, res, next)=> {
    const restaurantId = await Res.find({resid: req.params.resid});
    res.json(restaurantId);
});


resRouter.delete('/:id', (req, res, next)=> {
 
    Res.findByIdAndDelete(req.params.id)
    .then(()=> {
       res.status(200).send("DELETED"); 
       console.log("Deleted id "+req.params.id)
    }).catch((err)=> {
        res.status(500).send(err);
    });
});




module.exports = resRouter;
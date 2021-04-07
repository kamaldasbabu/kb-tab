const express = require('express')
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const appRouter = require('./router/appRouter');
const orderRouter = require('./router/orderRouter');
const resRouter = require('./router/resRouter')
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL, 
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=> {
        console.log("db connetion success")
    }).catch((err)=> {
        console.log("err"+err)
});

// var passport = require('passport');
// var session = require('express-session');
// app.use(session({
//         name: 'kb',
//         resave: false,
//         saveUninitialized: false,
//         secret: 'secret',
//         cookie: {
//             maxAge: 360000,
//             httpOnly: false,
//             secure: false
//         }
//     }
// ));
// require('./passport-config');
// app.use(passport.initialize());
// app.use(passport.session());


const server = http.createServer(app);

app.use(cors({
    origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/reg', appRouter);
app.use('/order', orderRouter);
app.use('/restaurant', resRouter);

server.listen(port, ()=> {
    console.log("server listen "+port);
})
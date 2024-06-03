const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');



const app = express();

const dbURI = 'mongodb://localhost:27017/users';

const UserSchema = new mongoose.Schema({
   name:String,
   age:Number,
   hobby:String,
   passion:String
});

const UserModel = mongoose.model("users",UserSchema);

app.get("/getUsers",(req,res)=>{
  UserModel.find().then((users)=>{
    res.json(users)
  }).catch((err)=>{
    console.log(err);
  })
})



app.set('view engine','ejs');

mongoose.connect(dbURI)
.then((result)=>app.listen(8000))
.catch((err)=> console.log(err));

app.use(express.static('public'));

app.use(morgan('dev'));


 
  
   app.get('/',(req,res)=>{
 res.render('homepage');
   });
   app.get('/form',(req,res)=>{
    res.render('form');
   });
   app.get('/services',(req,res)=>{
    res.render('services');
   });
   

   app.get('/about',(req,res)=>{
    res.render('about');
   });
   
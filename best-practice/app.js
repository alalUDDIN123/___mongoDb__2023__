// app.js
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/user.routes.js');
const handleErrors = require('./middlewares/error.middleware.js');

const app = express();
mongoose.set("strictQuery",true)
mongoose.connect('mongodb+srv://al:ml@cluster0.4hcb0ne.mongodb.net/best-pratice?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


app.use(express.json());
app.use('/users', users);
app.use(handleErrors);
app.listen(3000, ()=>{
    console.log(`Server running on http://localhost:3000`)
})
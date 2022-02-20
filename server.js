
// require express
const express = require("express");

// require path 
const path = require ("path")

// instance of express
const app = express();

// require and config dotenv
require("dotenv").config();

// connect to DB
const connectDB = require("./config/connectDB");
connectDB();

// global middleware
app.use(express.json())


//router
app.use('/api/user', require('./routes/user'))
app.use('/api/comments', require('./routes/comment'))
app.use('/api/transports', require('./routes/transport'))
app.use('/api/bann', require('./routes/bann'))

// deploy heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}


// port
const port = process.env.PORT;

// create server
app.listen(port, (error) =>
  error
    ? console.log("Can not run server !!!")
    : console.log(`Server is running on port ${port} ...`)
);


console.clear()
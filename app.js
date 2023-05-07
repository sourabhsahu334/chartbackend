// Require the necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Create the express app
const app = express();
app.use(cors())
mongoose.Promise = global.Promise;
// Connect to the database
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true}).then(()=>{
    console.log('connection succes');
}).catch((e)=>{
    console.log('no connect'+e);
});


// Define a collection name
const collectionName = 'new';

// Create a model without a schema
const data = mongoose.model(collectionName, {}, collectionName);

// Define a route to retrieve data without a schema
app.get('/getData', (req, res) => {
    data.find()
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  });
// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

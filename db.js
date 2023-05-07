const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const local="mongodb://localhost:27017/test"
// Connect MongoDB at default port 27017.
mongoose.connect(local, {
    useNewUrlParser : true ,
    useUnifiedTopology : true


   
}).then(()=>{
    console.log('connection succes');
}).catch((e)=>{
    console.log('no connect'+e);
})

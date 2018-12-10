const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/Registration');

const url = 'mongodb://kamaak:ygbno8ane@ds129904.mlab.com:29904/blogapp'

mongoose.connect(
    url, 
    { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection opened on ${url}`);
    })
    .on('error', (err) => {
        console.log(`Connectio error: ${error.message}`);
    })

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server's running on port ${server.address().port}`);
});
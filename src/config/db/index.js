const mongoose = require('mongoose');

async function connect() {
   
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/quang_blogdb');
        console.log('Connect SUSSES to DB');
    } catch (error) {
        console.log('FAILL');
    }

}

module.exports = {connect};
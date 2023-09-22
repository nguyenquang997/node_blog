const mongoose = require('mongoose');

async function connect() {
   
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/quang_blogdb');
        // await mongoose.connect('mongodb+srv://nguyenquangns1:M9689vZfirghgH1A@cluster1.qftubdh.mongodb.net/?retryWrites=true&w=majority');
        await mongoose.connect('mongodb+srv://nguyenquangns1:M9689vZfirghgH1A@cluster1.qftubdh.mongodb.net/?retryWrites=true&w=majority');
        
        console.log('Connect SUSSES to DB');
    } catch (error) {
        console.log('FAILL');
    }

}

module.exports = {connect};
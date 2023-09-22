const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfo = new Schema({
    userId: { type: String, maxLength: 255, default: '' },
    passWord: { type: String, maxLength: 600, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('UserInfos', userInfo);
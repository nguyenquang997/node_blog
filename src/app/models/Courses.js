const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    code: { type: String, maxLength: 255, default: '' },
    name: { type: String, maxLength: 255, default: '' },
    info: { type: String, maxLength: 600, default: '' },
    image: { type: String, maxLength: 255, default: '' },
    InsDate: { type: Date, default: Date.now },
    UpdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', course);
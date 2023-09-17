const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    name: { type: String, maxLength: 255, default: '' },
    info: { type: String, maxLength: 600, default: '' },
    videoId: { type: String, maxLength: 255, default: '' },
    image: { type: String, maxLength: 255, default: '' },
    slugurl: { type: String, maxLength: 255, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Course', course);
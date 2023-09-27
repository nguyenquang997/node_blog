const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    seq: { type: Number, default: 0 },
    name: { type: String, default: '' },
    info: { type: String, default: '' },
    videoId: { type: String, default: '' },
    image: { type: String, default: '' },
    slugurl: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Course', course);
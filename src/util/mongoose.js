module.exports = {

    multipleMongooseToObject: (mongoose) => {
        return mongoose.map(x => x.toObject());
    },

    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
}
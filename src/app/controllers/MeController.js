const cousrseModel = require('../models/Courses')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class MeConTroller {

    // [GET] /me/stored/courses
    async storedCourses(req, res) {
        try {
            const coursesJson = await cousrseModel.find({});
            res.render('me/stored-courses', { coursesJson: multipleMongooseToObject(coursesJson) });
        } catch (error) {
            console.log('ERROR!!!!')
        }

    }

    // async create(req, res) {
    //     res.render('courses/create');
    // }

    // async store(req, res) {
    //     try {
    //         const formData = req.body;
    //         console.log(req.body.videoId);
    //         formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBof7ldUB9r0KAuv1t8pBjvODyBbg`;
    //         const instance = new cousrseModel(formData);
    //         await instance.save();
    //         res.redirect('/')
    //     } catch (error) {
    //         console.log('ERROR!!!!')
    //     }
    // }

}

module.exports = new MeConTroller;
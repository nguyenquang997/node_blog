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

    // [GET] /me/trash/courses
    async trashCourses(req, res) {
        try {
            const coursesJson = await cousrseModel.findDeleted();
            res.render('me/trash-courses', { coursesJson: multipleMongooseToObject(coursesJson) });
        } catch (error) {
            console.log('ERROR!!!!')
        }

    }

}

module.exports = new MeConTroller;
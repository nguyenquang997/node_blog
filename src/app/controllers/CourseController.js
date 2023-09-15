const cousrseModel = require('../models/Courses')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class CourseConTroller {

    // [GET] /news
    async show(req, res) {
        try {
            const coursesJson = await cousrseModel.findOne({ slugurl: req.params.slug });
            res.render('courses/show', { coursesJson: mongooseToObject(coursesJson) });
            // res.render('courses/show');
            // res.json(coursesJson);

        } catch (error) {
            console.log('ERROR!!!!')
        }
    }

    // // [GET] /:slug
    // show(req, res) {
    //     res.send('show page');
    // }

}

module.exports = new CourseConTroller;
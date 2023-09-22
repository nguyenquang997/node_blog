const cousrseModel = require('../models/Courses')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class CourseConTroller {

    // [GET] /:slug
    async show(req, res) {
        try {
            const coursesJson = await cousrseModel.findOne({ slugurl: req.params.slug });
            res.render('courses/show', { coursesJson: mongooseToObject(coursesJson) });
        } catch (error) {
            console.log('ERROR!!!!')
        }
    }

    // [GET] /courses/create
    async create(req, res) {
        res.render('courses/create');
    }

    // [POST] /stored
    async store(req, res) {
        try {
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBof7ldUB9r0KAuv1t8pBjvODyBbg`;
            const instance = new cousrseModel(formData);
            await instance.save();
            res.redirect('/')
        } catch (error) {
            console.log('ERROR!!!!')
        }
    }

    // [GET] /:id/edit
    async editCourse(req, res) {
        try {
            const coursesJson = await cousrseModel.findOne({ _id: req.params.id });
            res.render('courses/edit', { coursesJson: mongooseToObject(coursesJson) });
        } catch (error) {
            console.log('ERROR!!!!')
        }
    }

    // [PUT] /:id
    async update(req, res) {
        try {
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBof7ldUB9r0KAuv1t8pBjvODyBbg`;
            const coursesJson = await cousrseModel.updateOne({ _id: req.params.id }, formData);
            res.redirect('/me/stored/courses');
        } catch (error) {
            console.log('ERROR!!!!')
        }
    }

    // [DELETE] /:id
    async destroy(req, res) {
        try {
            await cousrseModel.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            console.log('ERROR!!!!')
        }
    }


}

module.exports = new CourseConTroller;
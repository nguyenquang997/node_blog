const cousrseModel = require('../models/Courses')

const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteConTroller {

    // [GET] /
    async home(req, res) {
        try {
            const coursesJson = await cousrseModel.find({});

            res.render('home', { coursesJson: multipleMongooseToObject(coursesJson) });

        } catch (error) {
            console.log('ERROR!!!!')
        }
        // res.render('home');
    }

    // [GET] /search
    async search(req, res) {
        // try {
        //     const instance = new cousrseModel();
        //     instance.code = '2'
        //     instance.name = 'Khoa hoc 2'
        //     instance.info = 'Khoa hoc 2'
        //     instance.image = 'dasdad'

        //     await instance.save();
        //     console.log('Insert Success')
        // } catch (error) {
        //     console.log('ERROR!!!!')
        // }
        res.render('search');
    }

}

module.exports = new SiteConTroller;
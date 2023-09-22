const cousrseModel = require('../models/Courses')
const usersInfo = require('../models/UserInfos')

const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteConTroller {

    // [GET] /
    async login(req, res) {
        res.render('login');
    }

    // [POST] /stored
    async actionLogin(req, res) {
        try {
            console.log(req.body);
            const isLogin = await usersInfo.findOne({ userId: req.body.userId, passWord: req.body.passWord });
            console.log(isLogin);

            if (isLogin) {
                res.redirect('home');
            } else {
                res.redirect('back');
            }

        } catch (error) {
            console.log('ERROR!!!!')
        }
        // res.render('home');
    }


    // [GET] /home
    async home(req, res) {
        try {
            const coursesJson = await cousrseModel.find({});

            res.render('home', { coursesJson: multipleMongooseToObject(coursesJson) });

        } catch (error) {
            console.log('ERROR!!!!')
        }
        // res.render('home');
    }

}

module.exports = new SiteConTroller;
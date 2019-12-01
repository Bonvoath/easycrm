const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret_key } = require('../config');
const User = require('../models/user');

exports.list = (req, res, next) => {
    User.find({}).then((doc) => {
        res.status(200).json(doc);
    }).catch((err) => {
        res.status(404).json(err);
    });
}

exports.register = (req, res, next) => {
    let email = req.body.email;
    User.findOne({ email: email })
        .then(doc => {
            if (doc) {
                res.status(404).send('This email already registered.');
            } else {
                var user = new User({
                    name: req.body.name,
                    email: email,
                    phone: req.body.phone,
                    password: bcrypt.hashSync(req.body.password, 8)
                });
                user.save((err, item) => {
                    if (err)
                        res.status(404).json(err);
                    else
                        res.status(200).json(item);
                });
            }
        }).catch(err => {
            res.status(404).json(err);
        });
}

exports.default = (req, res, next) => {
    let email = 'admin@gmail.com';
    User.findOne({ email: email })
        .then(doc => {
            if (doc) {
                res.status(404).send('This email already registered.');
            } else {
                var user = new User({
                    name: 'admin',
                    email: email,
                    phone: '093879882',
                    password: bcrypt.hashSync('Admin@123', 8)
                });
                user.save((err, item) => {
                    if (err)
                        res.status(404).json(err);
                    else
                        res.status(200).json(item);
                });
            }
        }).catch(err => {
            res.status(404).json(err);
        });
}

exports.login = (req, res, next) => {
    let email = req.body.email;
    User.findOne({ email: email }, (err, doc) => {
        if (err) return res.status(500).send('Error on the server.');
        if (doc) {
            let isValidePassword = bcrypt.compareSync(req.body.password, doc.password);
            if (isValidePassword) {
                let token = jwt.sign({ _id: doc._id}, secret_key, { expiresIn: '24h' });
                res.status(200).json({ auth: true, token: token, data: jwt.decode(token) });
            } else
                res.status(404).send('No user found.');
        }
    });
}
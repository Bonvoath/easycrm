const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const baseDir = require('path').join(__dirname,'../public/static/uploads/');
const guid = require('uuid/v1');

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, baseDir)
    },
    filename: function(req, file, cb) {
        cb(null, guid() + require('path').extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Authorize = require('../middleware/is-auth');
router.post('/user', Authorize, userController.list);
router.post('/user/register', Authorize, userController.register);
router.post('/login', userController.login);
router.get('/user/default', userController.default);
module.exports = router;
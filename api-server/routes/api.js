const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const tagController = require('../controllers/tags');
const stageController = require('../controllers/stages');
const activityController = require('../controllers/activities');
const pipelineController = require('../controllers/pipelines');
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
router.post('/tag/list', tagController.list);
router.post('/tag/save', tagController.save);
router.post('/tag/update', tagController.update);
router.post('/stage/list', stageController.list);
router.post('/stage/save', stageController.save);
router.post('/stage/update', stageController.update);
router.post('/activity/type/list', activityController.type_list);
router.post('/activity/type/save', activityController.type_save);
router.post('/activity/type/update', activityController.type_update);
router.post('/pipeline/list', pipelineController.list);
router.post('/pipeline/list_group', pipelineController.list_group);
router.post('/pipeline/listDefault', pipelineController.listDefault);
router.post('/pipeline/save', pipelineController.save);
router.post('/pipeline/update', pipelineController.update);
router.post('/pipeline/find', pipelineController.findOne);
module.exports = router;
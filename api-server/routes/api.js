const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const tagController = require('../controllers/tags');
const stageController = require('../controllers/stages');
const activityController = require('../controllers/activities');
const pipelineController = require('../controllers/pipelines');
const leadController = require('../controllers/leads');
const taskController = require('../controllers/tasks');
const employeeController = require('../controllers/employees');
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
router.post('/pipeline/listDefault', pipelineController.list_default);
router.post('/pipeline/save', pipelineController.save);
router.post('/pipeline/update', pipelineController.update);
router.post('/pipeline/find', pipelineController.findOne);

router.post('/lead/listDefault', leadController.list_default);
router.post('/lead/list', leadController.list);
router.post('/lead/save', leadController.save);
router.post('/lead/update', leadController.update);
router.post('/lead/find', leadController.findOne);

router.post('/task/default', taskController.list_default);
router.post('/task/list', taskController.list);
router.post('/task/save', taskController.save);
router.post('/task/update', taskController.update);
router.post('/task/find', taskController.findOne);

router.post('/employee/default', employeeController.list_default);
router.post('/employee/list', employeeController.list);
router.post('/employee/save', employeeController.save);
router.post('/employee/update', employeeController.update);
router.post('/employee/find', employeeController.findOne);

module.exports = router;
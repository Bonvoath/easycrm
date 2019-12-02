const ActivityTypeModel = require('../models/activityType');

exports.type_list = (req, res, next) => {
    ActivityTypeModel.find({}).sort({ sort: 1 }).then((doc) => {
        res.status(200).json(doc);
    }).catch((err) => {
        res.status(404).json(err);
    });
}

exports.type_save = (req, res, next) => {
    let field = req.body;
    ActivityTypeModel.findOne({ name: field.name }).then(doc => {
        if (doc) {
            res.status(404).send('This activity type name already registered.');
        } else {
            let model = new ActivityTypeModel(field);
            model.save((err, result) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.status(200).json(result);
                }
            });
        }
    }).catch(err => {
        res.status(404).json(err);
    });
}
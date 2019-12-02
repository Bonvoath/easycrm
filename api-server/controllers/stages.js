const StageModel = require('../models/stage');

exports.list = (req, res, next) => {
    StageModel.find({}).sort({ sort: 1 }).then((doc) => {
        res.status(200).json(doc);
    }).catch((err) => {
        res.status(404).json(err);
    });
}

exports.save = (req, res, next) => {
    let field = req.body;
    StageModel.findOne({ name: field.name }).then(doc => {
        if (doc) {
            res.status(404).send('This stage name already registered.');
        } else {
            let tag = new StageModel(field);
            tag.save((err, result) => {
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
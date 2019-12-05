const TagModel = require('../models/tag');
const Response  = require('../utils/response');

exports.list = async(req, res, next) => {
    let result = new Response();
    await TagModel.find({}).sort({ sort: 1 }).then((docs) => {
        result.success(docs);
    }).catch((err) => {
        result.addDetail(err);
    });

    return res.status(200).json(result);
}

exports.save = async(req, res, next) => {
    let result = new Response();
    let field = req.body;
    await TagModel.findOne({ name: field.name }).then(doc => {
        if (doc) {
            result.addDetail('This tag name already registered.');
        } else {
            let tag = new TagModel(field);
            tag.save((err, doc) => {
                if (err) {
                    result.addDetail(err);
                } else {
                    result.success(doc);
                }
            });
        }
    }).catch(err => {
        result.addDetail(err);
    });

    return res.status(200).json(result);
}

exports.update = async(req, res) => {
    let result = new Response();
    let id = req.body._id;
    let fields = req.body.fields;
    await TagModel.updateOne({ _id:id }, fields, { new: true }, (err, doc) => {
        if(err) result.addDetail(err);
        else{
            result.success(doc);
        }
    });

    return res.status(200).json(result);
}
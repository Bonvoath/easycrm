const Response  = require('../utils/response');
const EmployeeModel = require('../models/employee');
const TaskModel = require('../models/task');
const TagModel = require('../models/tag');

exports.list = async(req, res, next) => {
    let result = new Response();
    await EmployeeModel.find({}).sort({ sort: 1 }).then((docs) => {
        result.success(docs);
    }).catch((err) => {
        result.addDetail(err);
    });

    return res.status(200).json(result);
}

exports.list_default = async(req, res, next) => {
    let result = new Response();
    try {
        let data = {
            tags: await TagModel.find({}).sort({ sort: 1})
        }
        result.success(data);
    } catch (error) {
        result.addDetail(error);
    }

    return res.status(200).json(result);
}

exports.save = async(req, res, next) => {
    let result = new Response();
    try {
        let tag = new EmployeeModel(req.body);
        let doc = await tag.save();
        result.success(doc);
    } catch (error) {
        result.addDetail(error);
    }

    return res.status(200).json(result);
}

exports.update = async(req, res) => {
    let result = new Response();
    let id = req.body._id;
    let fields = req.body.fields;
    await EmployeeModel.updateOne({ _id:id }, fields, { new: true }, (err, doc) => {
        if(err) result.addDetail(err);
        else{
            result.success(doc);
        }
    });

    return res.status(200).json(result);
}

exports.findOne = async(req, res, next) => {
    let result = new Response();
    try {
        var opt = await EmployeeModel.findOne({ _id: req.body.id});
        result.success(opt);
    } catch (error) {
        result.addDetail(error);
    }

    return res.status(200).json(result);
}
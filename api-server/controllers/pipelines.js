const Response  = require('../utils/response');
const OpportunityModel = require('../models/opportunity');
const StageModel = require('../models/stage');
const TagModel = require('../models/tag');

exports.list = async(req, res, next) => {
    let result = new Response();
    await OpportunityModel.find({}).populate('stage_id').sort({ sort: 1 }).then((docs) => {
        result.success(docs);
    }).catch((err) => {
        result.addDetail(err);
    });

    return res.status(200).json(result);
}

exports.list_group = async(req, res, next) => {
    let result = new Response();
    try {
        let data = [];
        let stages = await StageModel.find({}).sort({ sort: 1});
        for(var i = 0; i<stages.length; i++){
            let item = stages[i];
            let obj = {
                _id: item._id,
                name: item.name,
                pipelines: await OpportunityModel.find({ stage_id: item._id}).populate('tag_id')
            };
            data.push(obj);
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
        let firstStage = await StageModel.findOne().sort({ sort: 1 });
        if (firstStage != null) {
            let field = req.body;
            field.stage_id = firstStage._id;
            let tag = new OpportunityModel(field);
            let doc = await tag.save();
            result.success(doc);
        } else {
            result.addDetail('Please check stage before create pipeline.');
        }
    } catch (error) {
        result.addDetail(error);
    }

    return res.status(200).json(result);
}

exports.update = async(req, res) => {
    let result = new Response();
    let id = req.body._id;
    let fields = req.body.fields;
    await OpportunityModel.updateOne({ _id:id }, fields, { new: true }, (err, doc) => {
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
        var opt = await OpportunityModel.findOne({ _id: req.body.id});
        result.success(opt);
    } catch (error) {
        result.addDetail(error);
    }

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
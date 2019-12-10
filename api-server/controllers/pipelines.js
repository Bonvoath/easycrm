const Response  = require('../utils/response');
const OpportunityModel = require('../models/Opportunity');
const StageModel = require('../models/stage');

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
                pipelines: await OpportunityModel.find({ stage_id: item._id})
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
        let field = req.body;
        let tag = new OpportunityModel(field);
        let doc = await tag.save();
        result.success(doc);
    } catch (error) {
        result.addDetail(error);
    }

    return res.status(200).json(result);
}
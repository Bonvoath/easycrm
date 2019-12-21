const Response  = require('../utils/response');
const LeadModel = require('../models/lead');
const TagModel = require('../models/tag');
const StageModel = require('../models/stage');
const OptModel = require('../models/opportunity');
const EmployeeModel = require('../models/employee');
const SaleTeamModel = require('../models/saleTeam');

exports.list = async(req, res, next) => {
    let result = new Response();
    await LeadModel.find({ status: { $ne: 3 }}).sort({ sort: 1 }).then((docs) => {
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
            tags: await TagModel.find({}).sort({ sort: 1}),
            saleteams: await SaleTeamModel.find().sort({ sort: 1}),
            employees: await EmployeeModel.find().sort({ sort: 1 })
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
        let tag = new LeadModel(req.body);
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
    await LeadModel.updateOne({ _id:id }, fields, { new: true }, (err, doc) => {
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
        var opt = await LeadModel.findOne({ _id: req.body.id});
        result.success(opt);
    } catch (error) {
        result.addDetail(error);
    }

    return res.status(200).json(result);
}

exports.toOpportunity = async(req, res, next) => {
    let result = new Response();
    try {
        let firstStage = await StageModel.findOne().sort({ sort: 1 });
        var opt = new OptModel({
            name: req.body.name,
            customer: req.body.customer,
            email: req.body.email,
            phone: req.body.email,
            company: req.body.company,
            employee_id: req.body.sale_per_id,
            saleteam_id: req.body.sale_team_id,
            description: req.body.description,
            created_by: req.body.created_by,
            stage_id: firstStage._id
        });
        var ret = await opt.save();
        await LeadModel.updateOne({ _id: req.body._id }, { status: 3 });
        result.success(ret);
    } catch (error) {
        result.addDetail(error);
    }

    return res.status(200).json(result);
}
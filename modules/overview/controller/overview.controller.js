const overviewService = require('./../services/overview.services');

exports.add = (req, res, next) => {
    overviewService.add();
    res.json({
        'msg': 'okay'
    })
}

exports.edit = (req,res,next) => {
   
}

exports.show = (req, res, next) => {
    
}

exports.showAll = (req, res, next) => {

}
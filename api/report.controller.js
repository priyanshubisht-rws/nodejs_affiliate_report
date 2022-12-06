const {getReports, addReport, getReportByRange} = require('./report.service');

module.exports = {
    getAllReports: (req,res) => {
        getReports((err,results)=> {
            if(err)
            {
                return res.status(500).json({
                    success:0,
                    message:'Something went wrong'
                })
            }
            return res.status(200).json({
                    success:1,
                    data:results,
                 });
        })
    },
    addReports:(req,res) => {
        const body =req.body;
        addReport(body, (err,results)=> {
            if(err)
            {
                return res.status(500).json({
                    success:0,
                    message:'Something went wrong'
                })
            }
            return res.status(200).json({
                    success:1,
                    message:"Data Added Successfully",
                 });
            
            
        })
    },
    getReportsByRange: (req,res) => {
        const body =req.query;
        getReportByRange(body,(err,results)=> {
            if(err)
            {
                return res.status(500).json({
                    success:0,
                    message:'Something went wrong'
                })
            }
            var categories= [];
            var revenue= [];
            results.forEach(element => {
                categories.push(element.r_affiliate);
                var rObj = {};
                rObj[element.r_affiliate] = element.r_amount;
                revenue.push(rObj)
            });
            const category=Array.from(new Set(categories));
            var group_to_values = results.reduce(function (obj, item) {
                obj[item.r_affiliate] = obj[item.r_affiliate] || [];
                obj[item.r_affiliate].push(item.r_amount);
                return obj;
            }, {});

            var groups = Object.keys(group_to_values).map(function (key) {
                return {'name': key, 'data': group_to_values[key]};
            });
            return res.status(200).json({
                    success:1,
                    categories:category,
                    revenue:groups
                 });
        })
    },
    
}
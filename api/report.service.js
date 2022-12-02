const pool= require('../config/database');

module.exports = {
    addReport:(data,callback) => {
      pool.query(`insert into affiliate_revenue_report(r_affiliate,r_amount,r_commission_rate,r_commission_amount,r_month,
        r_year,r_due_date,r_status) 
        VALUES (?,?,?,?,?,?,?,?)`,
        [
            data.affiliate,
            data.amount,
            data.commission_rate,
            data.commission_amount,
            data.month,
            data.year,
            data.due_date,
            data.status
        ], (error, results) => {
           
            if(error)
            {
                callback(error)
            }
            return callback(null, results[0])
        })   
    },
    getReports:(callback) => {
        pool.query(`select * from affiliate_revenue_report order by r_id desc`,
        (error, results) => {
            if(error)
            {
                callback(error)
            }
            return callback(null, results)
        })   
    },
    getReportByRange:(data,callback) => {
        pool.query(`select * from affiliate_revenue_report where ( r_due_date between ? and ?) and r_status=?`, [data.due_date_from,data.due_date_to,data.status],
        (error, results) => {
            if(error)
            {
                callback(error)
            }
            return callback(null, results)
        })   
    }
}
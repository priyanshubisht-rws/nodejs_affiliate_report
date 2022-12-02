const {addReports, getAllReports,getReportsByRange} = require("./report.controller")
const router = require("express").Router();
router.post('/addReport', addReports)
router.get('/getAllReports', getAllReports)
router.get('/getReportsByRange', getReportsByRange)
module.exports = router;
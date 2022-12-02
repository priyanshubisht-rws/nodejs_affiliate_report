require('dotenv').config();

const cors = require("cors");
const express = require("express");
const app = express();
const reportRouter = require("./api/report.router");

app.use(express.json());
app.use(cors({
    origin:'*'
}))
app.use('/api',reportRouter)
app.use('/api',reportRouter)
app.use('/api',reportRouter)

app.listen(process.env.APP_PORT,()=>{
    console.log('server is running on ', process.env.APP_PORT)
})
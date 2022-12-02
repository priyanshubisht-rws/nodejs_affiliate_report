const {createPool} = require('mysql');

const pool = createPool({
    host:process.env.RDS_HOSTNAME,
    user:process.env.RDS_USERNAME,
    password:process.env.RDS_PASSWORD,
    database:process.env.RDS_DB_NAME,
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
});

module.exports = pool;

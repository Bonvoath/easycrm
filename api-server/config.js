const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    db_host: process.env.DB_HOST_NAME || 'localhost',
    db_name: process.env.DB_NAME || 'dbpos',
    db_port: process.env.DB_PORT || 27017,
    http_port: process.env.HTTP_PORT || 3000,
    getUrl: function () {
        return 'mongodb://' + this.db_host + ':' + this.db_port + '/' + this.db_name;
    },
    secret_key: 'adminsecretkey'
}
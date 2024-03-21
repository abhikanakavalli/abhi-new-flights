const dotenv = require('dotenv');

dotenv.config();

const configs = {
    PORT: process.env.PORT || 3000
}

module.exports = configs;
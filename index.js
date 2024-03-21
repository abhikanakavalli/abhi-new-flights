const express = require('express');

const configs = require('./src/config');

const apiRoutes  = require('./src/router');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);


app.listen(configs.PORT, () => {
    console.log(`listening on port: ${configs.PORT}`);
});
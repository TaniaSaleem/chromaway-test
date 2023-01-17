const express = require('express')

const app = express()

app.use(require('./api/routes/index'));

app.use(require('./middlewares/err-handler-response'));
module.exports=app;
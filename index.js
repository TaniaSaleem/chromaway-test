require('dotenv').config()
const app = require('./app.js');

app.listen(process.env.PORT||3000, () => {
    console.log(`Example app listening on port ${process.env.PORT||3000}`)
})
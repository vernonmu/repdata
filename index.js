const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const axios = require("axios")
const config = require('./config.js')


const app = express()


app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: false
}))

app.get('/api/data/:address', function(req,res,next) {
  const address = req.params.address

  axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${config.API_KEY}&address=${address}`)
  .then(function (response) {
    return res.status(200).json(response.data);
  })
  .catch(function (error) {
    // console.log(error);
  });
})

const port = config.port

app.listen(port, () => {
  console.log(`listening to ${port}`);
})

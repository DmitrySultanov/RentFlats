const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('../config/config')

// const publicPath = path.join(__dirname, '../../src/')

// app.use(express.static(publicPath))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(cors())

var requestTime = function (req, res, next) {
	var d = Date(Date.now());
  	req.requestTime = d.toString();
  	next();
};

app.use(requestTime);

app.get('/', (req, res) => {
  	var responseText = 'Hello World!';
  	responseText += 'Requested at: ' + req.requestTime + '';
  	res.send(responseText);
  	// res.sendFile(path.join(__dirname, '../../index.html'))
})

app.post('/login', (req, res) => {
	res.send({
		message: `hello ${req.body.email} Your user was registered! Have fun!`
	})
})


app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err)
    response.status(500).send(‘Something broke!’)
})

app.listen(process.env.PORT || config.port,
  () => console.log(`Server start on port ${config.port} ...`))
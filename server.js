// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;
// Spin up the server

const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log('server is running')
    console.log(`running on localhos:${port}`);
};
// Initialize all route with a callback function
app.get('/all', GRoute)
// Callback function to complete GET '/all'
function GRoute(req, res) {
    res.send(projectData)
}
// Post Route
app.post('/add', PRoute)
function PRoute(req,res) {
    console.log(req.body);
        projectData.date = req.body.date,
        projectData.temp = req.body.temp,
        projectData.userContent = req.body.userContent  
        res.end();
    console.log(projectData);
}
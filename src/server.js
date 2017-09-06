
var express         = require('express');        // call express
var app             = express();                 // define our app using express
var bodyParser      = require('body-parser');
var log             = require('./logger');
var schedule        = require('node-schedule');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var request = require('request');

app.get('/', function(req, res) {
  res.send("This is a hipchat notifier for team daily updates");
	res.end();
});

app.get('/health', function(req, res) {
  res.json({ status: 'UP' });
	res.end();

});
var myJSONObject = {
    "color": "green",
    "message": "Hey, Have you posted your daily update yet?  (standup)",
    "notify": true,
    "message_format": "text"
};
var rule1 = new schedule.RecurrenceRule();
rule1.hour = 15;
rule.minute = 30;

var rule1var = schedule.scheduleJob(rule1, function(){
	request({
      url: "hipchat.cdk.com/v2/room/roomid/notification?auth_token=s6vvvvq8JClO",
	    method: "POST",
	    json: true,
	    body: myJSONObject
	}, function (error, response, body){
	    console.log(response);
	});
});

var rule2 = new schedule.RecurrenceRule();
rule2.hour = 3;

var rule2var = schedule.scheduleJob(rule2, function(){
	request({
      url: "hipchat.cdk.com/v2/room/roomid/notification?auth_token=s6vvvvq8JClO",
	    method: "POST",
	    json: true,
	    body: myJSONObject
	}, function (error, response, body){
	    console.log(response);
	});
});

var server = app.listen(port, function(){
	log.info("Server running on port: " + port);
});

module.exports = server;

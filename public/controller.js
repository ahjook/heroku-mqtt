// var mqtt = require('mqtt')
var connect = "wss://test.mosquitto.org:8081/mqtt";
var mqtt;
client = mqtt.connect(connect);

$(document).ready(function () {
  $("#btn_One").click(function (e) {
	e.preventDefault();
	var topic = 'ajoc/fan/status';
	var payload = 'The fan is currently turned at 1' 
	client.publish(topic, payload);
	$("#status").html("The fan is currently turned at 1");
  })

  $("#btn_Two").click(function (e) {
	e.preventDefault();
	var topic = 'ajoc/fan/status';
	var payload = 'The fan is currently turned at 2 '
	client.publish(topic, payload);
	$("#status").html("The fan is currently turned at 2");
  })

  $("#btn_Three").click(function (e) {
	e.preventDefault();
	var topic = 'ajoc/fan/status';
	var payload = 'The fan is currently turned at 3 ' 
	client.publish(topic, payload);
	$("#status").html("The fan is currently turned at 3");
  })

  $("#btn_Off").click(function (e) {
	e.preventDefault();
	var topic = 'ajoc/fan/status';
	var payload = 'The fan is currently turned at Off '
	client.publish(topic, payload);
	$("#status").html("The fan is currently turned at Off");
  })
})
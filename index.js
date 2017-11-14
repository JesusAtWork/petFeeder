var five = require("johnny-five");
var board = new five.Board();

function feed(thing) {
	if (thing == "water") {
		motorWater.start();
		board.wait(500, function() {
			motorWater.stop();
		});
	} else if (thing == "food") {
		motorFood.start();
		board.wait(2000, function() {
			motorFood.stop();
		});
	}
}
board.on("ready", function() {
	var motorFood = new Motor(13);
	var motorWater = new Motor(12);

	initialDate = new Date();
	initialhours = date.getHours()

	this.loop(1000, function() {
		var date = new Date();
		date.getHours();

		if (initialDate != date) {
			feed("food")
			feed("water");
		}
	});
});
"use strict";

drawSpaceInvador();

function drawSpaceInvador() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillStyle = "black";
	context.fillRect(50, 50, 350, 350);

	context.fillStyle = "lightGreen";

	context.beginPath();
	context.fillRect(100, 100, 250, 250);
	context.fill();

	context.fillStyle = "black";

	context.fillRect(200, 100, 50, 50);
	context.fillRect(200, 150, 50, 50);
	context.fillRect(150, 150, 50, 50);
	context.fillRect(250, 150, 50, 50);
	context.fillRect(100, 200, 50, 50);
	context.fillRect(300, 200, 50, 50);
	context.fillRect(200, 250, 50, 50);
}

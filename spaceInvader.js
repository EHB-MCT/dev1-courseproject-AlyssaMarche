"use strict";

drawSpaceInvador();

function drawSpaceInvador() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillStyle = "green";
	context.fillRect(850, 350, 350, 350);

	context.fillStyle = "lightGreen";

	context.beginPath();
	context.fillRect(900, 400, 250, 250);
	context.fill();

	context.fillStyle = "green";

	context.fillRect(1000, 400, 50, 50);
	context.fillRect(1000, 550, 50, 50);
	context.fillRect(1050, 450, 50, 50);
	context.fillRect(1000, 450, 50, 50);
	context.fillRect(950, 450, 50, 50);
	context.fillRect(1100, 500, 50, 50);
	context.fillRect(900, 500, 50, 50);
}

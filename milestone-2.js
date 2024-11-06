"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let w = context.canvas.width;
let h = context.canvas.height;

draw();
function draw() {
context.fillRect(0, 0, w, h);
drawNoiseCircle();
}
window.onmousemove = move;
/**
@param {mouseEvent} eventData
 */


function move(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;
}


function drawNoiseCircle() {

	context.fillStyle = "black"
	context.fillRect(0, 0, w, h);
	for(let j = 0; j < 20; j++){
        context.fillStyle = Utils.hsla(0, 0, Math.random() * 100, 50);
		context.fillText("MCT", Math.random() * w, Math.random() * h);
		context.font = "normal 60pt Arial";

	context.fillStyle = Utils.hsl(j*36, 100, 50);
	for (let i = 0; i < w; i++) {
		let y = Noise.perlinNoise(i / 200);
		Utils.fillCircle(i, y*h - 200 + j * 40, 5);
	}
}

}
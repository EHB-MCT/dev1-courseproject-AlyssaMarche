"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let w = context.canvas.width;
let h = context.canvas.height;
draw();

function draw() {
    context.fillStyle = "gray"
	context.fillRect(0, 0, w, h);
	for(let j = 0; j < 20; j++){
	context.fillStyle = Utils.hsl(j*36, 100, 50);
	for (let i = 0; i < w; i++) {
		let y = Noise.perlinNoise(i / 200);
		Utils.fillCircle(i + j, y*h - 200 + j * 40, 5);
	}
}
}
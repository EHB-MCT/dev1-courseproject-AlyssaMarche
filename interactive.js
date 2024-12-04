// Portions of this project were developed using suggestions generated by ChatGPT (OpenAI)
// 04/12/2024:https://chatgpt.com/c/67501a6c-0d28-8007-ba39-675c734bf9b5
// Modifications made by Alyssa Marche

"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

snow();

setup();

function snow() {
    console.log("Snow function is called");
	context.fillStyle = "darkblue";
	Utils.fillRect(0, 0, width, height);

	for (let i = 0; i < 400; i++) {
		drawSnowflake(200, 200, 50 , 5, 6);
        requestAnimationFrame(snow);
	}
}

// Get the canvas and set up the context
const canvas = document.getElementById("canvas");
const getContext = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Function to draw a single branch of the snowflake
function drawBranch(x, y, length, angle, depth) {
	if (depth === 0) return;

	const xEnd = x + length * Math.cos(angle);
	const yEnd = y + length * Math.sin(angle);

	// Draw the main branch
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(xEnd, yEnd);
	context.stroke();

	// Add smaller branches
	const newLength = length * 0.6;
	drawBranch(xEnd, yEnd, newLength, angle - Math.PI / 6, depth - 1); // Left branch
	drawBranch(xEnd, yEnd, newLength, angle + Math.PI / 6, depth - 1); // Right branch
}

// Function to draw the complete snowflake
function drawSnowflake(centerX, centerY, length, branches, depth) {
	context.strokeStyle = "blue";
	context.lineWidth = 2;

	for (let i = 0; i < branches; i++) {
		const angle = (i * 2 * Math.PI) / branches;
		drawBranch(centerX, centerY, length, angle, depth);
	}
}

// Draw the snowflake
drawSnowflake(centerX, centerY, 100, 6, 4);

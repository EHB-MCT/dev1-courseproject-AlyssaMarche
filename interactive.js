"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

leaves();
draw();
setup();

function leaves(){
    context.fillStyle = "brown"
    Utils.fillRect(0,0,width,height);

    for(let i = 0; i < 400; i++){
         context.fillStyle = "green"
         drawleaf()
    }
   

}



const canvas = document.getElementById('leafCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a simple leaf shape
function drawLeaf() {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    
    // Draw the leaf using Bézier curves
    ctx.moveTo(250, 400); // Starting point (base of the leaf)
    ctx.bezierCurveTo(200, 300, 300, 100, 250, 50); // Left curve
    ctx.bezierCurveTo(200, 100, 300, 300, 250, 400); // Right curve

    ctx.closePath();
    ctx.fill();

    // Draw the stem
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(250, 400);
    ctx.lineTo(250, 450);
    ctx.stroke();
}

drawLeaf();
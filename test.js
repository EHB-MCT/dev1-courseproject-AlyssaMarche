"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let candy = []; 
let candyCount = 100; 
let speed = 2; 

let mouseX = 0;
let mouseY = 0;

setup();
animateCandyCane();
window.onmousemove = move;

function setup() {
    for (let i = 0; i < candyCount; i++) {
        let candyCane = {
            x: Math.random() * width, 
            y: Math.random() * height, 
            speed: Math.random() * 2 + 1,
            size: Math.random() * 5 + 7, 
        };
        candy.push(candyCane); 
    }
}

function drawSpaceInvader() {    
    context.fillStyle = "lightGreen";
    context.beginPath();
    context.fillRect(1100, 500, 250, 250);
    context.fill();

    context.fillStyle = "green";
    context.fillRect(1200, 500, 50, 50);
    context.fillRect(1200, 650, 50, 50);
    context.fillRect(1250, 550, 50, 50);
    context.fillRect(1200, 550, 50, 50);
    context.fillRect(1150, 550, 50, 50);
    context.fillRect(1300, 600, 50, 50);
    context.fillRect(1100, 600, 50, 50);
}

/** 
 * 
 * @param {MouseEvent} eventData
 * 
*/
function move(eventData) {
    mouseX = eventData.pageX;
    mouseY = eventData.pageY;
}

function animateCandyCane() {
   
    context.clearRect(0, 0, width, height);

    
    context.fillStyle = "green";
    context.fillRect(0, 0, width, height);
    drawSpaceInvader();

    
    for (let i = 0; i < candy.length; i++) {
        let candyCane = candy[i];
        candyCane.y += candyCane.speed; 
        candyCane.x += Utils.randomNumber(1, 1); 

        if (candyCane.y > height) {
            candyCane.y = 0;
            candyCane.x = Math.random() * width;
        }

        drawCandyCane(candyCane.x, candyCane.y, candyCane.size);
    }
    context.fillStyle = "white";
    context.textAlign = "center";
    context.font = "normal 60pt Arial";
    context.fillText("Merry Christmas", mouseX, mouseY);
    requestAnimationFrame(animateCandyCane);
}

// Function to draw a candy cane
function drawCandyCane(x, y, size) {
    const hookRadius = size * 3; // Radius for the curved hook
    const stripeWidth = size * 0.7; // Red stripe thickness
    const stripeSpacing = size * 1.5; // Spacing between red stripes

    context.save(); // Save canvas state

    // --- Step 1: Draw the white candy cane body ---
    context.beginPath();
    context.lineWidth = size;
    context.strokeStyle = "white";

    // Draw the curved hook
    context.arc(x, y, hookRadius, Math.PI, 2 * Math.PI, false);

    // Draw the straight part of the candy cane
    context.moveTo(x + hookRadius, y);
    context.lineTo(x + hookRadius, y + hookRadius * 4); // Extend the straight part
    context.stroke();

    // --- Step 2: Draw diagonal red stripes ---
    context.lineWidth = stripeWidth;
    context.strokeStyle = "red";

    // Stripes on the hook
    for (let angle = Math.PI; angle < 1.5 * Math.PI; angle += Math.PI / 10) {
        const startX = x + Math.cos(angle) * hookRadius;
        const startY = y + Math.sin(angle) * hookRadius;
        const endX = startX + Math.cos(angle + Math.PI / 4) * stripeSpacing;
        const endY = startY + Math.sin(angle + Math.PI / 4) * stripeSpacing;

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }

    // Stripes on the straight part
    for (let yOffset = 0; yOffset < hookRadius * 4; yOffset += stripeSpacing) {
        context.beginPath();
        const startX = x + hookRadius - size / 2;
        const startY = y + yOffset;
        const endX = startX + stripeSpacing * Math.cos(Math.PI / 4);
        const endY = startY + stripeSpacing * Math.sin(Math.PI / 4);

        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }

    context.restore(); // Restore canvas state
}

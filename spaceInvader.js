"use strict";

alert("Draw your space invader here");

drawSunset();

function drawSunset() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");
    

   context.fillStyle = "black"

   context.beginPath();
   context.moveTo(50, 50);
   context.lineTo(350, 50);
   context.lineTo(350, 350);
   context.lineTo(50, 350);
   context.lineTo(50, 50);
   context.fill();

   context.fillStyle = "lightGreen"
    
   context.beginPath();
   context.moveTo(100,100);
   context.lineTo (100,150);
   context.lineTo(130,150);
   context.lineTo(130,130);
   context.lineTo(170,130);
   context.lineTo(170,100);
   context.lineTo(100,100);
   context.fill();

   context.beginPath();
   context.moveTo(225,100);
   context.lineTo(300,100);
   context.lineTo(300,150);
   context.lineTo(270,150);
   context.lineTo(270,130);
   context.lineTo(225,130)
   context.fill();

   context.beginPath();
   context.rect(130,150,140,30);
   context.fill();

   context.beginPath();
   context.rect(100,180,200,100);
   context.fill();

   context.fillStyle = "white";

   context.beginPath();
   context.rect(175,180,50,50)
   context.fill();

}


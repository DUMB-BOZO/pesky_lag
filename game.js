<!DOCTYPE html>
<html>
<head>
  <title>Alien Invasion</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="400" height="400"></canvas>
  <script>
    // get the canvas element
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    
    // set the background color
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // create the player's spaceship
    var player = {
      x: canvas.width / 2,
      y: canvas.height - 50,
      width: 50,
      height: 50,
      speed: 5
    };
    
    // create the alien spaceships
    var aliens = [];
    for (var i = 0; i < 10; i++) {
      var alien = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 50,
        height: 50,
        speed:

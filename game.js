// select the canvas element from the Html document using its unique ID
const canvas = document.getElementById("gameCanvas");
// gets the 2D rendering context of the canvas, which allows us to draw shapes, text, images, and other graphics on the canvas
const ctx = canvas.getContext("2d");

// create an object to represent the player's spaceship properies
const player = {
    x: canvas.width / 2 - 25, // initial x position of the spaceship (centered horizontally)
    y: canvas.height - 60, // initial y position of the spaceship (near the bottom of the canvas)
    width: 50, // width of the spaceship
    height: 50, // height of the spaceship
    speed: 5, // speed at which the spaceship moves
};

// the main update funciton that will be called repeatedly to update the game state and render the graphics
function update() {
    // this is currently empty, will add movement and shooting logic next
}
 
// the main draw function that will be called repeatedly to render the game graphics
function draw() {
    // clear the canvas before drawing the new frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // sets the drawing color to retro arcde neon green
    ctx.fillStyle = "#00ff00";
    // draw a solid rectangle representing the player's spaceship at its current position
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// the master game lop funciton that runs continuously to update the game state and render the graphics
function gameLoop() {
    // call the update function to update the game state
    update();
    // call the draw function to render the game graphics
    draw();
    // request the next animation frame to keep the game loop running
    requestAnimationFrame(gameLoop);
}

// start the game loop when the window has finished loading
gameLoop();
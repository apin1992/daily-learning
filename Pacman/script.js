// grab the canvas element form HTML
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); // ctx means context; our drawing tool

// lets create o9ur pacman player as an object
let pacman = {
    x: 200,
    y: 200,
    radius: 15,
    color: "yellow",
    speed: 4,
    dx: 0, // change in x
    dy: 0 // change in y    
};

// an array contaiing obejct for each pelles position on the canvas
let pellets = [
    {x: 80, y: 80, isEaten: false},
    {x: 200, y: 80, isEaten: false},
    {x: 320, y: 80, isEaten: false},
    {x: 80, y: 200, isEaten: false},
    {x: 200, y: 320, isEaten: false},
    {x: 320, y: 320, isEaten: false}
];

// ghost
let ghost = {
    x: 50,
    y: 50,
    radius: 15,
    color: "red",
    speed: 0.5 // slightly slower than pacman
}

let gameOver = false; // flag to track if the game is over

let gameWon = false; // flag to track if the game is won


// score
let score = 0;

// function that will handle drawing pacman on the canvas
function drawPacman() {
    ctx.beginPath();
    // draw a circle using pacmans properites
    ctx.arc(pacman.x, pacman.y, pacman.radius, 0, 2 * Math.PI);
    ctx.fillStyle = pacman.color;
    ctx.fill(); // fill the circle with color
    ctx.closePath();
}

function drawPellets() {
    // a classic for loop to iterate through the pellets array
    for (let i = 0; i < pellets.length; i++) {
        // only draw the pellet if it has not been eaten
        if (pellets[i].isEaten === false) {
            ctx.beginPath();
            ctx.arc(pellets[i].x, pellets[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "pink";
            ctx.fill();
            ctx.closePath();
        }
    }
}

// function to check if pacman has eaten a pellet
function checkPelletCollisions() {
    for (let i = 0; i < pellets.length; i++) {
        let pellet = pellets[i];

        // Only check if the pellet hasn't been eaten yet
        if (pellet.isEaten === false) {
            // Calculate the distance between Pac-Man's center and the pellet's center
            let distX = pacman.x - pellet.x;
            let distY = pacman.y - pellet.y;
            let distance = Math.sqrt(distX * distX + distY * distY);

            // If the distance is less than Pac-Man's size, he eats it!
            if (distance < pacman.radius) {
                pellet.isEaten = true;
                score += 10; // Gain 10 points!
                console.log("Score: " + score); // Track it in the console for now
            }
        }
    }
}

// ghost ai funciton
function moveGhost() {
    // simple ai to move the ghost towards pacman
    if (ghost.x < pacman.x) ghost.x += ghost.speed;
    if (ghost.x > pacman.x) ghost.x -= ghost.speed;

    // if pacman is below the ghost, move down, if above move up
    if (ghost.y < pacman.y) ghost.y += ghost.speed;
    if (ghost.y > pacman.y) ghost.y -= ghost.speed;
}

// fucnton to draw the ghost on the canvas
function drawGhost() {
    ctx.beginPath();
    ctx.arc(ghost.x, ghost.y, ghost.radius, 0, 2 * Math.PI);
    ctx.fillStyle = ghost.color;
    ctx.fill();
    ctx.closePath();
}

// fuctnin to check if pacman has collided with the ghost
function checkGhostCollision() {
    let distX = pacman.x - ghost.x;
    let distY = pacman.y - ghost.y;
    let distance = Math.sqrt(distX * distX + distY * distY);

    // if the distance is less than the sum of their radii, they have collided
    if (distance < pacman.radius + ghost.radius) {
        gameOver = true;
    }
}

// function to check if all pellets have been eaten
function checkWinCondition() {
    let allEaten = true;

    // use a lop to checek if ANY pellet has not been eaten
    for (let i = 0; i < pellets.length; i++) {
        if (pellets[i].isEaten === false) {
            allEaten = false;
            break; // exit the loop early if we find one that hasn't been eaten
        }
    }

    // if all pellets have been eaten, set gameWon to true
    if (allEaten) {
        gameWon = true;
    }
}
    // Check if all pellets have been eaten

// 1 the game loop: runs roughly 60 times a second
function updateGame() {
    // if game is over, display game over message and stop the loop
    if (gameOver) {
        ctx.fillStyle = "red";
        ctx.font = "48px sans-serif";
        ctx.fillText("Game Over!", canvas.width / 2 - 120, canvas.height / 2);
        return; // exit the function to stop the game loop  
    }

    // check for victory condition
    if (gameWon) {
        ctx.fillStyle = "chartreuse"; // neon arcade green
        ctx.font = "48px sans-serif";
        ctx.fillText("You Win!", canvas.width / 2 - 100, canvas.height / 2);
        return; // exit the function to stop the game loop      
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move Pac-Man
    pacman.x += pacman.dx;
    pacman.y += pacman.dy;

    // Boundary checks
    if (pacman.x + pacman.radius > canvas.width) { pacman.x = canvas.width - pacman.radius; pacman.dx = 0; }
    if (pacman.x - pacman.radius < 0) { pacman.x = pacman.radius; pacman.dx = 0; }
    if (pacman.y + pacman.radius > canvas.height) { pacman.y = canvas.height - pacman.radius; pacman.dy = 0; }
    if (pacman.y - pacman.radius < 0) { pacman.y = pacman.radius; pacman.dy = 0; }

    // --- NEW: Check collisions ---
    // -- New: Handle ghost movement and collision detection
    moveGhost();
    checkGhostCollision();
    checkPelletCollisions();

    // check win condition after checking pellet collisions
    checkWinCondition();

    // Draw everything
    drawPellets();
    drawGhost();
    drawPacman();

    // draw the score ui
    ctx.fillStyle = "white";
    ctx.font = "18px sans-serif";
    ctx.fillText("Score: " + score, 15, 25);

    requestAnimationFrame(updateGame);
}
// 2 listen for keyboard inputs
window.addEventListener("keydown", function(event) {
    // switch statement to handle different key presses
    switch(event.key) {
        case "ArrowUp":
            pacman.dx = 0;
            pacman.dy = -pacman.speed;
            break;
        case "ArrowDown":
            pacman.dx = 0;
            pacman.dy = pacman.speed;
            break;
        case "ArrowLeft":
            pacman.dx = -pacman.speed;
            pacman.dy = 0;
            break;
        case "ArrowRight":
            pacman.dx = pacman.speed;
            pacman.dy = 0;
            break;
    }

});


// 3 sart the game loop
updateGame();
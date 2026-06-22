// select the canvas element from the Html document using its unique ID
const canvas = document.getElementById("gameCanvas");
// gets the 2D rendering context of the canvas, which allows us to draw shapes, text, images, and other graphics on the canvas
const ctx = canvas.getContext("2d");

// create an object to represent the player's spaceship properies
const player = {
    x: canvas.width / 2 - 25, // initial x position of the spaceship (centered horizontally)
    y: canvas.height - 60, // initial y position of the spaceship (near the bottom of the canvas)
    width: 50, // width of the spaceship
    height: 40, // height of the spaceship
    speed: 5, // speed at which the spaceship moves
    lives: 3   // the player starts with 3 lives total
};

// creates an empty array to hold the bullets that will be fired by the player's spaceship
const bullets = [];

// creates an empty array to hold all the alien enemies that will spawn at the top
let enemies = [];

// sets up configuration properties for our grid of alien enemies
const enemyRows = 4;          // total number of rows of aliens we want to create
const enemyCols = 8;          // total number of columns of aliens we want to create
const enemyWidth = 40;        // width of each individual alien block in pixels
const enemyHeight = 30;       // height of each individual alien block in pixels
const enemyPadding = 20;      // the empty space/gap between each alien block
const enemyOffsetTop = 60;    // how far down from the very top of the canvas the grid starts
const enemyOffsetLeft = 100;  // how far in from the left side of the canvas the grid starts

// Tracks the movement state of the alien swarm
let enemySpeed = 2;           // how many pixels the aliens slide sideways per frame
let enemyDirection = 1;       // 1 means moving right, -1 means moving left

// Creates a variable to track if the game is over (player lost)
let isGameOver = false;
// Creates a variable to track if the player has won the game
let isGameWon = false;

// A reusable function to generate the alien army grid at the top of the screen
function spawnEnemies() {
    enemies = []; // empties the array to ensure we start fresh
    for (let r = 0; r < enemyRows; r++) { // loops through each row (0, 1, 2, 3)
        for (let c = 0; c < enemyCols; c++) { // loops through each column (0 to 7)
            let enemyX = c * (enemyWidth + enemyPadding) + enemyOffsetLeft; // calculates precise X position
            let enemyY = r * (enemyHeight + enemyPadding) + enemyOffsetTop;  // calculates precise Y position
            
            enemies.push({
                x: enemyX,         // assigns the calculated X position
                y: enemyY,         // assigns the calculated Y position
                width: enemyWidth, // assigns the standard alien width
                height: enemyHeight // assigns the standard alien height
            });
        }
    }
}

// Spawns the initial set of enemies right when the script runs
spawnEnemies();

// creates an object to keep track of which keys are currently being pressed by the player
const keys = {
    ArrowLeft: false, // indicates whether the left arrow key is currently pressed
    ArrowRight: false, // indicates whether the right arrow key is currently pressed
};

// listens for the exact moment when a key is pressed down and updates the corresponding property in the keys object to true
window.addEventListener("keydown", function(event) {
    // If the game is over OR won, and the player presses 'Spacebar' or 'R', restart the entire game
    if ((isGameOver || isGameWon) && (event.key === " " || event.key.toLowerCase() === "r")) {
        player.lives = 3;         // reset lives back to full
        isGameOver = false;       // turn off game over mode
        isGameWon = false;        // turn off game won mode
        spawnEnemies();           // spawn a brand new army of aliens
        bullets.length = 0;       // clear away any old lasers on screen
        player.x = canvas.width / 2 - 25; // center the player ship
        return;                   // exit the function early so we don't shoot instantly on restart
    }

    // check if the pressed key exists in our 'keys' object and set it to true
    if (event.key in keys) {
        keys[event.key] = true;
    }

    // check if the spacebar is pressed to fire a bullet
    if (event.key === " " && !isGameOver && !isGameWon) {
        bullets.push({
            x: player.x + player.width / 2 - 2, // initial x position of the bullet (centered on the spaceship)
            y: player.y, // initial y position of the bullet (starting from the top of the spaceship)
            width: 4, // width of the bullet
            height: 15, // height of the bullet
            speed: 7, // speed at which the bullet moves upwards
        });
    }
});

// listens for the exact moment when a key is released and updates the corresponding property in the keys object to false
window.addEventListener("keyup", function(event) {
    if (event.key in keys) {
        keys[event.key] = false;
    }
});

// Helper function to draw our player as a cool retro turret style spaceship using vector paths
function drawPlayerShip(x, y, w, h) {
    ctx.fillStyle = "#00ff00"; // set color to neon green
    ctx.beginPath();           // start defining a unique shape outline
    ctx.moveTo(x + w / 2, y);  // start at the tip of the nose cone (top center)
    ctx.lineTo(x + w / 2 - 5, y + 12); // draw down slightly to form a narrow antenna tip
    ctx.lineTo(x + 10, y + 12);        // wing outline step left
    ctx.lineTo(x + 10, y + h - 10);    // body line down left side
    ctx.lineTo(x, y + h);              // left wingtip point
    ctx.lineTo(x + w, y + h);          // flat baseline across the back engines to the right wingtip
    ctx.lineTo(x + w - 10, y + h - 10); // body line up right side
    ctx.lineTo(x + w - 10, y + 12);    // wing outline step right
    ctx.lineTo(x + w / 2 + 5, y + 12); // meet back up near the antenna base
    ctx.closePath();           // links the final point back to the start
    ctx.fill();                // fills the inside of our custom ship shape with solid green
}

// Helper function to draw an alien spaceship block with cute little retro insect/invader antennas and legs
function drawAlienShip(x, y, w, h) {
    ctx.fillStyle = "#ff00ff"; // set color to vibrant magenta
    ctx.fillRect(x + 10, y, w - 20, h); // draw the main square cockpit center body
    ctx.fillRect(x, y + 8, w, h - 16);   // draw horizontal wings stretching all the way left and right
    ctx.fillRect(x + 4, y + h - 4, 6, 4); // draw a blocky left leg extending down
    ctx.fillRect(x + w - 10, y + h - 4, 6, 4); // draw a blocky right leg extending down
    ctx.fillRect(x + 4, y, 4, 4);        // draw a left top antenna tip
    ctx.fillRect(x + w - 8, y, 4, 4);    // draw a right top antenna tip
}

// the main update funciton that will be called repeatedly to update the game state and render the graphics
function update() {
    // If the game is flagged as over or won, freeze all movement and logic updates instantly
    if (isGameOver || isGameWon) return;

    // if the left arrow key is pressed, move the spaceship to the left
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= player.speed;
    }

    // if the right arrow key is pressed, move the spaceship to the right
    if (keys.ArrowRight && player.x + player.width < canvas.width) {
        player.x += player.speed;
    }

    // update the position of each bullet and check for alien collisions
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].y -= bullets[i].speed;
        const b = bullets[i];

        for (let j = enemies.length - 1; j >= 0; j--) {
            const e = enemies[j];

            if (b.x < e.x + e.width &&  
                b.x + b.width > e.x &&  
                b.y < e.y + e.height && 
                b.y + b.height > e.y) { 
                
                enemies.splice(j, 1);
                bullets.splice(i, 1);
                break;
            }
        }

        if (bullets[i] && bullets[i].y < 0) {
            bullets.splice(i, 1); 
        }
    }

    // WIN CONDITION: If you successfully shoot down every single alien, flag the game as won!
    if (enemies.length === 0) {
        isGameWon = true;
        return; // stop executing remaining update updates for this frame
    }

    // Alien Swarm movement logic tracking
    let touchWall = false; // flag to remember if ANY alien bumped into a side wall this frame
    
    // checks all active enemies to see if their current trajectory pushes them out of bounds
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].x += enemySpeed * enemyDirection; // shift current alien horizontally
        
        // if an alien reaches the far right edge OR slips past the far left edge
        if (enemies[i].x + enemies[i].width >= canvas.width || enemies[i].x <= 0) {
            touchWall = true; // flag that we hit a boundary wall
        }

        // LOSE CONDITION: If an alien hits the level of the player's spaceship body
        if (enemies[i].y + enemies[i].height >= player.y) {
            player.lives -= 1; // deduct a life from the player pool
            if (player.lives <= 0) {
                isGameOver = true; // trigger a hard game over state if out of lives
            } else {
                spawnEnemies(); // if they have lives left, reset the enemy grid to the top
                bullets.length = 0; // instantly clear lasers to make it fair
                break; // stop checking loops for this frame
            }
        }
    }

    // If a wall was flagged, drop all aliens down and flip their direction row-wide
    if (touchWall) {
        enemyDirection *= -1; // reverses direction
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].y += 15; // pushes every single alien down by 15 pixels closer to earth
        }
    }
}
 
// the main draw function that will be called repeatedly to render the game graphics
function draw() {
    // clear the canvas before drawing the new frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Call our special shape generator to draw the green player spaceship
    drawPlayerShip(player.x, player.y, player.width, player.height);

    // sets the drawing color to bright red for the player's laser bullets
    ctx.fillStyle = "#ff0000";
    for (let i = 0; i < bullets.length; i++) {
        const b = bullets[i];
        ctx.fillRect(b.x, b.y, b.width, b.height);
    }

    // Loop to draw all the custom alien spaceships onto the map
    for (let i = 0; i < enemies.length; i++) {
        const e = enemies[i];
        drawAlienShip(e.x, e.y, e.width, e.height); // use our custom vector-block generator
    }

    // UI DRAWING: Renders the active life tracker text in the top left corner of the screen
    ctx.fillStyle = "#ffffff";          // use plain crisp white text color
    ctx.font = "20px 'Courier New', monospace"; // set font family to an awesome retro monospaced style
    ctx.fillText("LIVES: " + player.lives, 20, 30); // prints text string on screen at top-left coordinate (20,30)

    // GAME OVER SCREEN OVERLAY
    if (isGameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)"; // transparent black backdrop color mask
        ctx.fillRect(0, 0, canvas.width, canvas.height); // draws background shade plate over entire map
        
        ctx.fillStyle = "#ff0000";         // switch color to blood red
        ctx.font = "bold 50px 'Courier New', monospace"; // extra large retro text font
        ctx.textAlign = "center";          // centers the origin point of text strings
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 20); // draws main text centered
        
        ctx.fillStyle = "#ffffff";         // switch color back to clean white
        ctx.font = "20px 'Courier New', monospace"; // medium text size
        ctx.fillText("Press SPACE or R to Try Again", canvas.width / 2, canvas.height / 2 + 30); // subtext hints
        ctx.textAlign = "start";           // resets default text alignment origin rule for safety
    }

    // WIN SCREEN OVERLAY
    if (isGameWon) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.85)"; // slightly darker translucent backdrop mask for the win screen
        ctx.fillRect(0, 0, canvas.width, canvas.height); // draws background plate across canvas
        
        ctx.fillStyle = "#00ff00";         // switch color to victory neon green
        ctx.font = "bold 50px 'Courier New', monospace"; // large retro font layout
        ctx.textAlign = "center";          // centers the text string
        ctx.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2 - 20); // renders main victory message
        
        ctx.fillStyle = "#ffffff";         // switch color to crisp white
        ctx.font = "20px 'Courier New', monospace"; // medium size prompt text
        ctx.fillText("Press SPACE or R to Play Again", canvas.width / 2, canvas.height / 2 + 30); // actionable subtext
        ctx.textAlign = "start";           // resets default canvas tracking alignment for safety
    }
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
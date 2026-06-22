

// let playList = ["song1", "song2", "song3", "song4"];

// playList.splice(2, 2);
// console.log(playList);

// playList.pop();

// console.log(playList);

// playList.shift();

// console.log(playList);

// console.log("Total songs in playlist:", playList.length);

// playList.push("song5");

// console.log("Updated playlist:", playList);

// console.log("Now playing:", playList[2]);

// let shoppingList = ["milk", "eggs", "bread", "butter"];

// // console.log(shoppingList.length)

// // shoppingList.push("cheese");
// shoppingList[2] = "cheese";
// console.log(shoppingList);

// let videoGames = ["Mario", "Zelda", "Metroid", "Kirby"];
// let highScores = [100, 200, 300, 400];

// // console.log(videoGames[0]);
// console.log(videoGames[1]);
// // console.log(videoGames[2]);
// // console.log(videoGames[3]);

// function titleCase(sentence) {
//     if (!sentence) return "";

//     let words = sentence.split(" ");

//     let capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });

//     return capitalizedWords.join(" ");
// }

// let gameTitle = "the legend of zelda: breath of the wild";
// console.log(titleCase(gameTitle));   // Output: "The Legend Of Zelda: Breath Of The Wild"

// let videoTitle = "a new hope";
// console.log(titleCase(videoTitle));   // Output: "A New Hope"

// function cleanUserName(rawName) {

//     let cleanSpace = rawName.trim();

//     return cleanSpace.charAt(0).toUpperCase() + cleanSpace.slice(1).toLowerCase();
// }

// let messyInput = " bOBa ";
// let properUsername = cleanUserName(messyInput);

// console.log(`Welcom back, ${properUsername}!`);   // Output: "Welcome back, Boba!"
// function capitalizeText(str) {
//     if (!str) return "";
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// console.log(capitalizeText("boba plays PC games"));   // Output: "Boba plays pc games"
// console.log(capitalizeText("wOw mODS aRe COol"));
// let text = "boba plays PC games";

// let capitalized = text.charAt(0).toUpperCase() + text.slice(1);

// console.log(capitalized);   // Output: "Boba plays pc games"

// let text = "Hello, world!";
// let capitalized = text.charAt(0).toUpperCase() + text.slice(1);
// console.log(capitalized);   // Output: "Hello, world!"

// let text = "Hello, world!";
// let capitalizedText = text.toUpperCase();
// console.log(capitalizedText);   // Output: "HELLO, WORLD!"

// let userCartTotal = 1;
// let shippingCost = userCartTotal ? 5 : 0;
// console.log("Shipping cost:", shippingCost);

// let age = 20;
// let canVote;

// if (age >= 18) {
//     canVote = true;
// } else {
//     canVote = false;
// }
// console.log("Can vote:", canVote);

// so instead of writing the above code, 
// we can write it in a more concise way using a ternary operator

// let age=10;
// let canVote = age >= 18 ? "yes" : "no";
// console.log("Can vote:", canVote);

// let username = "Boba";

// if (username) {
//     console.log("Welcome back, " + username + "!");
// } else {
//     console.log("Welcome, guest! Please log in.");
// }
// let isRaining = false;

// if (isRaining) {
//     console.log("Don't forget to take an umbrella!");
// } else {
//     console.log("Enjoy the sunny weather!");
// }

// let hasTicket = true;
// let isWearingShoes = false;

// if (hasTicket && isWearingShoes) {
//     console.log("You can enter the movie theater.");
// } else {
//     console.log("You cannot enter the movie theater. Please make sure you have a ticket and are wearing shoes.");
// }

// let age = 100;

// if (age > 18) {
//     console.log("Access granted. Enjoy the movie!");
// } else {
//     console.log("Access denied. You must be at least 18 years old to watch this movie.");
// }

// this is a comment

// let temperature = 8;

// if (temperature > 30) {
//     console.log("It's scrothing outside! Wear shorts.");
// } else if (temperature >= 15) {
//     console.log("Beautiful day! A t-shirt is fine");
// } else {
//     console.log("It's cold! Wear a jacket.");
// }

// let direction = "to the left";

// switch (direction) {
//     case "north":
//         console.log("you walk into a dark forest");
//         break;
//     case "left":
//         console.log("you stumble into a hidden cave");
//         break;
//     case "right":
//         console.log("you find a hidden treasure");
//         break;
//     default:
//         console.log("you walk into a wall");
// };


// const user = {
//     name: "Boba",
//     age: 40,
//     height: 1.65, // meters
//     weight: 90 // kilos
// };

// console.log(user.height);


// const numbers = [1, 2, 3];

// numbers.forEach(n => console.log(n));

// const fruits = ["apple", "orange", "bannana"];
// fruits.forEach(f => console.log(f));

// const greet = (name) => "Hello " + name;
// console.log(greet("Boba"));

// function greet(name) {
//     return "Hello " + name;
// }

// console.log(greet("Boba"));


// let age = 10;

// if (age > 18) {
//     console.log("adult");
// } else {
//     console.log("minor");
// }
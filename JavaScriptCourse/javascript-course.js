
// input

function doubleNumber(number) {
    return number * 2; // this exsit the funciton and spits the answer out
}

let myResult = doubleNumber(5); // this is the input
console.log(myResult); // Output: 10

// 'name' is a placeholder (parameter)
// function sayHello(name) {
//     console.log("Hello, " + name + "!");
// }

// // when we call it, we pas the real data (argument)
// sayHello("Boba");
// sayHello("Neo");
// sayHello("Trinity");

// let prices = [10, 20, 130, 240, 50];

// for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > 40) {
//         console.log("Found an epensive item: " + prices[i]);
//     }
// }

// let members = ["Alex", "Bob", "Charlie", "David"];

// // We stop wen 'i' is no longer less than the total number o fmember (4)
// for (let i = 0; i < members.length; i ++) {
//     console.log("Welcom to the team, " + members[i] + "!");

// }

// for (let i = 0; i < 4; i++) {
//     console.log("Looping! Current index is: " + i);
// }

// for (let i = 0; i <= 5; i++) {
//     console.log("This is repetition number: " + i);
// }

// let inventory = [
//     { item: "shield", stock: 5 },
//     { item: "sword", stock: 10 },
//     { item: "potion", stock: 20 }
// ]

// if (inventory[0].stock > 0) {
//     console.log(`The ${inventory[0].item} is in stock!`);
// } else {
//     console.log(`The ${inventory[0].item} is out of stock!`);
// }
// let player = { name: "Neo", level: 99, health: 100, mana: 50 };
// let userChoice = "health";

// console.log(`The player's ${userChoice} is: ${player[userChoice]}`); // Output: The player's health is: 100


// let shoppingCart = [
//     { name: "Gmaing Mouse", price: 49.99 },
//     { name: "Mechanical Keyboard", price: 89.99 },
//     { name: "Gaming Headset", price: 79.99 },
//     { name: "Gaming Chair", price: 199.99 }
// ];

// let firstItem = shoppingCart[2];
// console.log(`The third item in the shopping cart is: ${firstItem.name} and it costs $${firstItem.price}`); // Output: The first item in the shopping cart is: Gaming Mouse and it costs $49.99

// let videoGame = {
//     title: "The Legend of Zelda: Breath of the Wild",
//     developer: "Nintendo",
//     releaseYear: 2017,
//     platforms: ["Nintendo Switch", "Wii U"],
//     isMultiplayer: false,
//     rating: 10,
//     price: 59.99,
// }


// videoGame.price = 49.99;
// console.log(`The game ${videoGame.title} cost ${videoGame.price}`); // Output: 49.99
// let userProfile = {
//     username: "Boba",
//     age: 40,
//     isPremium: true,
//     favoriteLanguages: ["JavaScript", "Python", "C++"]
// };

// userProfile.age = 26;
// userProfile.country = "USA";

// console.log(userProfile);

// console.log(userProfile.username); // Output: Boba
// console.log(userProfile.age); // Output: 40
// console.log(userProfile.isPremium); // Output: true
// console.log(userProfile.favoriteLanguages); // Output: ["JavaScript", "Python", "C++"]

// let ticketCount = 100;

// const prizeChoice = ["car", "vacation", "cash", "gift card"];

// let mySelection = prizeChoice[1]; // Example selection, you can change this to test different cases

// switch (mySelection) {
//     case "car": 
//     ticketCount = ticketCount - 80;
//         break;
//     case "vacation":
//     ticketCount = ticketCount - 50;
//         break;
//     case "cash":
//     ticketCount = ticketCount - 20;
//         break;
//     case "gift card":
//     ticketCount = ticketCount - 10;
//         break;
//     default:
//         console.log("Invalid prize choice.");

// }

// console.log("Remaining tickets:", ticketCount);

// const guestAge = 25;

// const hasTicket = false;

// const clubList = ["Alice", "Bob", "Charlie", "David"];

// if (guestAge >= 18 && hasTicket) {
//     console.log("Welcome to the club!");
// } else if (guestAge < 18 && hasTicket) {
//     console.log("Sorry, you must be at least 18 years old to enter the club.");
// } else if (guestAge >= 18 && !hasTicket) {
//     console.log("Sorry, you need a ticket to enter the club.");
// } else {
//     console.log("Sorry, you must be at least 18 years old and have a ticket to enter the club.");
// } 
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
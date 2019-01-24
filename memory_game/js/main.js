console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[2];

cardsInPlay.push(cardOne);

console.log("User flipped" + " " + cardsInPlay[0]);

var cardTwo = cards[3];

cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardsInPlay[1]);

if (cardsInPlay.length === 2){
	//check for match
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] != cardsInPlay[1]) {
		alert("Sorry, try again.");
	}
}
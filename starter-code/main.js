// Emmanuel 19102016
console.log("JS file is connected to HTML! Woo!")

// Declare the variables
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var played = 0;
var won = 0;

// Assuming there would be 4 cards, this will create the element
function createCards() {
	var gameBoard = document.getElementById( "game-board" );

	for( var i = 0; i < 4; i++ )
	{
		var card = document.createElement( "div" );
		card.className = "card";
		document.getElementById( "game-board" ).appendChild( card );
	}	

	// Creating the board game (Add listener and initialize scoreboard)
	createBoard();
}

// This will create the board game for the cards and scoreboard
function createBoard() {

	var cardElement = document.getElementsByClassName( "card" );
	for( var i = 0; i < cards.length; i++ )
	{
		cardElement[i].setAttribute( "data-card", cards[i] );
		cardElement[i].addEventListener( "click", isTwoCards );
	}

	// Set the scoreboard message
	document.getElementById( "gamesplayed" ).innerHTML = "<h2>Games played: "+ played +"</h2>";
	document.getElementById( "gameswon" ).innerHTML = "<h2>Games won: "+ won +"</h2>";
}

function isMatch( cards ) {
	if( cards[0] == cards[1] )
	{
		// Increment on how many have the games played and won
		played++;
		won++;
		
		// Show the result
		document.getElementById( "displayresult" ).textContent = "You found a match!";
		document.getElementById( "gamesplayed" ).innerHTML = "<h2>Games played:"+ played +"</h2>";
		document.getElementById( "gameswon" ).innerHTML = "<h2>Games won:"+ won +"</h2>";
	}
	else
	{	
		// Increment on how many have the games played
		played++;

		// Show the result
		document.getElementById( "displayresult" ).textContent = "Sorry, try again.";
		document.getElementById( "gamesplayed" ).innerHTML = "<h2>Games played: "+ played +"</h2>";
		document.getElementById( "gameswon" ).innerHTML = "<h2>Games won: "+ won +"</h2>";
	}
}

function isTwoCards() {
	// Add the detail of the card for comparison checking
	cardsInPlay.push( this.getAttribute( "data-card" ) );

	if( this.getAttribute( "data-card" ) == "king" )
	{
		this.innerHTML = '<img src="king_of_spades.png" alt="King" height=200px width=150px />';
	}
	else if( this.getAttribute( "data-card" ) == "queen" )
	{
		this.innerHTML = '<img src="queen_of_spades.png" alt="Queen" height=200px width=150px />';
	}

	if( cardsInPlay.length == 2 )
	{
		// Check if it matches
		isMatch( cardsInPlay );	

		// Use to reset the details of the card data when the card being clicked
		cardsInPlay = [];
	}

}

function playAgain() {
	// Just undo the flip of the cardsImageElement
	removeFlipImage();
	resetResultShown();
}

function resetGame() {
	// Reset counter
	played = 0;
	won = 0;

	// Reset cards
	removeFlipImage();
	resetResultShown();
	createCards();
}

function removeFlipImage() {
	var cardsImageElement = document.getElementsByClassName( "card" );

	for( var i = 0; i < cardsImageElement.length; i++ )
	{
		cardsImageElement[i].innerHTML = "";
	}
}

function resetResultShown() {
	document.getElementById( "displayresult" ).innerHTML = "";
}

// Initialize the card game
createCards();
console.log("JS file is connected to HTML! Woo!")

var cardOne, cardTwo, cardThree, cardFour;
cardOne = "king";
cardTwo = "queen";
cardThree = "king";
cardFour = "queen";

/*
if( cardOne == cardThree || cardTwo == cardFour )
{
	alert( "You found a match!" );
}
else
{
	alert( "Sorry, try again." );
}
*/


// Assuming there would be 4 cards, this will create the element
function createCards() {
	var gameBoard = document.getElementById( "game-board" );

	for( var i = 0; i < 4; i++ )
	{
		var card = document.createElement( "div" );
		//card.setAttribute( 'class', 'card' );
		card.className = "card";
		document.getElementById( "game-board" ).appendChild( card );
	}	
}

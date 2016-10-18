console.log("JS file is connected to HTML! Woo!")

var cardOne, cardTwo, cardThree, cardFour;
cardOne = "king";
cardTwo = "queen";
cardThree = "king";
cardFour = "queen";

if( cardOne == cardThree || cardTwo == cardFour )
{
	alert( "You found a match!" );
}
else
{
	alert( "Sorry, try again." );
}
//I hate functions only because they hate me!!!!!!!!!!!
//I need to get better with IIFEs
//Global variables ugh!

var testString = document.getElementById("input").value; 
if (testString === undefined) {
	testString = "Hello";
};
var submitButton = document.getElementById("submit");
var finalResult = document.getElementById("showMe");  			

submitButton.addEventListener("click", myRegex);
submitButton.addEventListener("click", reversal);
submitButton.addEventListener("click", alphabits);
submitButton.addEventListener("click", palindrome);

function myRegex() {
	var letters = /^[A-Za-z]+$/;
	if (testString.match(letters)) {
		alert("Please do not enter numbers.  It makes Talbot very unhappy!!");
		window.location.reload();
		break;
	}
};

//Enter button will submit
testString.onkeypress = function(e){
    if(e.keyCode === 13) {
        //e.preventDefault();
        var pressedEnter = submitButton.click();
    }
}

function reversal(testString) {
	//reverses the order of the characters in the string, 
	//and outputs the result in the DOM, below the text input.

	var myReversal = testString.split("").reverse().join("") + " reversal";	
	console.log("myReversal is: ", myReversal);
	//finalResult.innerHTML = ``
};
function alphabits(testString) {
	//return the characters in alphabetical order, 
	//and outputs the result in the DOM, below the text input.

	var myAlphabits = testString.split("").sort().join("") + " alphabits";
	console.log("myAlphabits are: ", myAlphabits);
	//finalResult.innerHTML = `` 
};
function palindrome(testString) {
	//determine whether the string is a palindrome. 
	//If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

	var myPalindrome = testString.split("").reverse().join("")
	console.log("myPalindrome is: ", myPalindrome);

		if (testString === "") {
			finalResult.innerHTML = "";
		} else if (testString === myPalindrome) {
			finalResult.innerHTML = `${testString} palindrome`;
		} else {
			finalResult.innerHTML = `${testString}---no palindrome for you!`;
		}
};

reversal(testString);
alphabits(testString);
palindrome(testString);
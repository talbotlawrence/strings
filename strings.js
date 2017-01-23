// function validateText(text) {
// 	var getClass = document.getElementsByClassName("textVal")[0].value;
// 	console.log("getClass", getClass);
// 	var textRegex = /[A-Z][a-z]/;
// 	var testInput = getClass.search(textRegex);
// }
console.log("hi");
var userInput;

document.getElementById("pleaseSubmit")
    .addEventListener("click", function(event){
     userInput = document.getElementById("textVal").value;
     console.log("userInput", userInput);
});

// var textRegex = /[0-9]/;
// if (userInput.value.match(textRegex)) {
// 	alert("Please do not enter numbers");
// 	location.reload();
// }




/////////////////////////////////////////////////////////////////////////////////////
// function reversal(anything) {
// 	//reverses the order of the characters in the string, 
// 	//and outputs the result in the DOM, below the text input.

// 	var testString = anything.target.innerHTML;
// 	return testString;
// }

// function alphabits() {
// 	//return the characters in alphabetical order, 
// 	//and outputs the result in the DOM, below the text input.

// }

// function palindrome() {
// 	//determine whether the string is a palindrome. 
// 	//If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

// }

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

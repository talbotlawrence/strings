console.log("hi");

//MAKE MORE FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var userInput;

function getUserInput() {

}
	document.getElementById("pleaseSubmit")
    .addEventListener("click", function(event){
     userInput = document.getElementById("textVal").value;
	     
     console.log("userInput", userInput);
})


if (isNaN(parseInt(userInput))) {
			alert("Please do not enter numbers");
			userInput = "";
}


//Enter button will submit
document.getElementById("textVal").addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        document.getElementById("pleaseSubmit").click();
    }   
});


// var textRegex = /[0-9]/;
// if (textRegex.test(userInput)) {
// 	alert("Please do not enter numbers");
// 	window.location.reload();
	break;
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

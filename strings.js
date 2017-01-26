//console.log("hi");

var finalResult = document.getElementById("dumpIt");            //Global variables ugh!
console.log("finalResult", finalResult);
var testString = document.getElementById("textVal").value;       //I need to get better with IIFEs
console.log("testString", testString);
var submitButton = document.getElementById("pleaseSubmit");

if (testString === "") {	//this is for testing purposes.
	testString = "Talbot";
};

submitButton.addEventListener("click", myRegex);
console.log("after regex addEventListener", testString);
submitButton.addEventListener("click", reversal);
submitButton.addEventListener("click", alphabits);
submitButton.addEventListener("click", palindrome);
////////////////////////////////////////////////////////////////////////////////////////
function myRegex() {
    console.log("testString in Regex", testString)
    var letters = /^[A-Za-z]+$/;
    if (testString.match(letters)) {
        alert("Please do not enter numbers.  It makes Talbot very unhappy!!");
        window.location.reload();
        break;
    }
};

//Enter button will submit
testString.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        submitButton.click();
    }   
});

/////////////////////////////////////////////////////////////////////////////////////

function reversal(userInput) {
	//reverses the order of the characters in the string, 
	//and outputs the result in the DOM, below the text input.
    
    finalResult.innerHTML = userInput.split("").reverse().join("") + " reversal";	
};

function alphabits(userInput) {
	//return the characters in alphabetical order, 
	//and outputs the result in the DOM, below the text input.
    
    finalResult.innerHTML = userInput.split("").sort().join("") + " alphabits";
};


function palindrome(userInput) {
	//determine whether the string is a palindrome. 
	//If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
    
    var reverseUserInput = userInput.split("").reverse().join("")
    
    if (userInput === "") {
        finalResult.innerHTML = "";
    } else if (userInput === reverseUserInput) {
        finalResult.innerHTML = userInput + " palindrome";
    } else {
        finalResult.innerHTML = userInput + " ---no palindrome for you!";
    }

};

reversal(testString);
alphabits(testString);
palindrome(testString);
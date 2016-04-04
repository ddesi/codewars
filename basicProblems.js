//Homework | Week 2 | Day 1

// Write 3 different functions that take input and return something via the console or an alert.

alert(Oh Hello!)

var x = 45
console.log(x * 10)

var firstName = "James";
console.log("hi " + firstName);


// Create a script with two variables assigned to two numbers. 
// Add them together and output the result to the console. Now do the same with two strings.

var x = 20;
var y = 10;
console.log(x + y);

var youKnow = "You know nothing ";
var firstName = "John Snow";
console.log(youKnow + firstName);


// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var realNominees = ["Idris", "Tessa", "Boyega"];
var soWhite = ["Leo", "Matt", "Michael"];
var oscars = [realNominees, soWhite];

console.log(oscars[0][0] + " not " + oscars[1][0]);


// Write a script that checks if a variable is less than 10. If it is, 
// alert the user that their variable is less than 10. 
// If it is not, using the console, let the user know that what the variable was 
// and that it was greater than 10.

var x = 12;

if(x<10) {
	console.log("if x is less than 10 you will see this");
} else {
	console.log("if x is greater than 10 you will see this");
}


//Try running the script and then changing the variable's value to see 
// how this affects the program's output.

//Write a similar program to check if a string stored in a variable is the same as another string.

var stringOne = "blue";
var stringTwo = "orange";

if (stringOne === stringTwo) {
	console.log("the strings are the same");
} else {
	console.log("the strings are different");
}


//Declare a function that takes a name as an argument and tells the user what name 
// they've entered. Try running it after it has been declared.

var name = "johnny";

function randomName(name){
	return "the name that you entered is " + name;
}

console.log(randomName(name));


// Declare a function that takes no arguments but prints something to the console. 
// Try running it after it has been declared.

function noArgument(){
	return "";
}

console.log("this function had no arguments");


//Declare a function that depending upon which virtual 'door' was entered tells the user 
// they've received a different 'prize' in an alert. After declaring the function, try running it with different options.

function virtualDoor (number) {
	if(number == 1) {
		console.log("you won a cruise");
	} else if(number == 2) {
		console.log("you won a movie ticket");
	} else if(number => 3) {
		console.log("you won a free hug");
	}
};

virtualDoor(1);



var value = 46373

if (value < 10) {
	alert("you will never see this!")
} else {
	alert("you will see this though")
};

if ("stringone" === "stringtwo") {
	alert("helllooo")
} else {
	alert("now it's false")
};


// exercise 2 declare a function that takes a name as an argument

function someName(userName){
	return "this is what you entered:" + userName;
}

alert(someName("orlando"));


// exercise 2 declare a function that has no arguments

function noArguments(){
	console.log("this had no no arguments")
};

noArguments();


// exercise 2 declare a function that has multiple choices

function chooseDoor(doorNumber) {
	if (doorNumber == 1) {
		console.log("you won a house")
	} else if(doorNumber == 2) {
		console.log("you won a boat")
	} else if(doorNumber == 3) {
		console.log("you lost")
	}
};

chooseDoor(3);


// for loop exercise

names = ["thomas", "john", "james", "luke"]
for(var i = 0; i < names.length; i++){
	console.log(names[i] + " is my friend")
};

// while loop ex

for(var i = 99; i > 0; i--) { 
	console.log(i + “ bottles of Root beer, pass one down, pass it around”)
}

var i = 99

while(i > 0) { 
	console.log(i + “ Bottles of Root beer… take one down, pass it around”) 
	i--; 
}





















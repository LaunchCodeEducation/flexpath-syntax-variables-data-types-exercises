import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` code below to match the EXACT name
     of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_01();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    1. Using console.log, print the String "Hello, World!" to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  console.log("1Hello, World!");

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /*

    Exercise 2

    1. Declare a variable named "myAge" using the `let` keyword, and give it a Number value correlating to your age
    2. Declare a variable named "myName" using the `const` keyword and give it a String value that matches your first name
    3. Log both of these variables to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  Let myAge = 72;
  Const myName = "George";
  Console.log("My name is", myName,"and my age is", myAge);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  const num1 = 15;
  const num2 = 5;

  /*

    Exercise 3
    
    We have defined two variables for you above, num1 and num2
    
    1. Declare a variable named "sum" that contains the sum of num1 and num2
    2. Declare a variable named "subtract" that contains the result of num1 minus num2
    3. Declare a variable named "multiply" that contains the result of num1 multiplied by num2
    4. Declare a variable named "divide" that contains the result of num1 divided by num2
    5. Then, log each of these variables to the console.

    You can use `let` or `const` to define these variables, it's up to you!

  */

  // CODE IN THE OPEN LINES BELOW

  let sum = num1+num2;
  let subtract = num1 - num2;
  let multiply = num1 * num2;
  let divide = num1 / num2;

  console.log("Sum:", sum);
  console.log("Subtract:", subtract);
  console.log("Multiply:", multiply);
  console.log("Divide:", divide);
	
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /*

    Exercise 4
    
    1. Create a variable below named 'x'.
    2. Assign 'x' a Number value. Then log the typeof 'x' to the console
    3. Assign 'x' a String value. Then log the typeof 'x' to the console
    4. Assign 'x' a Boolean value. Then log the typeof 'x' to the console

  */

  // CODE IN THE OPEN LINES BELOW

 let x = 23;
 console.log(typeof x);
 x = "Hello!";
 console.log(typeof x);
 x = true;
 console.log(typeof x);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /*

    Exercise 5

    1. Create a variable named 'isAvailable' with a Boolean value of 'true'
    2. Then, toggle the value of 'isAvailable' using the `!` (not) operator.
        Assign this new value back to the 'isAvailable' variable and log it.

  */

  // CODE IN THE OPEN LINES BELOW

  let isAvailable = true;
  console.log(isAvailable);
  isAvailable = !isAvailable;
  console.log(isAvailable);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /*

    Exercise 6

    1. Create a variable named 'message' and assign it any String value you want
    2. Create a new variable named 'upper'.
        Using the toUpperCase() String method, assign 'upper' an upper-cased
        version of your 'message' variable. Then log 'upper' to the console.
    3. Create a new variable named 'lower'.
        Using the toLowerCase() String method, assign 'lower' a lower-cased
        version of your 'message' variable. Then log 'lower' to the console
    4. Create a new variable named 'length'.
        Using the 'length' property that every String type value has, log the
        length of your 'message' variable to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let message "Attempting to become the Worlds greatest Coder is really a lot of fun!";
  let upper;
  upper = message.toUpperCase();
  console.log upper;
  let lower;
  lower = message.toLowerCase();
  console.log lower;
  console.log("The length of my message is", message.length, "characters");
  


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_07() {
  /* 

    Exercise 7
    
    1. Create a variable named 'name' and give it a value matching your name.
    2. Then, create a variable named 'greeting'.
    3. Using a String template literal, assign this variable the message below, swapping out
       the '[name]' spot in the string with a dynamic reference to your 'name' variable
      
       "Hello, [name]! Welcome to JavaScript!"

       So if I set name = "Christian", this template literal would insert the 'name' variable inside of the 
       String and it would say:

       "Hello, Christian! Welcome to JavaScript!"

    4. Then, log the 'greeting' variable to the console
  */

  // CODE IN THE OPEN LINES BELOW

  const name = "George";
  const = "greeting", 'Hello, ${name}! Welcome to JavaScript!';
  console.log greeting;
	
  
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  /* 

    Exercise 8

    Null vs. Undefined
  
    1. Declare a variable without assigning a value to it. Log it to the console. 
    2. Then, assign the value `null` to another variable. Log it to the console.

    Notice that they print different things to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let notAssigned;
	console.log("Undefined: ", notAssigned);
	let nullvalue = null;
	consle.log("Null: ", nullvalue);
	

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 

    Exercise 9

    Creating Objects
    
    1. Create an object representing a book you like with these exact properties: `title`, `author`, and `publishedYear`.
      Assign this object to a variable named 'book'
    2. Log the `book` variable to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let book = {
	title: "2666",
	author: "Roberto Bolano",
	publishedYear: 2004,
  },
  console.log(book);
	
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 

    Exercise 10

    Accessing Object Properties
    
    1. Copy the `book` object you created in exercise_09 and paste it below.
    2. Then, use dot notation to access the 'title' property from your 'book' variable, and log it to the console
    3. Then, use bracket notation to access the 'author' property from your 'book' variable, and log it to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let book = {
	title: "2666",
	author: "Roberto Bolano",
	publishedYear: 2004,
  },
  console.log("Title" (dot):", book.title);
  console.log("Author (bracket):", book["author"]);
  
  // CODE IN THE OPEN LINES ABOVE];
}

function exercise_11() {
  /* 

    Exercise 11

    Modifying Objects
    
    Change the `publishedYear` of your book object and add a new property for `genre`.
    
    1. Copy the `book` object you created in exercise_09 and paste it below.
    2. Then, using dot notation, change the value tied to the 'publishedYear' property of your `book` object
    3. Then, using bracket notation, create a new property named `genre` for your 'book' object and assign it a String value
    4. Then, log your `book` variable to the console

  */
  // CODE IN THE OPEN LINES BELOW

  let book = {
	title: "2666",
	author: "Roberto Bolano",
	publishedYear: 2004,
  },
  book.publishedyear = 2024;
  book["genre"] = "Detective Fiction";
  console.log("Look at these changes!: ", book);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 

    Exercise 12

    Delete Object Properties
    
    1. Copy the `book` object you created in exercise_09 and paste it below. Log it to the console.
    1. Then, using dot notation and the `delete` keyword, delete the 'author' property from the `book` object   
    2. Then, log your `book` variable to the console. Notice that your object no longer has the 'author' property

  */
  // CODE IN THE OPEN LINES BELOW

  let book = {
	title: "2666",
	author: "Roberto Bolano",
	publishedYear: 2004,
  },
  console.log("Before Delete:", book);
  delete book.author;
  console.log("After Delete:", book);


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  // DONT edit the code below
  const original = { name: "Alice" };
  const copy = original;
  // DONT edit the code above

  /* 

    Exercise 13

    Object Pass by Reference
    
    Notice the code above. We create an `original` object with the name set to 'Alice'.
    We then create a new variable `copy` that has the `original` variable assigned as its value.
    Due to how objects are stored in JavaScript, the `copy` variable doesn't actually contain
    a unique copy of the `original` object. It simply stores a REFERENCE to the `original` object.

    1. In the space below, log the 'name' property of the `original` object variable to the console. 
    2. In the space below, using dot notation, change the 'name' property of the `copy` object to the value "Bob"
    3. Then, log the 'name' property of the `original` object variable to the console again. 
    
    LOOK! It's 'name' property was changed too!

  */
  // CODE IN THE OPEN LINES BELOW

  console.log("Original Name: ", original.name);
  copy.name = "Bob";
  console.log("original Name: ", original name);
  
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 

    Exercise 14

    Date Object
    
    1. Create a new `Date` object and assign it to the variable 'currentDate'. 
    2. Then log the 'currentDate' variable to the console to see the datetime string 
      generated by the `Date` object

  */

  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();
  console.log("Current Date and Time: ", currentDate);
  
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  /* 

    Exercise 15

    Date Methods 
    
    1. Create a new `Date` object and assign it to the variable 'currentDate'. 
    2. Then, Extract the year, month, and day from the current date using the `Date` object methods. 
        Log each of these to the console. 
        
        REMEMBER - months are zero-indexed in the Date object, so you'll need to add 1 to the result
        to get the proper display value for the current month

  */
  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();
  console.log("Year: ", currentDate.getFullYear());
  console.log("Month: ", currentDate.getMonth() +1);
  console.log("Day: ", currentDate.getDay());
  

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 

    Exercise 16

    Custom Dates
    
    1. Create a new variable `birthday` and assign it a new Date object that represents your birthday.
        REMEBER - months are zero-indexed in the Date object

        To generate a date for a 01/29/1994 birthday, the code would look like this:
        const birthday = new Date(1994, 0, 29)

    2. Then, convert it to a date string using the method toDateString.
    3. Then, log that string to the console


  */
  // CODE IN THE OPEN LINES BELOW

  const birthday = new Date(1952,11,05);
  let birthdayString = birthday.toDateString();
  console.log("Birthday: ", birthdayString);
  

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  // DONT edit the code below
  const pastDate = new Date(2024, 9, 1); // October 1, 2024
  // DONT edit the code above

  /* 

  Exercise 17

  Date Arithmetic
  
  We have defined a variable above that contains a Date object for a date in the past.

  1. In the space below, create a new `Date` object and assign it to the variable 'currentDate'. 
  2. Find the time difference between the currentDate and the pastDate and assign it to a variable
  3. Divide this time difference by the following operation to convert it to days:
      (1000 * 60 * 60 * 24)
  2. Using Math.ceil, round this value up and then log it to the console

  */
  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();
  const timeDifference = currentDate - pastDate;
  const timeToDays = timeDifference / (1000 * 60 * 60 * 24);
  const daysDifference = math.ceil (timeToDays);
  console.log("Day Difference: ", daysDifference);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  // DONT edit the code below
  const msgPart1 = "Hello";
  const msgPart2 = "World";
  // DONT edit the code above

  /* 

    Exercise 18

    String Concatenation

    We have defined two variables above: msgPart1 and msgPart2
    
    1. In the space below, use the `+` operator to create an overall string using these variables and whatever
    other strings are required to create the message "With Plus Operator: Hello World!"
    2. Log this message to the console

    3. Then, use a template literal to create the same message, dynamically inserting msgPart1 and msgPart2
    into the template literal to create the message "With Template Literal: Hello World!"
    4. Log this message to the console


  */
  // CODE IN THE OPEN LINES BELOW

  const withPlus = "With Plus Operator: " + msgPart1 + " " + msgPart2 + "!";
  console.log(withPlus);
  const withTemplateLiteral = 'With Template Literal: $(msgPart1) $(msgPart2)!';
  console.log(withtemplateLiteral);
  

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  // DONT edit the code below
  const text = "JavaScript is an excellent language!";
  // DONT edit the code above

  /* 

    Exercise 19

    Include Method

    We have defined a variable above named `text`
    
    1. Using the String .includes() method, check to see if the 'text' variable contains the String 'JavaScript'.
        Log the result to the console.
    2. Then using the same method, check to see if the 'text' variable contains the String 'Python'.
        Log the result to the console
    3. Finally, check to see if the 'text' variable contains the specific string 'javascript'. 
       Notice that this time the word 'javascript' is all lowercase. 
    
       The includes() method should return 'false'.

       In a code comment below, explain why the includes() method returns 'true' when the string value we use is "JavaScript", 
       but returns 'false' when the string value we use is "javascript"
    
  */
  // CODE IN THE OPEN LINES BELOW

  console.log("Includes 'JavaScript':", text.includes("JavaScript"));
  console.log("Includes 'Python':", text.includes("Python"));
  console.log("Includes 'javascript':", text.includes("javascript"));
  
  // CODE IN THE OPEN LINES ABOVE
}

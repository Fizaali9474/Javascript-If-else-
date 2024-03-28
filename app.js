 
 
 
 /*var user =prompt ("Please enter your name")
 var input=user 
 document.write(user)


 
    var num=prompt("Enter a number")
var user=num




if (!isNaN(number)) {
    document.write("<h2>Multiplication Table for " + number + "</h2>");
    document.write("<ul>");
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        document.write("<li>" + number + " x " + i + " = " + result + "</li>");
    }
    document.write("</ul>");
} else {
    
    document.write("<h2>Multiplication Table for 5 (Default)</h2>");
    document.write("<ul>");
    for (var i = 1; i <= 10; i++) {
        var result = 5 * i;
        document.write("<li>5 x " + i + " = " + result + "</li>");
    }
    document.write("</ul>");
}


        
    
var city = prompt("Please enter your city name:");
var input=city
if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome!");
}




            var gender = prompt("Please enter your gender (male or female):");
            var user=gender
        
            if (gender === "male") {
                alert("Good Morning Sir.");
            } else if (gender === "female") {
                alert("Good Morning Ma'am.");
            } else {
                alert("Good Morning!");
            }



var color = prompt("Enter the color of the traffic signal (red, yellow, or green):");
var user=color



switch (color) {
    case "red":
        alert("STOP! The traffic signal is red.");
        break;
    case "yellow":
        alert("CAUTION! The traffic signal is yellow.");
        break;
    case "green":
        alert("GO! The traffic signal is green.");
        break;
    default:
        alert("Invalid color entered. Please enter red, yellow, or green.");
}




var maxage =(prompt("Enter your maximum age:"));
var user=maxage
var currentage = (prompt("Enter your current age:"));
var user=currentage

if (currentAge <= maxAge) {
    document.write("You are welcome!");
} else {
    document.write("Sorry, you are not welcome.");
}



    

var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));
var user=fuel

if (fuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel in your car.");
}



// output of conditiond is written in notebook//


var subject1Marks = (prompt("Enter marks obtained in subject 1:"));
var subject2Marks = (prompt("Enter marks obtained in subject 2:"));
var subject3Marks = (prompt("Enter marks obtained in subject 3:"));
var totalMarks = (prompt("Enter total marks:"));


var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;


var percentage = (totalObtainedMarks / totalMarks) * 100;


var grade = "";
var remarks = "";


if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}


document.write("<h2>Result</h2>")
document.write("<p>Total Marks: " + totalMarks + "</p>")
document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>")
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>")
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>") 



var item1Name = prompt("Enter the name of item 1:");
var item2Name = prompt("Enter the name of item 2:");
var item1Price = parseFloat(prompt("Enter the price of item 1 (PKR):"));
var item2Price = parseFloat(prompt("Enter the price of item 2 (PKR):"));
var item1Quantity = parseInt(prompt("Enter the ordered quantity of item 1:"));
var item2Quantity = parseInt(prompt("Enter the ordered quantity of item 2:"));
var shippingCharges = parseFloat(prompt("Enter shipping charges (PKR):"));


var totalCost = item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges;


if (totalCost > 2000) {
    var discount = 0.10 * totalCost;
    totalCost -= discount;
}


document.write("<h2>Receipt</h2>");
document.write("<p>Item 1: " + item1Name + "</p>");
document.write("<p>Item 1 Price: " + item1Price.toFixed(2) + " PKR</p>");
document.write("<p>Ordered Quantity of Item 1: " + item1Quantity + "</p>");
document.write("<p>Item 2: " + item2Name + "</p>");
document.write("<p>Item 2 Price: " + item2Price.toFixed(2) + " PKR</p>");
document.write("<p>Ordered Quantity of Item 2: " + item2Quantity + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges.toFixed(2) + " PKR</p>");
document.write("<p>Total Cost: " + totalCost.toFixed(2) + " PKR</p>") 





var user = (prompt("Guess the secret number (between 1 and 10):"));
var input=user

if (user === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (user=== secretNumber + 1 || user === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The correct answer was " + secretNumber + ".");
}




var user = prompt("Enter a number:")
var number = (user)
if (number % 3 === 0) 
{
    document.write(number + " is divisible by 3")
}
 else {
    document.write(number + " is not divisible by 3")
}





var teamAname = prompt("Enter the name of Team A:");
var teamBname = prompt("Enter the name of Team B:");
var teamAscore = (prompt("Enter the total score of Team A:"));
var teamBscore = (prompt("Enter the total score of Team B:"));


if (teamAscore > teamBscore) {
    alert(teamAname + " has won the game!");
} else if (teamBscore > teamAscore) {
    alert(teamBname + " has won the game!");
} else {
    alert("It's a tie!");
}




var user = prompt("Please enter a string:");
var input=user
if (user=== "fiza") {
    alert("fiza is a string");
} 

var user = prompt("Please enter a number:");
var input=user
if (user=== "8") {
    alert("8 is a number");
} 




var user = prompt("Please enter a boolean:");
var input=user
if (user=== "true") {
    alert("true is a boolean");
} 




var user=prompt("Enter a number")
var number=user 
    if (number % 3=== 0) {
      Document.write(number+"even")
    } 
    else {
      document.write(number+"odd")
    }
  
    function checkEvenOrOdd(number){
        if (number % 3 === 0) {
          return "Even";
        } else {
          return "Odd";
        }
    }
      var user = 6
      var res = checkEvenOrOdd(user)
      document.write(res)




var temp=prompt('Enter a temperature')
var user=temp


if (temp> 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing outside!");
}





var user=prompt('Enter a number')
var input=user

num1=3
num2=4

if (user === "+") {
    result = num1 + num2
} else if (user=== "-") {
    result = num1 - num2
} else if (user === "*") {
    result = num1 * num2
} else if (user === "/") {
    if (num2 === 0) {
        result = "Cannot divide by zero!"
    } else {
        result = num1 / num2;
    }
} else if (user=== "%") {
    result = num1 % num2;
} else {
    result = "Invalid operation!"
}


alert("Result: " + result)



var day = prompt("Enter the day name:")
var user=day

if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    alert("It's a week day.");
} else if (day === "saturday") {
    alert("It's weekend.");
} else if (day === "sunday") {
    alert("Yay! It's a holiday.");
} else {
    alert("Invalid day name.");
}




var user =prompt('Enter your score')
var input=user

if (user > 50) {
    alert("You are passed.");
} else {
    alert("Try again!");
}

var num1 = prompt("Enter the first number:")
var num2 = prompt("Enter the second number:")



var greaterNumber

if (num1 > num2) {
    greaterNumber = num1;
} else if (num2 > num1) {
    greaterNumber = num2;
} else {
    greaterNumber = "equal";
}

var message = "The greater number of " + num1 + " and " + num2 + " is " + greaterNumber + ".";
alert(message)


var code = prompt("Enter a language code (e.g., 'es', 'de', 'en'):")


var greetings= {
    'es': '¡Helo fiza',
    'de': 'Heloo, ali',
    
};


var greeting = greetings[code] || 'Hello, World!'
alert(greeting)



var num = prompt("Enter a number:")
var user=num

if (num > 0) {
    alert("It's a positive number.")
} else if (num < 0) {
    alert("It's a negative number.")
} else {
    alert("It's zero.")
}



var noun = prompt("Enter a noun:")
var num = prompt("Enter a num:")
var res=num + noun

alert(res)*/







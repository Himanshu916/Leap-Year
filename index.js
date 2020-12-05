
var readLineSync = require('readline-sync');
var chalk = require('chalk');
console.log(chalk.inverse.red.bold("Do you want to know whether your birth year was a leap year or not ?"))
console.log("")
var user = readLineSync.question(chalk.yellow("What is Your Name ? "));
console.log("")
console.log(chalk.red(`Welcome ${user} `))
var dateString = readLineSync.question(chalk.green("enter date as 'mm/dd/year'"));

var dateArray = dateString.split('/');




// if(isNaN)
var dateMonth = dateArray[0];
var dateDay = dateArray[1];
var dateYear = dateArray[2];



var condition = isNaN(dateMonth) || isNaN(dateDay) || isNaN(dateYear);


function isLeapYear()
{
      if(dateYear % 4 === 0 && dateYear %100 != 0)
          {
            return "You born in leap year"
          }

    else if(dateYear %100 ===0 && dateYear%4 === 0 )
        {
          return "you were born in leap year";
        }
    else
        {
         return "you were not born in leap year"
        }
}

if(condition)
{
   console.log("invalid date")
}
else
{
  var result = isLeapYear();
}
console.log("");
console.log(chalk.bold.inverse.blue(result))





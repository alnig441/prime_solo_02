// ! ! !
// Three Bugs
// Line 23: calculateSTI(array) was not called with the corect array index. 
// Line 72: return statement incorrect, -1 removed.
// Line 46/47: rounding applied.


var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  // console.log(typeof array);
	array[i] = calculateSTI(array[i]);  
  // console.log(array[i]);
 	newEl = document.createElement('li');
  // console.log(newEl);
	newText = document.createTextNode(array[i]);
  // console.log(newText.toString());
  // console.log>(newText);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = ' ' + array[0];

  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  // console.log(bonus);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = '\t' + bonus ;
  newArray[2] = '\t' + Math.round(baseSalary * (1.0 + bonus)); // rounding applied
  newArray[3] = '\t' + Math.round(baseSalary * bonus);   // rounding applied
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  newArray = newArray.toString();
  // console.log(newArray);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  // console.log(basePercent);
  return basePercent; // removed -1 from the return statement
}

function getYearAdjustment(employeeNumber){
  // console.log(employeeNumber);
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  // console.log(yearAdjustment);
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  // console.log(incomeAdjustment);
  return incomeAdjustment;
}
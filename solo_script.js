// ! ! !
// Three Bugs
// Line 23: calculateSTI(array) was not called with the corect array index. 
// Line 72: return statement incorrect, -1 removed.
// Line 46/47: rounding applied.


var arrayAtticus = {name: "Atticus", employeeNumber: "2405", baseSalary: "47000", reviewScore: 3};
var arrayJem = {name: "Jem", employeeNumber: "62347", baseSalary: "63500", reviewScore: 4};
var arrayBoo = {name: "Boo", employeeNumber: "11435", baseSalary: "54000", reviewScore: 3};
var arrayScout = {name: "Scout", employeeNumber: "6243", baseSalary: "74750", reviewScore: 5};

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  // console.log(array[i]);
  var string = "";
	array[i] = calculateSTI(array[i]);   
  // console.log(array[i]);

  // var obj = array[i];
  // console.log(obj);

  for(prop in array[i]){
    // console.log(obj[prop]);
    string += array[i][prop];
  }

  // console.log(string);
 	newEl = document.createElement('li');
  // console.log(newEl);
	// newText = document.createTextNode(array[i]['name'] + array[i]['STI'] + array[i]['adjustedSalary'] + array[i]['bonus']);
  newText = document.createTextNode(string);
  // console.log(newText.toString());
  // console.log(newText);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  var newObject = {};

  newObject['name'] = ' ' + object['name'];

  var employeeNumber = object['employeeNumber'];
  var baseSalary = object['baseSalary'];
  var reviewScore = object['reviewScore'];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  // console.log(bonus);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject['STI'] = '\t' + bonus ;
  newObject['adjustedSalary'] = '\t' + Math.round(baseSalary * (1.0 + bonus)); // rounding applied
  newObject['bonus'] = '\t' + Math.round(baseSalary * bonus);   // rounding applied
  console.log(newObject['name'] + " " + newObject['STI'] + " " + newObject['adjustedSalary'] + " " + newObject['bonus']);
  // newArray = newArray.toString();
  // console.log(newArray);
  return newObject;
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
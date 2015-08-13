// ! ! !
// Three Bugs
// Line 23: calculateSTI(array) was not called with the corect array index. 
// Line 72: return statement incorrect, -1 removed.
// Line 46/47: rounding applied.
var Employee = function(array){
  this.employeeName = array[0];
  this.employeeNumber = array[1];
  this.baseSalary = array[2];
  this.reviewScore = array[3];
}


var OutputData = function(employeeName, sti, adjustedSalary, bonus){
  this.employeeName = employeeName;
  this.STI = sti;
  this.adjustedSalary = adjustedSalary;
  this.bonus = bonus;

}

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo =["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];


var array = [new Employee(arrayAtticus), new Employee(arrayJem), new Employee(arrayBoo), new Employee(arrayScout)];

var newEl, newText, position;

//Capture the position of insertion into the DOM

position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  var string = "";
	array[i] = calculateSTI(array[i]);   

  for(prop in array[i]){
    string += array[i][prop];
  }

 	newEl = document.createElement('li');
  // console.log(newEl);
	// newText = document.createTextNode(array[i]['name'] + array[i]['STI'] + array[i]['adjustedSalary'] + array[i]['bonus']);
  newText = document.createTextNode(string);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
 
  var bonus = getBaseSTI(object.reviewScore) + getYearAdjustment(object.employeeNumber) - getIncomeAdjustment(object.baseSalary);

  if(bonus > 0.13){
    bonus = 0.13;
  }

  var sti = '\t' + bonus ;
  var adjustedSalary = '\t' + Math.round(object.baseSalary * (1.0 + bonus)); // rounding applied
  var bonus = '\t' + Math.round(object.baseSalary * bonus);   // rounding applied

  var newOutput = new OutputData(object.employeeName, sti, adjustedSalary, bonus);
  console.log(newOutput);
  return newOutput;
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
  return basePercent; // removed -1 from the return statement
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
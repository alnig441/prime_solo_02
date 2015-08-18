// var decSal = [];
var totalSal = 0;
var empArray = [];
var incr = 0;  

  var Employee = function(first, last, number, title, rating, salary){
  
  this.firstName = first;
  this.lastName = last;
  this.employeeNumber = number;
  this.jobTitle = title;
  this.reviewScore = rating;
  this.salary = salary;
  this.ident = "#" + incr;
  totalSal += parseInt(this.salary);
  incr++;
  // console.log(totalSal);
  };


$(document).ready(function(){


   $('#submit').on('click', function(e){
      e.preventDefault();

    // console.log(totalSal);
    
    //Collect values from form fields
    var firstName = $('#firstname').val();
    var lastName = $('#lastname').val();
    var empNum = $('#id').val();
    var title = $('#title').val();
    var rating = $('#rating').val();
    var salary = $('#salary').val();
    var newEmployee = new Employee(firstName, lastName, empNum, title, rating, salary)
    // var decSal = []; 
    //Build array of emloyees

    empArray.push(newEmployee);
    // newEmployee.ident = incr.toString();

    console.log(empArray);

    //Populate DOM with employee elements
    postData(newEmployee);

    $('ul button').text('Remove');
    $('ul button').addClass('remove' + ' ' + 'btn btn-default btn-xs');

    console.log('inside submit on click '  + totalSal);
    }) // end #submit

console.log(totalSal);
    
    //Remove employee from list
    $('#content').on('click','.remove', function(){
      totalSal = totalSal - decrement(this);
      // console.log(totalSal);
      $(this).parent().remove();

      console.log('inside content remove on click '  + totalSal);

    }); //End .on click remove

console.log(totalSal);


    //Sort function on click 
    $('#sort').on('click', function(){
      $('#content').children().remove();
      empArray.sort(sortOn("firstName"));  
      empArray.sort(sortOn("lastName"));
      for(var i = 0; i<empArray.length; i++){
        postData(empArray[i]);
        $('ul button').text('Remove');
        $('ul button').addClass('remove' + ' ' + 'btn btn-default btn-xs');
      }
    })
     


console.log(totalSal);

})// end document.ready


function postData(employee){

  position = document.getElementById('content');
    // empCount++;
    // totalSal += parseInt(employee['salary']);

    var string = "";
 
    // for(var i = 0; i<employee.length; i++){
      for(prop in employee){
        string += " " + [prop] + ": " + employee[prop].toUpperCase() + " ";
      }

      newEl = document.createElement('li');
      // newEl.setAttribute('value', employee['salary']);

      if(employee['reviewScore']==1){
        newEl.className="danger";
      }
    

    newBut = document.createElement('button');
    $(newBut).attr({'value': employee['salary'], 'id': employee['ident']})

    newText = document.createTextNode(string);
    newEl.appendChild(newBut);
    newEl.appendChild(newText);
    position.appendChild(newEl);
  
}

function decrement(element){
    var temp;
    temp = parseInt($(element).attr('value'));
    for(var i = 0; i < empArray.length; i++){
          if(empArray[i]['ident']==element.getAttribute('id')){
            empArray.splice(empArray[i], 1);

          } 
        }
    console.log('inside decrement ', empArray);
    return temp;
}

function sortOn(property){
    return function(a, b){
        if(a[property] < b[property]){
            return -1;
        }else if(a[property] > b[property]){
            return 1;
        }else{
            return 0;   
        }
    }
}

function calcSalary(){
  console.log('calcSalary begin')
  console.log(typeof totalSal);
  // totalSal = parseInt(totalSal);
  // totalSal = parseInt(empSal) + totalSal;
  console.log(totalSal);
  console.log('in calcSalary end');
}







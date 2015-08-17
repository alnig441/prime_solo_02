var decSal = [];
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
    var decSal = [];
    //Build array of emloyees
    // console.log(typeof salary)

    empArray.push(newEmployee);
    newEmployee.ident = incr.toString();

    console.log(newEmployee);

    //Populate DOM with employee elements
    postData(newEmployee);

    $('ul button').text('Remove');
    $('ul button').addClass('remove' + ' ' + 'btn btn-default btn-xs');

    console.log('inside submit on click '  + totalSal, decSal);
    }) // end #submit

console.log(totalSal, decSal);
    
    //Remove employee from list
    $('#content').on('click','.remove', function(){
      // var temp = [];
      decSal = decrement(this);
      // console.log('return from decrement '+ temp);
      // incr ++;
      // console.log(incr);
      // console.log(decSal);
      // totalSal = parseInt(totalSal);
      totalSal = totalSal - decSal;
      // console.log(totalSal);
      $(this).parent().remove();

      console.log('inside content remove on click '  + totalSal, decSal);

    }); //End .on click remove

console.log(totalSal, decSal);


    //Sort function on click 
    $('#sort').on('click', function(){
      $('#content').children().remove();  
      empArray.sort(sortOn("lastName"));
      for(var i = 0; i<empArray.length; i++){
        postData(empArray[i]);
        $('ul button').text('Remove');
        $('ul button').addClass('remove' + ' ' + 'btn btn-default btn-xs');
      }
    })
     

    // $('.remove').on('click', function(){
    //     decrement(this);
    //     $(this).parent().remove();
    // })

console.log(totalSal, decSal);

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
    // newBut.className='remove';
    newBut.setAttribute('value', employee['salary']);


    newText = document.createTextNode(string);
    newEl.appendChild(newBut);
    newEl.appendChild(newText);
    position.appendChild(newEl);
  
}

function decrement(element){
    // console.log(element);
    var temp;
    // console.log(decSal);
    // console.log(typeof parseInt(element.getAttribute('value')));
    temp = parseInt($(element).attr('value')); 
    // console.log('this is decrement' + decSal + typeof decSal);

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







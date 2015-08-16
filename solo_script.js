var decSal = [];
var totalSal = 0;
var empArray = [];  

  var Employee = function(first, last, number, title, rating, salary){
  this.firstName = first;
  this.lastName = last;
  this.employeeNumber = number;
  this.jobTitle = title;
  this.reviewScore = rating;
  this.salary = salary;
  totalSal += parseInt(this.salary);
  };

$(document).ready(function(){

   $('#submit').on('click', function(e){

    console.log(decSal);
    
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
    empArray.push(newEmployee);

    //Populate DOM with employee elements
    postData(newEmployee);

    $('ul button').text('Remove');
    $('ul button').addClass('remove');

    //Remove employee from list
    $('.remove').on('click', function(){
      decSal = parseInt((decrement(this).toString()));
      // decsal = parseInt(decSal.toString())
      // totalSal = totalSal - decSal;
      // console.log(totalSal);
      $(this).parent().remove();
    })


    //Sort function on click 
    $('#sort').on('click', function(){
      $('#content').children().remove();  
      empArray.sort(sortOn("lastName"));
      for(var i = 0; i<empArray.length; i++){
        postData(empArray[i]);
        $('ul button').text('Remove');
        $('ul button').addClass('remove');
      }
      $('.remove').on('click', function(){
        decrement(this);
        $(this).parent().remove();
      })
    })
      console.log(empArray);
      e.preventDefault();
    })

    
  })

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
    var temp = [];
    temp.push(parseInt(element.getAttribute('value')));    
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








const employeeList = [
  {
    name: 'Jan',
    officeNum: '#1',
    phoneNum: '(222) 222-2222'
  },
  {
    name: 'Juan',
    officeNum: '#304',
    phoneNum: '(489) 789-8789'
  },
  {
    name: 'Margie',
    officeNum: '#789',
    phoneNum: '(789) 789-7897'
  },
  {
    name: 'Sara',
    officeNum: '#32',
    phoneNum: '(222) 789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: '#3',
    phoneNum: '(566) 621-0452'
  },
  {
    name: 'Tasha',
    officeNum: '#213',
    phoneNum: '(789) 766-5675'
  },
  
  {
    name: 'Ty',
    officeNum: '#211',
    phoneNum: '(789) 766-7865'
  },
  {
    name: 'Sarah',
    officeNum: '#345',
    phoneNum: '(222) 789-5231'
  }
];



//1.

const print = function () {
  $('#content').empty();
for (i = 0; i < employeeList.length; i++) {
  render(employeeList[i].name);
  render(employeeList[i].officeNum);
  render(employeeList[i].phoneNum);
  render('-------');
  }
}



//2.

const verify = function () {
  $('#content').html('<input class="verify-input"></input> <button id="verify-button">Verify</button>');
  $('#verify-button').on('click', verifyEmployee);
}
const verifyEmployee = function () {
  let input = $('.verify-input').val().toLowerCase().trim();
  let message = false;
  for (i = 0; i < employeeList.length; i++) {
    if (input === employeeList[i].name.toLowerCase()) {
      message = true;
    }
  }
  if (message) {
    render('Employee Found');
  }
  else {
    render('Employee Not Found');
  }
}



//3.

const lookup = function () {
  $('#content').html('<input class="lookup-input"></input> <button id="lookup-button">Lookup</button>');
  $('#lookup-button').on('click', lookupEmployee);
}
const lookupEmployee = function () { 
const input = $('.lookup-input').val().toLowerCase().trim();
  for (i = 0; i < employeeList.length; i++) {
  if (input === employeeList[i].name.toLowerCase().trim()){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
     }
   }
}



//4.

const contains = function () {
  $('#content').html('<input class="contains-input"></input> <button id="contains-button">Contains</button>');
  $('#contains-button').on('click', containsEmployee);
}
const containsEmployee = function () { 
const input = $('.contains-input').val().toLowerCase().trim();
  if (input !== '') {
  for (i = 0; i < employeeList.length; i++) {
  if (employeeList[i].name.toLowerCase().includes(input)){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
    }
  }
}
}



//5.

const update = function () {
  $('#content').html('Name   <input class="employeeInput"></input><br></br>Number   <input class="fieldInput"></input><br></br>Phone   <input class="valueInput"></input><br></br>   <button id="update-button">Update</button>'); 
  $('#update-button').on('click', updateFunction);
}
const updateFunction = function () {
  const updateEmployee = $('.employeeInput').val().toLowerCase().trim();
  const updateField = $('.fieldInput').val().trim();
  const updateValue = $('.valueInput').val().trim();
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase() === updateEmployee) {
      employeeList[i][updateField] = updateValue;
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}



//6.

const add = function () {
  $('#content').html('Name  <input class="name-input"></input><br></br>Number   <input class="num-input"></input><br></br>Phone   <input class="phone-input"></input><br></br>   <button class="add-button">Add</button>');
  $('.add-button').on('click', addFunction);
}
const addFunction = function () {
const employeeName = $('.name-input').val();
const officeNum = $('.num-input').val();
const telephoneNum = $('.phone-input').val();
employeeList.push({name: employeeName, officeNum: officeNum, phoneNum: telephoneNum});
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
}
}



//7.

const deleteEmployee = function () {
  $('#content').html('<input class="delete-input"></input> <button class="delete-button">Delete</button>');
  $('.delete-button').on('click', deleteFunction);
}
const deleteFunction = function () {
const input = $('.delete-input').val().toLowerCase().trim();
let index = -1;
  for (i = 0; i < employeeList.length; i++) {
  if (employeeList[i].name.toLowerCase().trim() === input){
index = i;
  render('Employee Deleted');
    }
  }
employeeList.splice(index, 1);
  for (i = 0; i < employeeList.length; i++) {
  }
}



$(".printlist").on('click', print);
$(".verifylist").on('click', verify);
$(".lookuplist").on('click', lookup);
$(".containslist").on('click', contains);
$(".updatelist").on('click', update);
$(".addlist").on('click', add);
$(".deletelist").on('click', deleteEmployee);
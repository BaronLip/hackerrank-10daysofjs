// ---BINARY CALCULATOR:--- 100% functional but not passing online???
// find the buttons within document.
// add event listeners to the buttons.
// create function for different actions needed.

// Individual elements:-----
const inputs = document.getElementsByClassName('input');
const arrayOfInputs = Array.from(inputs);
const res = document.getElementById('res');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');

// Functions:-----
const addInput = (e) => {
	res.innerHTML += e.target.innerHTML;
};

const clearInputs = (e) => {
	res.innerHTML = '';
};

const equal = (e) => {
	let equation = res.innerHTML;
	let operator = equation.match(/[\+\-\/\*]/);
	let parts = equation.split(/[\+\-\/\*]/);
	// console.log(equation, parts, operator);
	// console.log(parseInt(parts[0], 2) + operator + parseInt(parts[1], 2))
	let answer = eval(parseInt(parts[0], 2) + operator + parseInt(parts[1], 2));
	res.innerHTML = answer;
};

// Adding event listeners:-----
arrayOfInputs.forEach((input) => input.addEventListener('click', addInput));

btnClr.addEventListener('click', clearInputs);

btnEql.addEventListener('click', equal);

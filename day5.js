// Day 5 -----

// ---ARROW FUNCTIONS:---
let nums = [1,2,3,4,5]

function modifyArray(nums) {
    // Using arrow functions---
    console.log(nums.map(num => num % 2 === 0 ? num * 2 : num * 3))

    // Without using arrow function ---
    // let modified = []
    
    // for (let i = 0; i<nums.length; i++) {
    //     if (nums[i] % 2 == 0) {
    //         modified.push(nums[i] * 2)
    //     } else {
    //         modified.push(nums[i] * 3)
    //     }
    // }
    // console.log(modified)
}
modifyArray(nums)


// ---TEMPLATE LITERALS:---
// A template literal is a string that has embedded expressions (string interpolation).
// Template literals use backticks combined with the dollar sign and curly brackets, (`${expression here}`), to encapsulate the expression.
// An expression can be the default string or any other javascript expression.
// TAGGED TEMPLATE LITERALS - utilizes a function to modify the output of a template literal.

// let literals = ['The area is: ', '.\nThe perimeter is: ', '.']
// let expressions = [140, 48]
let a = 140
let b = 48

function sides(literals, ...expressions) {
    console.log(literals[0], literals[1])
    console.log(expressions[0], expressions[1])
}
// When invoking "sides", a template literal is passed in.
// Javascript knows how to break down the string into an array of string literals.
// Any and all expressions are also passed into an array. THIS IS SUPER ODD.
sides`The area is: ${a * b}.\nThe perimeter is: ${2 * (a + b)} .`
// This challenges solution had more to deal with math than understanding template literals and tagged template literals. I've not included it here. 


// ---INHERITANCE:---
// Create a class of Rectangle using a constructor method.
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

// This creates a prototype method for the Rectangle class.
Rectangle.prototype.area = function area() {
    return this.w * this.h
}

// Creates a Square "subclass" using the "extend" keyword.
// "extends" keyword means that it takes on all of Rectangle classes attributes
class Square extends Rectangle {
    // Because a square only needs one side, I used a default value for the h property.
    constructor(w, h = w) {
        // "super" instructs this subclass to take the constructor behavior from it's parent, the Rectangle class.
        super(w, h)
    }
}

let rect = new Rectangle(3, 3)
let sq = new Square(4, 4)
// console.log(rect.area(), sq.area())
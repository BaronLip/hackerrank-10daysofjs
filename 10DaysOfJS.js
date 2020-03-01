// Day 4 ----
// Create a polygon class.
let lengths = [1, 2, 3]
// Class with a prototype method.
class Polygon {
    constructor(sides) {
        sides.forEach((length, index) => {
            this["side" + (index +1).toString()] = length;
        })
    }

    perimeter(sides) {
        return sides.reduce((a, b) => (a + b))
    }
}


// //Create a class using a constructor.
class Polygon {
    constructor(lengths) {
        this.perimeter = 0
        lengths.forEach((length, index) => {
            this["side" + (index +1).toString()] = length;
            this.perimeter += length;
        })
        console.log(this, this.perimeter)
    }
}

// Create a functional class.
function Polygon (sides) {
    sides.forEach((side, index) => {
        this["side" + (index + 1).toString()] = side;
    })
    // // longhand (a, b) => (a + b).
    // let reducer = (accumulator, currentValue) => (
    //     accumulator + currentValue
    // )

    this.perimeter = sides.reduce((a, b) => (a + b))
    // return sides.reduce(reducer)
}

let triangle = new Polygon(lengths)
console.log(triangle.perimeter())

// let arrayEx = [
//     { x : 1, y : 1},
//     { x : 0, y : 1}
// ]
const countObjects = (a) => {
    let matchCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i].x === a[i].y) {
            matchCount += 1
        }
    }

    console.log(matchCount)
}
// countObjects(arrayEx)

// // This creates a class of Rectangle in a function format.
// function Rectangle (length, width) {
//     this.length = length,
//     this.width = width,
//     this.perimeter = 2 * (length + width),
//     this.area = length * width
// }
// // console.log(Rectangle(4,5))

// This creates a Class of Rectangle in a class format, with a constructor.
// "new" is needed to initialize the Class and construct the individual rectangle. 
class Rectangle {
    constructor(length, width) {
        this.length = length,
        this.width = width,
        this.perimeter = 2 * (length + width),
        this.area = length * width
    }
}
// console.log(new Rectangle(4,5))


// Day 3 -----

const isPositive = (int) => {
    // if int is === 0, throw error "Zero Error"
    // if int is negative, throw error "Negative Error"
    // else return "YES".
    function zeroThrow() {
        throw Error ("Zero Error")
    }

    function negativeThrow() {
        throw Error ("Negative Error")
    }
        
    if (int === 0) {
        zeroThrow() 
    } else if ( int < 0 ) {
        negativeThrow()
    } else {
        console.log( "YES")
    }
}
// isPositive(3)


// let s = "1234"
const reverseString = (s) => {
    // make array from string.
    // reverse the order of the array.
    // join the array together.
    try {
        s = s.split("").reverse().join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}
// reverseString(s)

let nums = [2,3,6,6,5,99,87, 1100, 1100]
const getSecondLargest =(nums) => {
    // find all unique values.
    let unique = nums.filter((value, index, array) => array.indexOf(value) === index )
    // sort the values.
    let sorted = unique.sort((a, b) => a - b) 
    // select the second largest number.
    let secondLargest = sorted[sorted.length - 2]

    return secondLargest
}
getSecondLargest(nums)


// Day 2 -----

const getLetter = (s) => {
    let letter; 

    // // This is my version. Works except for one test case. 
    // switch (true) {
    //     case s.charAt(0).includes("a", "e", "i", "o", "u") :
    //         letter = "A";
    //         break;
    //     case s.charAt(0).includes("b", "c", "d", "f", "g") :
    //         letter = "B";
    //         break;
    //     case s.charAt(0).includes("h", "j", "k", "l", "m") :
    //         letter = "C";
    //         break;
    //     case s.charAt(0).includes("n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z") :
    //         letter = "D";
    //         break;
    //     default:
    //         return undefined;
    // }

    // // This is the discussion solution which is smarter:
    switch (true) {
        case "aeiou".includes(s[0]):
            letter = "A";
            break;
        case "bcdfg".includes(s[0]):
            letter = "B";
            break;
        case "hjklm".includes(s[0]):
            letter = "C";
            break;
        case "npqrstvwxyz".includes(s[0]):
            letter = "D";
            break;
    }

    return letter
}
// let s = "b"
// getLetter(s)


function getGrade(score) {
    let grade;
    if ( score > 25 && score <= 30 ) {
        return grade = "A"
    } else if ( score > 20 && score <= 25 ) {
        return grade = "B"
    } else if ( score > 15 && score <= 20 ) {
        return grade = "C"
    } else if ( score > 10 && score <= 15 ) {
        return grade = "D" 
    } else if ( score > 5 && score <= 10 ) {
        return grade = "E"
    } else if ( score > 0 && score <= 5 ) {
        return grade = "F"
    }
    
    return grade;
}

// getGrade(11)

// -----

// let s = "javascriptloops"

// function vowelsAndConsonants(s) {
    // // this top portion for vowels passes but consonants do not. 
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == "a" || s[i] == "e" || s[i] == "i" ||s[i] == "o" ||s[i] == "u") {
    //         console.log(s[i])
    //     } else {
    //         continue
    //     }
    // }

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] !== "a" || s[i] !== "e" || s[i] !== "i" || s[i] !== "o" ||s[i] !== "u") {
    //         // debugger
    //         console.log(s[i])
    //     } else {
    //         continue
    //     }
    // }
// }

// Solution from discussion.
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
        // This is smart cause it compares the vowels against the string instead of the string against the vowels. The vowels will typically be shorter than the passed in string and result in less loops.
        if (vowels.includes(s[i])) {
           console.log(s[i]);
        }
        else {
            // By adding the line break, '\n', this passes the tests cause it needs to break on individual lines. 
           consonants += s[i] + '\n';
        }
    }
    // .trim() method removes any blank spaces but is not needed. 
    console.log(consonants);
}

// vowelsAndConsonants(s)

// Day 1
const PI = Math.PI
function main(r) {
    // let r = readline() //This is some BS that HackerRank didn't write very well. 
    console.log( PI * Math.pow(r,2) )
    console.log(2 * PI * r )
}
// main(2.6)


// let n = 4
const factorial = (n) => {
    let total = n;
    let num = n;
    // console.log(total)
    for (num; num >= 1; num--) {
        if ( (num - 1) != 0) {
            total *= (num -1)
            // console.log(num, total)
        }
    }
    // console.log(total)
    return total
}
// factorial(n)


function getArea(length, width) {
    let area;
    area = length * width
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = (length * 2) + (width * 2)
    return perimeter;
}

// Day 0
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    const secondInt = parseInt(secondInteger)
    console.log(firstInteger + secondInt)

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal))

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString)
}


function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}
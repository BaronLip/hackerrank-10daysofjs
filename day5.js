// Day 5 -----

// TEMPLATE LITERALS `${expression here}`:
function sides(literals, ...expressions) {
    
}





// INHERITANCE:
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
console.log(rect.area(), sq.area())
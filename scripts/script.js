
class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        return this.name;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }
}

class Rectangle extends Circle {
    constructor(name, radius, width, height) {
        super(name, radius);
        this.width = width;
        this.height = height;
    }

    getWidth() {
       return this.width;
    }

    getHeight() {
       return this.height;
    }
}

class Triangle extends Rectangle {
    constructor(name, radius, width, height, base, height1) {
        super(name, radius, width, height);
        this.base = base;
        this.height1 = height1;
    }

    getBase() {
        return this.base;
    }

    getHeight1() {
        return this.height1;
    }
}

let shape = new Triangle("Area calculation not implemented for generic shape.", 5, 4, 6, 3, 4);

console.log("Area of Circle:" + Math.PI * shape.getRadius() * shape.getRadius());
console.log("Area of Rectangle:" + shape.getWidth() * shape.getHeight());
console.log("Area of Triangle:" + shape.getBase() * shape.getHeight1() / 2);
console.log(shape.area());

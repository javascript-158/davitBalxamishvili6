
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
    constructor(name, radius, width, height, base, height) {
        super(name, radius, width, height);
        this.base = base;
        this.height = height;
    }

    getBase() {
        return this.base;
    }

    getHeight() {
        return this.height;
    }
}

let shape = new Triangle("Area calculation not implemented for generic shape.", "Area calculation not implemented…", "width", "height");

console.log(shape.area());
console.log(shape.getRadius());
console.log(shape.getWidth());
console.log(shape.getHeight());
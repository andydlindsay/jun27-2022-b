class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.width * this.length;
  }

  componentDidMount() {}
}

const rectangle = new Rectangle(3, 5);

console.log(rectangle);
console.log(rectangle.area());

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width);
    this.height = height;

    this.volume = this.volume.bind(this);
  }

  volume() {
    return this.area() * this.height;
  }

  area() {
    return 'this is the area() from inside Prism';
  }

  // componentDidMount() {
    // wheee! the component mounted!!
  // }
}

const prism = new Prism(3, 4, 5);

console.log(prism);
console.log(prism.volume());
console.log(prism.area());

const volume = prism.volume;
volume();

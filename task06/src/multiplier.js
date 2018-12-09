class MultiplierController {
  constructor() {
    this.message = "AngularJS Multiplier";

    this.number = NaN;

    this.input = "";

    this.classNames = "btn";

    this.generate();
  }

  generate() {
    let numbers = [];
    let total = 0;

    for (let i = 1; i < 10; i++) {
      const res = i * this.number;
      total += res;
      numbers.push({ key: i, res, str: isNaN(res) ? "..." : res });
    }

    this.nums = numbers;
    this.total = isNaN(total) ? "..." : total;
  }

  process() {
    const inp = parseInt(this.input);
    const isNan = isNaN(inp);
    this.number = inp;
    this.generate();
    if (isNan) {
      this.classNames = "btn btn-danger";
      this.input = "";
    } 
  }

  reset() {
    this.classNames = "btn";  
    this.number = NaN;
    this.generate();     
  }
}

export { MultiplierController };

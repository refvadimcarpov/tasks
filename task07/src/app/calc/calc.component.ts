import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'calc',
  styles: [``],
  templateUrl: './calc.component.html'
})
export class CalcComponent implements OnInit {

  public number = NaN;

  public input = '';

  public isEndangered = false;

  public nums = [];

  public total = '...';

  constructor() {
    this.generate();
  }

  public generate() {
    const numbers = [];
    let sum = 0;

    for (let i = 1; i < 10; i++) {
      const res = i * this.number;
      sum += res;
      numbers.push({ key: i, res, str: isNaN(res) ? '...' : res });
    }

    this.nums = numbers;
    this.total = isNaN(sum) ? '...' : sum.toString();
  }

  public process() {
    // tslint:disable-next-line:radix
    const inp = parseInt(this.input);
    const isNan = isNaN(inp);
    this.number = inp;
    this.generate();
    if (isNan) {
      this.isEndangered = true;
      this.input = '';
    }
  }

  public reset() {
    this.isEndangered = false;
    this.number = NaN;
    this.generate();
  }

  public ngOnInit() {
    console.log('hello `Calc` component');
  }
}

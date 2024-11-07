import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  currentValue: string = '0';
  previousValue: string = '';
  operation: string | null = null;

  inputNumber(num: string): void {
    if (this.currentValue === '0') {
      this.currentValue = num;
    } else {
      this.currentValue += num;
    }
  }

  calcResult() {
    let result: number;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
    }
  }

  clearEntry() {
    this.currentValue = '0';
  }

  clearAll() {
    this.currentValue = '0';
    this.previousValue = '';
    this.operation = null;
  }
}

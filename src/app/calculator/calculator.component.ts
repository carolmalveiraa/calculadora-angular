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

  setOperation(op: string) {
    if (this.currentValue === '') return;
    if (this.previousValue !== '') {
      this.calcResult();
    }
    this.operation = op;
    this.previousValue = this.currentValue;
    this.currentValue = '0';
  }
  
  subtract() {
    this.setOperation('-');
  }
  
  multiply() {
    this.setOperation('*');
  }
  
  divide() {
    this.setOperation('/');
  }
  add() {
    this.setOperation('+');
  }
  percentage() {
    this.setOperation('%');
  }

  inputDecimal() {
    if (!this.currentValue.includes('.')) {
      this.currentValue += '.';
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
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      case '%':
        result = prev / 100;
        break;
      default:
        return;
    }
  
    this.currentValue = result.toString();
    this.operation = null;
    this.previousValue = '';
  }

  toggleSign() {
    this.currentValue = (parseFloat(this.currentValue) * -1).toString();
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


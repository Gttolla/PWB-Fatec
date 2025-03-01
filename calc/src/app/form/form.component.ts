import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  showHistory: boolean = false;
  history: string[] = [];
  currentNumbers: string = '';

  onClickSum() {
    this.result = this.num1 + this.num2;
    this.history.push(`${this.num1} + ${this.num2} = ${this.result}`);
  }
  onClickSub() {
    this.result = this.num1 - this.num2;
    this.history.push(`${this.num1} - ${this.num2} = ${this.result}`);
  }
  onClickMul() {
    this.result = this.num1 * this.num2;
    this.history.push(`${this.num1} × ${this.num2} = ${this.result}`);
  }
  onClickDiv() {
    this.result = this.num1 / this.num2;
    this.history.push(`${this.num1} ÷ ${this.num2} = ${this.result}`);
  }
  onClickPow() {
    this.result = Math.pow(this.num1, this.num2);
    this.history.push(`${this.num1} ^ ${this.num2} = ${this.result}`);
  }
  onClickSqrt() {
    this.result = Math.sqrt(this.num1);
    this.history.push(`√${this.num1} = ${this.result}`);
  }
  onClickClearField(field: string) {
    field === 'num1' ? this.num1 = 0 : this.num2 = 0;
    this.result = 0;
  }
  onClickClearHistory() {
    this.history = [];
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }

  onClickAddNumbersToCount(numbers: string) {
    this.currentNumbers = numbers;
    this.num1 = Number(this.currentNumbers.split(' ')[0]);
    this.num2 = Number(this.currentNumbers.split(' ')[2]);
  }

}

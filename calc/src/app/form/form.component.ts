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

  onClickSum() {
    this.result = this.num1 + this.num2;
  }
  onClickSub() {
    this.result = this.num1 - this.num2;
  }
  onClickMul() {
    this.result = this.num1 * this.num2;
  }
  onClickDiv() { 
    this.result = this.num1 / this.num2;
  }
  onClickPow() {
    this.result = Math.pow(this.num1, this.num2);
  }
  onClickSqrt() {
    this.result = Math.sqrt(this.num1);
  }
  onClickClearField(filed: string) {
    filed === 'num1' ? this.num1 = 0 : this.num2 = 0;
    this.result = 0;
  }
}
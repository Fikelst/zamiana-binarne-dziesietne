import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zamiana';
  inputText: string = '';
  decimalValues: number[] = [];
  binaryValues: string[] = [];
  offset: number = 0;

  convertToDecimal() {
    this.decimalValues = [];
    for (let i = 0; i < this.inputText.length; i++) {
      const charCode = this.inputText.charCodeAt(i) + this.offset;
      this.decimalValues.push(charCode);
    }
  }

  convertToBinary() {
    this.binaryValues = [];
    for (let i = 0; i < this.inputText.length; i++) {
      const charCode = this.inputText.charCodeAt(i);
      const binaryValue = charCode.toString(2);
      this.binaryValues.push(binaryValue);
    }
  }
}
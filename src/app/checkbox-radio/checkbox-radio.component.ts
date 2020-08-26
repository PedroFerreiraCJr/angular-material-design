import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.css']
})
export class CheckboxRadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(value: string): void {
    console.log(value);
  }

}

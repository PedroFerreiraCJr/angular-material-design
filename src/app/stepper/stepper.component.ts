import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  statusStep1: boolean = false
  statusStep2: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  completeStep1(): void {
    this.statusStep1 = true
  }

  completeStep2(): void {
    this.statusStep2 = true
  }

}

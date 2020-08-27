import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  min: Date = new Date();
  max: Date = new Date(2020, 11, 31);

  constructor() { }

  ngOnInit(): void {
  }

  dateFilter(value: Date): boolean {
    const day = value.getDay();
    // não permite selecionar: sabádo e domingos;
    return day != 0 && day != 6;
  }

}

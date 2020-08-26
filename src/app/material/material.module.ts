import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

const material = [
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

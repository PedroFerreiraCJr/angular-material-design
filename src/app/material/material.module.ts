import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const material = [
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

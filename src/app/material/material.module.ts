import { NgModule } from '@angular/core';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatStepperModule,
  MatButtonModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

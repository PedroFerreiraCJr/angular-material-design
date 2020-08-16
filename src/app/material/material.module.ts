import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const material = [
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

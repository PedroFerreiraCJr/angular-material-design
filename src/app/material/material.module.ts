import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

const material = [
  MatButtonModule,
  MatTooltipModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

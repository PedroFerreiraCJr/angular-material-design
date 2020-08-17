import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const material = [
  MatProgressSpinnerModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

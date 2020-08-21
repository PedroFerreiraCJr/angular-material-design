import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';

const material = [
  MatGridListModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

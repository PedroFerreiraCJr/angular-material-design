import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatExpansionModule,
  MatButtonModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

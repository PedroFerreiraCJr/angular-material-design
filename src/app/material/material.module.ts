import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const material = [
  MatListModule,
  MatIconModule,
  MatDividerModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

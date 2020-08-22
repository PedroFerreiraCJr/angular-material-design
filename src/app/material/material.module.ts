import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

const material = [
  MatTabsModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

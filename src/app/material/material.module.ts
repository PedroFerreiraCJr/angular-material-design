import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const material = [
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

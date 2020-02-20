import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
    library.addIcons(faPlus, faTrash, faSave);
  }
}

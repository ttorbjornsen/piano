import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


/**
 * Reusable components, pipes and directives. May be imported into many root/feature modules
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ]

})
export class SharedModule { }

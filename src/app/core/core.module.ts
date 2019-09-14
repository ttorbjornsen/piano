import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
 * Should only contain singleton services, making sure this module is only imported once into app module.
 * If service for only one feature, put into feature folder
 * Example : LoggingService, ErrorService, DataService, ...
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

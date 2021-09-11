import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarioAngularComponent } from './calendario-angular.component';

@NgModule({
  declarations: [
    CalendarioAngularComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CalendarioAngularComponent
  ]
})
export class CalendarioAngularModule { }

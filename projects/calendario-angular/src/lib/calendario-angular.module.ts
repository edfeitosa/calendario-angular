import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarioAngularComponent } from './calendario-angular.component';
import { DatasComponent } from './components/datas/datas.component';

@NgModule({
  declarations: [
    CalendarioAngularComponent,
    DatasComponent
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

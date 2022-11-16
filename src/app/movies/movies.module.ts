import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    MoviesComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }

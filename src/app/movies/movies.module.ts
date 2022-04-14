import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { RegisterMoviesComponent } from './register-movies/register-movies.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [RegisterMoviesComponent, ListMoviesComponent]
})
export class MoviesModule { };

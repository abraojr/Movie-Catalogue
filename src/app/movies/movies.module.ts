import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { RegisterMoviesComponent } from './register-movies/register-movies.component';
import { FieldsModule } from '../shared/component/fields/fields.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewMoviesComponent } from './view-movies/view-movies.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsModule,
    InfiniteScrollModule
  ],
  declarations: [
    RegisterMoviesComponent,
    ListMoviesComponent,
    ViewMoviesComponent
  ]
})
export class MoviesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesModule } from './movies/movies.module';
import { RegisterMoviesComponent } from './movies/register-movies/register-movies.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { ViewMoviesComponent } from './movies/view-movies/view-movies.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: ListMoviesComponent
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            component: RegisterMoviesComponent
          },
          {
            path: ':id',
            component: RegisterMoviesComponent
          }
        ]
      },
      {
        path: ':id',
        component: ViewMoviesComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'movies' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MoviesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

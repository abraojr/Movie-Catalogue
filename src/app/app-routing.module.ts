import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesModule } from './movies/movies.module';
import { RegisterMoviesComponent } from './movies/register-movies/register-movies.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';

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
        component: RegisterMoviesComponent,
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
export class AppRoutingModule { };

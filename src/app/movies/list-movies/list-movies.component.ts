import { MoviesService } from 'src/app/core/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-list',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  page = 0;
  readonly qntyPage = 4;
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {

  };

  ngOnInit(): void {
    this.listMovies();
  };

  onScroll(): void {
    this.listMovies();
  };

  private listMovies(): void {
    this.page++;
    this.movieService.list(this.page, this.qntyPage).subscribe({
      next: (movies: Movie[]) => this.movies.push(...movies)
    });
  };

};

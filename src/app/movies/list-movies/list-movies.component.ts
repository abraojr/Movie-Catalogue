import { ConfigParams } from './../../shared/models/config-params';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';
import { config } from 'rxjs';

@Component({
  selector: 'dio-movie-list',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  config: ConfigParams = {
    page: 0,
    limit: 4,
  }
  movies: Movie[] = [];
  filtersListing: FormGroup;
  genres: Array<string>;

  constructor(private movieService: MoviesService, private fb: FormBuilder) {

  };

  ngOnInit(): void {
    this.filtersListing = this.fb.group({
      text: [""],
      genre: [""]
    });

    this.filtersListing.get("text")?.valueChanges.subscribe({
      next: (val: string) => {
        this.config.search = val;
        this.resetQuery();
      }
    });

    this.filtersListing.get("genre")?.valueChanges.subscribe({
      next: (val: string) => {
        this.config.field = { type: "genre", value: val };
        this.resetQuery();
      }
    });

    this.genres = ["Action", "Romance", "Adventure", "Horror", "Science Fiction", "Comedy", "Drama"];

    this.listMovies();
  };

  onScroll(): void {
    this.listMovies();
  };

  private listMovies(): void {
    this.config.page++;
    this.movieService.list(this.config).subscribe({
      next: (movies: Movie[]) => this.movies.push(...movies)
    });
  };

  private resetQuery(): void {
    this.config.page = 0;
    this.movies = [];
    this.listMovies();
  };
};

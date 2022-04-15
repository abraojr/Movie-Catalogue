import { ConfigParams } from './../../shared/models/config-params';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-list',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  readonly withoutImage = "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";

  config: ConfigParams = {
    page: 0,
    limit: 4,
  }
  movies: Movie[] = [];
  filtersListing: FormGroup;
  genres: Array<string>;

  constructor(private movieService: MoviesService, private fb: FormBuilder, private router: Router) {

  };

  ngOnInit(): void {
    this.filtersListing = this.fb.group({
      text: [""],
      genre: [""]
    });

    this.filtersListing.get("text")?.valueChanges.pipe(debounceTime(400)).subscribe({
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

  open(id: number): void {
    this.router.navigateByUrl("/movies/" + id);
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

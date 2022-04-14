import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-list',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  readonly qntyPage = 4;
  page = 0;
  text: string;
  genre: string;
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
        this.text = val;
        this.resetQuery();
      }
    });

    this.filtersListing.get("genre")?.valueChanges.subscribe({
      next: (val: string) => {
        this.genre = val;
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
    this.page++;
    this.movieService.list(this.page, this.qntyPage, this.text, this.genre).subscribe({
      next: (movies: Movie[]) => this.movies.push(...movies)
    });
  };

  private resetQuery(): void {
    this.page = 0;
    this.movies = [];
    this.listMovies();
  };

};

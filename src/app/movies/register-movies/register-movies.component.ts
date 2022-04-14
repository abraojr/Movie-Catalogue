import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MoviesService } from "src/app/core/movies.service";
import { ValidateFieldsService } from "src/app/shared/component/fields/validate-fields.service";
import { Movie } from "src/app/shared/models/movie";

@Component({
  selector: "dio-register-movies",
  templateUrl: "./register-movies.component.html",
  styleUrls: ["./register-movies.component.scss"]
})
export class RegisterMoviesComponent implements OnInit {

  register: FormGroup;
  genres: Array<string>;

  constructor(public validation: ValidateFieldsService, private fb: FormBuilder, private movieService: MoviesService) {
  };

  get f() {
    return this.register.controls;
  };

  ngOnInit(): void {
    this.register = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlImage: ["", [Validators.minLength(10)]],
      releaseDate: ["", [Validators.required]],
      description: [""],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ["", [Validators.minLength(10)]],
      genre: ["", [Validators.required]]
    });

    this.genres = ["Action", "Romance", "Adventure", "Horror", "Science Fiction", "Comedy", "Drama"];
  };

  submit(): void {
    this.register.markAllAsTouched();
    if (this.register.invalid) {
      return;
    }
    const movie = this.register.getRawValue() as Movie;
    this.save(movie);
  };

  resetForm(): void {
    this.register.reset();
  };

  private save(movie: Movie): void {
    this.movieService.save(movie).subscribe({
      next: () => alert("SUCCESS"),
      error: () => alert("ERROR ON SAVE")
    });
  };
};

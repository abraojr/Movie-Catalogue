import { Alert } from './../../shared/models/alert';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MoviesService } from "src/app/core/movies.service";
import { AlertComponent } from "src/app/shared/component/alert/alert.component";
import { ValidateFieldsService } from "src/app/shared/component/fields/validate-fields.service";
import { Movie } from "src/app/shared/models/movie";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "dio-register-movies",
  templateUrl: "./register-movies.component.html",
  styleUrls: ["./register-movies.component.scss"]
})
export class RegisterMoviesComponent implements OnInit {

  id: number;
  register: FormGroup;
  genres: Array<string>;

  constructor(public validation: ValidateFieldsService, public dialog: MatDialog, private fb: FormBuilder,
    private moviesService: MoviesService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  get f() {
    return this.register.controls;
  }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.id) {
      this.moviesService.visualize(this.id).subscribe({
        next: (movie: Movie) => this.createForm(movie)
      });
    } else {
      this.createForm(this.createBlankMovie());
    }

    this.genres = ["Action", "Romance", "Adventure", "Horror", "Science Fiction", "Comedy", "Drama"];
  }

  submit(): void {
    this.register.markAllAsTouched();
    if (this.register.invalid) {
      return;
    }
    const movie = this.register.getRawValue() as Movie;
    this.save(movie);
  }

  resetForm(): void {
    this.register.reset();
  }

  private createForm(movie: Movie): void {
    this.register = this.fb.group({
      title: [movie.title, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlImage: [movie.urlImage, [Validators.minLength(10)]],
      releaseDate: [movie.releaseDate, [Validators.required]],
      description: [movie.description],
      rating: [movie.rating, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: [movie.urlIMDb, [Validators.minLength(10)]],
      genre: [movie.genre, [Validators.required]]
    });
  }

  private createBlankMovie(): Movie {
    return {
      id: null,
      title: null,
      releaseDate: null,
      urlImage: null,
      description: null,
      rating: null,
      urlIMDb: null,
      genre: null,
    } as Movie
  }

  private save(movie: Movie): void {
    this.moviesService.save(movie).subscribe({
      next: () => {
        const config = {
          data: {
            btnSuccess: "Go to listing",
            btnCancel: "Register a new movie",
            btnCancelColor: "primary",
            hasBtnClose: true
          } as Alert
        };
        const dialogRef = this.dialog.open(AlertComponent, config);
        dialogRef.afterClosed().subscribe({
          next: (option: boolean) => {
            if (option) {
              this.router.navigateByUrl("movies");
            } else {
              this.resetForm();
            }
          }
        });
      },
      error: () => {
        const config = {
          data: {
            title: "Error when saving the register!",
            description: "We could not save your registration, please try again later.",
            btnSuccessColor: "warn",
            btnSuccess: "Close",
          } as Alert
        };
        this.dialog.open(AlertComponent, config);
      }
    })
  }
}

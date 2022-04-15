import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { AlertComponent } from 'src/app/shared/component/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})
export class ViewMoviesComponent implements OnInit {

  readonly withoutImage = "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";
  movie: Movie;
  id: number;

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"]
    this.visualize();
  }

  edit(): void {
    this.router.navigateByUrl("/movies/register/" + this.id);
  }

  delete(): void {
    const config = {
      data: {
        title: "Are you sure you want to delete this movie?",
        description: "If you are sure you want to delete, click the OK button.",
        btnSuccessColor: "warn",
        btnCancelColor: "primary",
        hasBtnClose: true
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe({
      next: (option: boolean) => {
        if (option) {
          this.moviesService.delete(this.id).subscribe({
            next: () => this.router.navigateByUrl("/movies")
          });
        }
      }
    });
  }

  private visualize(): void {
    this.moviesService.visualize(this.id).subscribe({
      next: (movie: Movie) => this.movie = movie
    });
  }
}

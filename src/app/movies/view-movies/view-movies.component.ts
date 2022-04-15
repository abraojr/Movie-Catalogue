import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})
export class ViewMoviesComponent implements OnInit {

  readonly withoutImage = "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";
  movie: Movie;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.visualize(this.activatedRoute.snapshot.params["id"]);
  }

  private visualize(id: number): void {
    this.moviesService.visualize(id).subscribe({
      next: (movie: Movie) => this.movie = movie
    });
  }
}

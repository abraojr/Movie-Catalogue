import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';

const url = "http://localhost:3000/movies/";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  constructor(private http: HttpClient) { }

  save(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(url, movie);
  }
}

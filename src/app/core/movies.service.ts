import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  list(page: number, qntyPage: number): Observable<Movie[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("_page", page.toString());
    httpParams = httpParams.set("_limit", qntyPage.toString());
    return this.http.get<Movie[]>(url, { params: httpParams });
  }
}

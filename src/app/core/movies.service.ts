import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { ConfigParams } from '../shared/models/config-params';
import { ConfigParamsService } from './config-params.service';

const url = "http://localhost:3000/movies/";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private configService: ConfigParamsService) {

  };

  save(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(url, movie);
  };

  list(config: ConfigParams): Observable<Movie[]> {
    const configParams = this.configService.configurateParameters(config);
    return this.http.get<Movie[]>(url, { params: configParams });
  };

  visualize(id: number): Observable<Movie> {
    return this.http.get<Movie>(url + id);
  };
};

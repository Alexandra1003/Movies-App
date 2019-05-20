import { Injectable } from '@angular/core';
import moviesJSON from '../mocks/movie.mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesList: object[];
  constructor() { }

  getMoviesList() {
    this.moviesList = moviesJSON;
    return this.moviesList;
  }
}

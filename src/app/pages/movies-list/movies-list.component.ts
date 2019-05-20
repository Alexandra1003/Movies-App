import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  length: number;

  moviesList: object[];
  p: number = 1;

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesList = this.moviesService.getMoviesList();
  }

}

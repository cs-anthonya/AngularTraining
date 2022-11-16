import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../services/test.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private _testService: TestService,
    private _route: Router,
  ) { }
  
  movieObject: FormGroup = new FormGroup({
    time: new FormControl('10:00AM'),
    name: new FormControl('')
  })

  nameOfMovie: string = '';
  time: string = '';

  movies: any[] = [];

  editmode: boolean = false;
  _index: number = -1;
  keyword: string = '';
    movietitle = '';
  ngOnInit(): void {
    this._testService.movie.subscribe(response => {
      this.movietitle = response;
    })
  }

  add() {
    var movie = {name: this.nameOfMovie, time: this.time};

    if (this.editmode) {
      this.movies[this._index] = movie;
    } else {
      this.movies.push(
        movie
      );
    }

    this.nameOfMovie = '';
    this.time = '';
    this.editmode = false;
  }


  addReactiveForm() {
    var movie = this.movieObject.value;

    if (this.editmode) {
      this.movies[this._index] = movie;
    } else {
      this.movies.push(
        movie
      );
      console.log(this.movies)
    }

    this.nameOfMovie = '';
    this.time = '';
    this.editmode = false;
  }




  delete(index: number){
    this.movies.splice(index, 1);
  }

  edit(index:number) {
    this._index = index;
    const movie = this.movies[index];
    this.nameOfMovie = movie.name;
    this.time = movie.time;
    this.editmode = true;
  }

  editReactiveForm(index:number) {
    this._index = index;
    const movie = this.movies[index];
    this.movieObject.patchValue(movie)
    // this.nameOfMovie = movie.name;
    // this.time = movie.time;
    this.editmode = true;
  }


  listofmovies: any[] = [];

  getMovies() {
      this._testService.getMovies(this.keyword)
      .subscribe((response: any) => {
        this.listofmovies = response.Search;
      });
  }


  redirect() {
    this._route.navigateByUrl('/page2')
  }
}

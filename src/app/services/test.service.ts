import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private _http: HttpClient
  ) { }

  
  movie: Observable<string> = new Observable;  

  returnHelloWorld() {
    return 'hello world!';
  }

  getMovies(keyword: string) {
    return this._http.get('https://fake-movie-database-api.herokuapp.com/api?s=' + keyword);
  }


}

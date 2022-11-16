import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(
    private _activateRoute: ActivatedRoute
  ) { }
  @Input() movies: any[] = [];
  ngOnInit(): void {
   var id = this._activateRoute.snapshot.queryParams['id'];
   var name = this._activateRoute.snapshot.queryParams['employeename'];
   console.log(id);
   console.log(name);
  }

}

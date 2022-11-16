import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private _taskService: TaskService,
    private _router: Router
  ) { }

  pendingtasks:any = [];
  inprogresstasks:any = [];
  donetasks:any = [];

  ngOnInit(): void {

      this.getTasks();
    
  }


  getTasks() {
    this._taskService.getall()
    .subscribe((response:any) => {
       const tasks: any[] = response.result; 

       this.pendingtasks = tasks.filter(task => task.status == 'pending');
       this.inprogresstasks = tasks.filter(task => task.status == 'active');
       this.donetasks = tasks.filter(task => task.status == 'done');

    })
  }



  create() {
    this._router.navigateByUrl('/task/create')
  }

  changeStatus(id: number, status:string) {
    this._taskService.changeStatus(id, status)
    .subscribe((response:any) => {
      console.log(response);
      this.getTasks();
    })
  }

  delete(id: number) {
    this._taskService.delete(id)
    .subscribe((response:any) => {
      alert(response.message);
      this.getTasks();
    })
  }


  update(id: number){
    this._router.navigateByUrl('/task/update/' + id)
  }

}

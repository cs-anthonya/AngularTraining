import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  })

  id:number = -1;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.taskService.get(this.id)
      .subscribe((response:any) => {
          this.form.patchValue(response.result);
          console.log(this.form)
      })
    }
  } 

  save(){
    if (!this.form.valid)
    {
      alert('invalid form');
      return;
    }

    const value = this.form.value;
    if (this.id) {
      this.taskService.update(value, this.id)
      .subscribe((response: any) => {
        alert(response.message);
        this.router.navigateByUrl('/task');
      })
    } else {
      this.taskService.add(value)
      .subscribe((response: any) => {
        alert(response.message);
        this.router.navigateByUrl('/task');
      })
    }

  }
}

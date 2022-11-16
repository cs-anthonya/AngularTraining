import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'create', component: CreateTaskComponent},
  { path: 'update/:id', component: CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

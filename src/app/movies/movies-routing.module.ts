import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesGuard } from '../pages.guard';
import { DisplayComponent } from './display/display.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: 'page1', canActivate: [ PagesGuard ], component: MoviesComponent },
  { path: 'page2', canActivate: [ PagesGuard ], component: DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

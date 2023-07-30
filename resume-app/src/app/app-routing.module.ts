import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume-form', component: ResumeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'candidat', redirectTo: 'candidat/index', pathMatch: 'full'},
{ path: 'candidat/index', component: IndexComponent },
{ path: 'candidat/:candidatId/view', component: ViewComponent },
{ path: 'candidat/create', component: CreateComponent },
{ path: 'candidat/:candidatId/edit', component: EditComponent }  ];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class CandidatRoutingModule { }

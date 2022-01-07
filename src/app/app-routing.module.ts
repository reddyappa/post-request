import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRequestComponent } from './post-request/post-request.component';


const routes: Routes = [
  {path:'home', component:PostRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

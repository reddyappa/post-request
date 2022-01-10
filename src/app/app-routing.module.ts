import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRequestComponent } from './post-request/post-request.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'home', component:PostRequestComponent},
  {path:'users', component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

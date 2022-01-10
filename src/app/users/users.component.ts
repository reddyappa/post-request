import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
resultData;
  constructor(private http:HttpClient) { }

  ngOnInit() {
this.http.get<any>('https://reqres.in/api/users/')
.subscribe(data=>{
  console.log("testwww",data.data);
  this.resultData=data.data;
})

  }

}

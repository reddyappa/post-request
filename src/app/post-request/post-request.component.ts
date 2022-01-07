import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {
postId;
postId2;
postId3;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.post<any>('https://reqres.in/api/posts',{title: 'Angular POST Request Example'})
    .subscribe(data=>{this.postId = data.id;})

    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
      this.postId2 = data.id;
  })

  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  const body = { title: 'Angular POST Request Example' };
  this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
      this.postId3 = data.id;
  });

  }




}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  sourses;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('/api/sourses').subscribe(data=>this.sourses=data)
  }

}

export class Sourse{
  constructor(
      public id:number,
      public className:string,
      public images:string,
      public text:string,
      public classhour:number,
      public num:number
  ){}
}
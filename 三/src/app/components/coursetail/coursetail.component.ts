import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursetail',
  templateUrl: './coursetail.component.html',
  styleUrls: ['./coursetail.component.css']
})
export class CoursetailComponent implements OnInit {
  video;
  videoId:number;
  sourse;
  sourseId:number;
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.sourseId = this.router.snapshot.params['sourseId'];
    this.http.get('/api/sourses/'+this.sourseId).subscribe(data=>{
      this.sourse = data;
    })
    this.videoId = this.router.snapshot.params['sourseId'];
    this.http.get('/api/videoes/'+this.sourseId).subscribe(data=>{
      this.video = data;
    })
  }

}

class Video{
  constructor(
      public id:number,
      public name:string,
      public video:string,
      public text:string
  ){}
}
class Sourse{
  constructor(
      public id:number,
      public className:string,
      public images:string,
      public text:string,
      public classhour:number,
      public num:number
  ){}

}

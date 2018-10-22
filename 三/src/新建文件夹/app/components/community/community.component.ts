import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient,private route:Router) { }
  communities;

  ngOnInit() {
    // console.log(this.router.snapshot.queryParams['id']);
    this.http.get('/api/communities').subscribe(data=>{
      this.communities = data;
    })
  }

}

export class Community{
  constructor(
      public id:number,
      public headpic:string,
      public images:string,
      public articleName:string,
      public article:string,
      public Name:string,
      public data:string,
      public reading:number,
      public common:number
  ){}
}
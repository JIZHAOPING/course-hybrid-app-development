import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  // timer=null;

  course;
  headers=new HttpHeaders({});
  ngOnInit() {
    // this.timer=setInterval(function(){
    //   console.log(11);
    // },1000)
    // this.http.get('/api/courses').subscribe((data)=>{
    //   this.course=data;
    //   console.log(data);
    // })//查询，获取
    
    this.http.post('/api',{name:'dieow',pwd:13243},{headers:this.headers}).subscribe((data)=>{
      // this.course=data;
      console.log(data);
    })

    
  }
  ngOnDestroy(): void {
    // clearInterval(this.timer);
  }
}

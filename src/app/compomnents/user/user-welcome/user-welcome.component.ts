import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit 
{
 
  postData =
  [
    {
     poId: '',
     poTitle: '',
     poImageName: '',
     poContent: '',
     poDate: '',
     category: 
     {
       coId: '',
       coName: '',
       coDes: '',
     },
     user: 
     {
       id: '',
       name: '',
       email:'',
       pass: '',
       about: '',
     }, 
     comments :[
       {
         coId: '',
         content: '',
       }
     ]
   },
   
   ];

  constructor(private postService:PostService) {}

  ngOnInit(): void
  {
//Fetching list of all the posts 

    this.postService.getListofPosts().subscribe
    ({
      next : (data:any) =>
      {
        
        this.postData=data.content;
        console.log(this.postData);
  
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire("Error !!", "error in fetching data", 'error');
  
      }
  
    });
      
  }

}

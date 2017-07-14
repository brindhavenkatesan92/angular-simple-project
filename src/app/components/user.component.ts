

import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'./user.component.html',
  styles:[`form label{ color:red }`],
  providers:[PostService]
})
export class UserComponent  { 
   name:string; 
   email:string;
   address:Address;
   hobbies:string[];
   showHobbies : boolean;
   posts:Post[];
   constructor( private PostService:PostService){
       this.showHobbies = true;
       this.name = 'Brindha';
       this.email = 'brindha.venkatesan92@gmail.com';
       this.hobbies = ['Dancing','Singing','Painting'];
       this.address = {
           flatno : 23,
           street : 'Nehru street',
           state : 'Tamil Nadu'
       }
       PostService.getPosts().subscribe(posts => {
           console.log(posts);
           this.posts = posts; 
       });  
   }
   toggleHobbies(){
     this.showHobbies = !this.showHobbies;     
   }
   deleteHobby(hobby:string){
       let index:number = this.hobbies.indexOf(hobby);
       this.hobbies.splice(index,1);
   }
    addHobby( hobby:string ){
        this.hobbies.push( hobby );
    }
 }

 interface Address{
     flatno : number;
     street : string;
     state : string;
 }
interface Post{
    id:number,
    title:string,
    body:string
}



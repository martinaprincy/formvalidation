import { Component  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'formvalidation';
  
  
   
  
      countries:country[]=[
        {id:1,name:"India"},
        {id:2,name:"USA"},
        {id:3,name:"UK"},
        {id:4,name:"Singapore"},
        {id:5,name:"Quater"},
        {id:6,name:"China"},
        {id:7,name:"Japan"},
      ];
      onSubmit(form:NgForm):void{
        console.log(form.value)
      }
      
        }
     
      class country {
        id!:number;
        name!:string;
      }


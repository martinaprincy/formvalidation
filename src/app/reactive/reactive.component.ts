
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
 contactForm=new FormGroup({
  name:new FormControl(),
  age:new FormControl(),
  gender:new FormControl(),
  address:new FormGroup({
    street:new FormControl(),
    city:new FormControl(),
    pincode:new FormControl()
  })
 })
 onSubmit(){
  console.log(this.contactForm.value);
 }
} 
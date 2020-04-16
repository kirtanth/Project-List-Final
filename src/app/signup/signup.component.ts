import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  regForm:FormGroup = new FormGroup({
    Email : new FormControl(null,[Validators.required,Validators.email]),
    Pass: new FormControl(null,Validators.required)
  })
 
  constructor() { }
  reg(){
    if(!this.regForm.valid){
      console.log("Invalid From");
      return; 
    }
    console.log(this.regForm.value)
  }

}

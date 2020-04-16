import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  constructor() { }

  contact: FormGroup = new FormGroup({
    name: new FormControl(null,Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email]),
    ph:new FormControl(null,[Validators.required])
  })
 val=false
 vall = false
  contactSub(){
    if(!this.contact.valid){
      this.val=true
      console.log("Form Not Valid");
      return;
    }
    this.vall=true
    this.val=false
    console.log(this.contact.value)
  }


}

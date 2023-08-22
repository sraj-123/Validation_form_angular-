import { Component } from '@angular/core';
import { FormGroup,FormControlName,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  Details:any =[];



  constructor(){}

  loginUser = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.maxLength(10)])

  })

  login(data:any){
    
    alert(this.loginUser.value.name);
    console.log(this.loginUser.value);

  }


  get name(){
    return this.loginUser.get("name")
  }

  get email(){
    return this.loginUser.get("email")
  }

  get password(){
    return this.loginUser.get("password")
  }

  
  

}

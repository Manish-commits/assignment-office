import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
       Validators.minLength(3)
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  isLogin(formValues: FormGroup){

    console.log(formValues.value);
  }

}

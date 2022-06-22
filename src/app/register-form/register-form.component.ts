import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      'email': new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]), 
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]), 
      'address': new FormControl(''), 
      'city': new FormControl('',[
        Validators.required
      ]), 
      'state': new FormControl('',[
        Validators.required
      ]), 
      'zip': new FormControl('',[
        Validators.required
      ]), 
      'check': new FormControl('',[
        Validators.required
      ]), 
    })
  }

  resetForm(){
    this.registerForm.reset();
  }

}

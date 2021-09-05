import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") signUpForm: NgForm;
  user={
    username: '',
    email: '',
    subscription: '',
    password: '',
    gender: ''
  }

  title = 'form-exercise';
  genders = ["male", "female"];
  userReply ='';
  isSubmitted = false;

  suggestName(): void{
    this.signUpForm.form.patchValue({
      userData:{
        username: "test",
        subscription: "advance"
      }
    })
  }
  
  onSubmit(): void{
    console.log(this.signUpForm)
    this.isSubmitted = true;
    this.user.username = this.signUpForm.form.value.userData.username;
    this.user.email = this.signUpForm.form.value.userData.email;
    this.user.subscription = this.signUpForm.form.value.userData.subscription;
    this.user.password = this.signUpForm.form.value.userData.password;
    this.user.gender = this.signUpForm.form.value.userData.gender;
  }
}

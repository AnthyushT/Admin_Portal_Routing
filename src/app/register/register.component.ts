import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { UsersService } from '../users.service';


const comparePasswordValidator: ValidatorFn = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    return (control.value.password == control.value.confirmPassword) ? null : { confirm: true };
  };
}

interface UserItem {
  userName: string,
  userEmail: string,
  password: string,
  description: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  userData: FormGroup;
  constructor(public userService: UsersService) {
    this.userData = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      description: new FormControl(''),
      address: new FormArray([
        new FormGroup({
          line1: new FormControl(''),
          line2: new FormControl(''),
          pincode: new FormControl(''),
          state: new FormControl(''),
          city: new FormControl(''),
          country: new FormControl(''),
        })
      ])
    },
      {
        validators: comparePasswordValidator
      }
    )
  }
  get name() { return this.userData.get('userName'); }
  get email() { return this.userData.get('userEmail'); }
  get password() { return this.userData.get('password'); }
  get confirmPassword() { return this.userData.get('confirmPassword'); }
  get description() { return this.userData.get('userName'); }




  addUser() {
    console.log(this.userData.value)
    let userObj: UserItem = {
      userName: this.userData.value.userName,
      userEmail: this.userData.value.userEmail,
      password: this.userData.value.password,
      description: this.userData.value.description
    }
    this.userService.addUser(userObj)
  }
}

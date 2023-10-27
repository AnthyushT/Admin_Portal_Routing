import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormArray} from '@angular/forms'

interface User{
  id:number,
  userName:string,
  userEmail:string,
  password:string,
  description:string
}

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  currentUser:User|undefined;
  userData:FormGroup;
  curId:number = 0;
  constructor(private activatedRoute:ActivatedRoute,public userService:UsersService){
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id']);
      this.curId = +params['id']; 
      this.currentUser = userService.userList.find(user=> user.id === this.curId)
      console.log(this.currentUser)
    })
    this.userData = new FormGroup({
      userName : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      userEmail : new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      confirmPassword : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      description: new FormControl(''),
    })
  }

  editUser(){
    let userObj:User = {
      id:this.curId,
      userName:this.userData.value.userName,
      userEmail:this.userData.value.userEmail,
      password:this.userData.value.password,
      description:this.userData.value.description
    }
    this.userService.editUser(userObj);
  }
}

import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute } from '@angular/router';

interface User{
  id:number,
  userName:string,
  userEmail:string,
  password:string,
  description:string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UserComponent {

  currentUser:User|undefined;
  constructor(private activatedRoute:ActivatedRoute,public userService:UsersService){
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id']);
      let curId = +params['id']; 
      this.currentUser = userService.userList.find(user=> user.id === curId)
      console.log(this.currentUser)
    })
  }
}

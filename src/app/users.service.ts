import { Injectable } from '@angular/core';
interface User{
  id:number,
  userName:string,
  userEmail:string,
  password:string,
  description:string
}
interface UserItem{
  userName:string,
  userEmail:string,
  password:string,
  description:string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: Array<User> = [
    {
      id: 1,
      userName: "Akhilesh",
      userEmail: "akhilesh.kumandan@gmail.com",
      password: "incorrect123",
      description: "I am a CHUBB employee"
    }
  ]
  addUser(user: UserItem) {
    let userObj = { id: this.userList.length + 1, userName: user.userName, userEmail: user.userEmail, password: user.password, description: user.description }
    this.userList.push(userObj);
  }

  editUser(user: User) {
    let index = this.userList.findIndex((obj) => {
      return obj.id === user.id;
    })
    this.userList[index] = user;
  }
  constructor() { }
}

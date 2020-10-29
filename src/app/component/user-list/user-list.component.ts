import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { MessageService } from 'src/app/service/message.service';
import { UserService } from '../../service/user.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[]=[];
  constructor(
    private userService:UserService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.getUsers()
    this.messageService.getMsg()
      .subscribe(() => {
        this.getUsers()
      })
    
  }

  getUsers(){
    this.userService.getUserList()
    .subscribe((users: User[]) => {
      this.userList = users; 
    });
  }
}

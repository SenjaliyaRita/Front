import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from '../../service/user.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[]=[];
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserList()
    .subscribe((users: User[]) => {
      this.userList = users; 
    });
  }

}

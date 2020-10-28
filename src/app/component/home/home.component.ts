import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userdata=null;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userdata =JSON.parse(this.userService.checkUser());
    console.log('home' + this.userdata.name);
   }
  }



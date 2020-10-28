import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { MessageService } from 'src/app/service/message.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:Observable<User> = null;
  isLoggedIn$:Observable<boolean>;
  constructor(private userService:UserService,private messageService:MessageService,private router:Router) { }

  ngOnInit(): void {
    this.user=JSON.parse(this.userService.checkUser());
  // if(this.user!=null || this.user != undefined){
  //   this.isLoggedIn$=
  // }
  }

  logout(){
    this.userService.logout();
    this.messageService.setMsg({msg:'Logout Successfull',type:'success'});
    this.router.navigate(['/'])
  }

}

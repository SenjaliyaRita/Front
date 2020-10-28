import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { UserService } from '../../service/user.service'
import { Router, ActivatedRoute } from '@angular/router'
import { MessageService } from 'src/app/service/message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any = {};

  constructor(
    private userService:UserService,
    private router:Router,
    private route:ActivatedRoute,
    private messageSerivce:MessageService
    ) { }

  ngOnInit(): void {

    }


  OnSubmit(){
   console.log(this.model);
  this.userService.login(this.model)
  .subscribe((data: any) =>
     {console.log(data);
    if ("id" in data) {
      localStorage.setItem('user',JSON.stringify(data));
      this.messageSerivce.setMsg({msg:'Login successful',type:'success'});
      this.redirectToList();
    }
    else
      this.messageSerivce.setMsg({msg:'Could not Register the user. Please try again later.',type:'success'});
  });
  }

  redirectToList(){
    this.router.navigate(["/home"]);
  }
 
}

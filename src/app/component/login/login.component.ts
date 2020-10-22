import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { UserService } from '../../service/user.service'
import { Router, ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr';    
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
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {

    }


  OnSubmit(){
   console.log(this.model);
  this.userService.login(this.model)
  .subscribe((data: any) =>
     {console.log(data);
    if ("id" in data) {
      this.toastr.success('Login successful');
      this.redirectToList();
    }
    else
      this.toastr.error("Could not Register the user. Please try again later.");
  });
  }

  redirectToList(){
    this.router.navigate(["/userList"]);
  }
 
}

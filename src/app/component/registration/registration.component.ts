import { Component, OnInit  } from '@angular/core'
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  
  constructor(
    private userService: UserService, 
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private router: Router,
    public route: ActivatedRoute) { }
    
  ngOnInit() {
    
    
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileno: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date:['', Validators.required]
    });
  }

  get f() { return this.registrationForm.controls; }
 

  OnSubmit() {
      this.submitted = true;
      if (this.registrationForm.invalid) {
        return;
      }
    
      
     this.userService.registerUser(this.registrationForm.value)
      .subscribe((data: any) => {console.log(data);
        if ("id" in data) {
          localStorage.setItem('user',data);
          this.messageService.setMsg({msg:'User registration successful',type:'success'});
          this.redirectToHome(data);
        }
        else
        this.messageService.setMsg({msg:'Could not Register the user. Please try again later.',type:'error'});
      });
  }

  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
  }

  redirectToHome(data){
    this.router.navigate(["/login"]);
  }

}
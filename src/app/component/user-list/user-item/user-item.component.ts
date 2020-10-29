import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { MessageService } from 'src/app/service/message.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  constructor(private userService:UserService,private messageService:MessageService) { }

  ngOnInit(): void {
  }

  remove(){
    this.userService.removeUser(this.user.id)
    .subscribe((data: any) => { 
      console.log(data);
      if ( data !=null) {
        this.messageService.setMsg({msg:'User Deleted successfully',type:'info'});
      }
      else
      this.messageService.setMsg({msg:'Could not Register the user. Please try again later.',type:'error'});
    });
  }
}

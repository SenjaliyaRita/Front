import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userdata;
  constructor(private router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userdata = this.route.snapshot.paramMap.get('name');
   }
  }



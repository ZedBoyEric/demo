import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide : boolean;
  team: any;
  company: any;
  constructor() { 
    this.team;
    this.company;
    this.hide = true;
  }

  ngOnInit(): void {
    
  }

}

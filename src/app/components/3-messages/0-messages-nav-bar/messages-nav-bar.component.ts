import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'messages-nav-bar',
  templateUrl: './messages-nav-bar.component.html',
  styleUrls: ['./messages-nav-bar.component.css']
})
export class MessagesNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }
  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}
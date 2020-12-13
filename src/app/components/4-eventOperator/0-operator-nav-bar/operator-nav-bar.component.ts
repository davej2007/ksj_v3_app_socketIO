import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'operator-nav-bar',
  templateUrl: './operator-nav-bar.component.html',
  styleUrls: ['./operator-nav-bar.component.css']
})
export class OperatorNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }
  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}
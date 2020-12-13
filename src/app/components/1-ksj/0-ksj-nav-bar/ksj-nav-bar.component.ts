import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ksj-nav-bar',
  templateUrl: './ksj-nav-bar.component.html',
  styleUrls: ['./ksj-nav-bar.component.css']
})
export class KsjNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }
  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}
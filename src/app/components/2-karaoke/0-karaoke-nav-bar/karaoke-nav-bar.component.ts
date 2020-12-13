import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'karaoke-nav-bar',
  templateUrl: './karaoke-nav-bar.component.html',
  styleUrls: ['./karaoke-nav-bar.component.css']
})
export class KaraokeNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }
  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}
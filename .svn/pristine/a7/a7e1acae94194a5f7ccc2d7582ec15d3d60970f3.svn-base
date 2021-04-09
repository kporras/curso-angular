import { Component, OnInit, ViewChild } from '@angular/core';
import { NgStyleKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('sidenav') sidenav:  MatSidenav;

  
  public isMenuOpen: boolean = true;
  isExpanded = true;
  showSubmenuPP: boolean = false;
  showSubmenuEG: boolean = false;
  isShowing = false;
  public sub : any = null;


  constructor() { }

  ngOnInit(): void {
     // this.sub = this.menuService.subject.subscribe(valor => {
      //  console.log(valor);
      //  this.sidenav.toggle();
      //  this.isMenuOpen = true;
      //});
  }

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }




}

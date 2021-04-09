import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../compartido/servicios/auth.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  

  constructor(public authService: AuthService) { }

  public isMenuOpen: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;
  sub: any=null;

  isExpanded = true;
  showSubmenuPP: boolean = false;
  showSubmenuEG: boolean = false;
  isShowing = false;
    
  showSubSubMenu: boolean = false;

  ngOnInit(): void {
    
  }

 
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  cerrarMenu(){
   this.showSubmenuEG =false;
   this.sidenav.toggle();

  }

  
}

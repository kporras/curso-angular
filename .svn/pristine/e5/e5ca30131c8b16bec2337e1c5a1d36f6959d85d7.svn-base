import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../compartido/servicios/auth.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {


  public usuario: string ="";
  public contrasenna: string = "";
  public hide: boolean = true;
  tipos = [
    {valor:'injustificada', id:1},
    {valor:'tardia', id:2},
    {valor:'justificada', id:3},

  ];


  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  
  acceso(): void{
   this.authService.login(this.usuario, this.contrasenna); 
      
  }



}

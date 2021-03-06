import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../compartido/servicios/auth.service';
import { Empleado } from '../../../modelos/empleado';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})

export class UbicacionComponent implements OnInit {

  public empleado: Empleado = new Empleado();
  public isMenuOpen: boolean = false;
  tipos = [
    {valor:'injustificada', id:1},
    {valor:'tardia', id:2},
    {valor:'justificada', id:3},

  ];

  opciones = [
    {id:1 ,valor:'Opcion1 '},
    {id:2 ,valor:'Opcion2 '},
    {id:3 ,valor:'Opcion3 '},

  ]

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  
  agregar(): void{
  //  this.authService.nombre = 'hola';
    this.router.navigate(['Principal']);
  }

  prueba(){
    alert("hola");
  }


  pruebaSeleccion(e){
    console.log("llego "+e);
    
  }
  //[(ngModel)]="valorSeleccionado"
}


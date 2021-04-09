import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../compartido/servicios/auth.service';



@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent implements OnInit {

  currentDate = new Date();

  tipos = [
    {valor: 'injustificada', id: 1},
    {valor: 'tardia', id: 2},
    {valor: 'justificada', id: 3},
  ];

  fechaInicio = new Date('3/1/2021');
  fechaFinal = new Date('3/16/2021');

  subtasks = [
    {name: 'Primary', completed: false, color: 'primary'},
    {name: 'Accent', completed: false, color: 'accent'},
    {name: 'Warn', completed: false, color: 'warn'}
  ]

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.subtasks);
  }

  pruebaSeleccion(e){
        console.log(e);
  }


  

}
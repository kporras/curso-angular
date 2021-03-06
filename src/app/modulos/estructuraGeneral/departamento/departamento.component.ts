import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/compartido/servicios/estructuraGeneral/departamento/departamento.service';
import { Departamento } from 'src/app/modelos/departamento';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.departamentoService.get()
    .then((res: Departamento[]) => {
      console.log(res);
    });
  }

}

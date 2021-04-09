import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: string = "api/Departamento";

  constructor(private dataService: DataService) { }

  get(){
   return this.dataService.get(this.url);
  }

  

}

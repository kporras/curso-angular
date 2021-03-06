import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  public usuario: string ="";
  public contrasenna: string = "";
  public token: string ="";
  public idEmpleado: number = 0;
  public idDepartamento: number = 0;
  public idUbicacion: number = 0;

  url: string = "api/Acceso";
  datos: {};

  constructor(private dataService: DataService, private router: Router) { }

  public isLogin(){
    if (this.token=="")
      return false;
    return true;
  }

  public login(usuario, contrasenna){
    try {
      this.datos = 
      {"usuario": usuario,
      "contrasenna": contrasenna};
    
        this.dataService.post(this.url, this.datos).then(resultado=>{
        this.token = resultado;
        this.router.navigate(['Dashboard']);
         return true;
      }).catch(error=>{
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
    return false;
  }


}

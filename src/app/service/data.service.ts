import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { personaModel } from '../persona.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private lg: LoginService) { }
  

  //GET
  cargarPersonas(){
    const token = this.lg.getIdToken();
    return this.http.get<string[]>('https://auth-practice-8ff0a-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  //GUARDAR
  guardar(personas: personaModel[]){
    const token = this.lg.getIdToken();
    this.http.put('https://auth-practice-8ff0a-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
      response => {
        console.log(response);
      },
      error => console.log("Error al guardar Personas:" + error)
    );
  }

  //Modificar
  editar(index: number, persona: string){
    const token = this.lg.getIdToken();
    let url: string = 'https://auth-practice-8ff0a-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.http.put(url, JSON.stringify(persona)).subscribe((response) =>{
      console.log(response)
    }, error => console.log(error)); 
  }

  delete(index: number){
    const token = this.lg.getIdToken();
    let url: string = 'https://auth-practice-8ff0a-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.http.delete(url).subscribe((response) =>{
      console.log(response)
    }, error => console.log(error)); 
  }
}

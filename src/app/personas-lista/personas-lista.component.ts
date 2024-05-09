import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-personas-lista',
  templateUrl: './personas-lista.component.html',
  styleUrl: './personas-lista.component.css'
})
export class PersonasListaComponent {
  personas: string[] = [];
  nombreInput: string = '';
  index: number = -1;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log(this.index);
    this.data.cargarPersonas().subscribe((response) => {
      this.personas = response;
      console.log(response);
    })}


    agregarPersona(persona: string) {
      console.log(this.index);
      if (this.index == -1) {
        this.personas.push(persona);
        this.data.guardar(this.personas);
        this.nombreInput = '';
      } else {
        this.data.editar(this.index, persona);
        this.personas[this.index] = persona;
        console.log(this.index, persona);
      }

    }

    editar(index: number) {
      this.nombreInput = this.personas[index];
      this.index = index;
      console.log(index);
    }

    eliminar(index: number) {
      this.data.delete(index);
      this.personas.splice(index);
    }

  }

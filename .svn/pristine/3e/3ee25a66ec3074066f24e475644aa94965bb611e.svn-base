import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-checkbox-multiple',
  templateUrl: './checkbox-multiple.component.html',
  styleUrls: ['./checkbox-multiple.component.scss']
})
export class CheckboxMultipleComponent implements OnInit {

  constructor() { }


  @Input() nombre : string = '';
  @Input() completo : boolean;
  @Input() color : any;
  @Input() estado: boolean = false;
  @Input() datos: any = [];

  @Output() accion = new EventEmitter();

  task: Task = {
    name: 'nombre',
    completed: true,
    color: 'warn',
    subtasks: []
  };

  ngOnInit(): void {
    console.log(this.datos);
    this.task={
      name: this.nombre,
      completed: this.completo,
      color: this.color,
      subtasks:this.datos
    }

    console.log(this.task);

  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  selectionChanged(e){

    console.log(this.task);

    this.accion.emit(this.task);
  }

}

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}






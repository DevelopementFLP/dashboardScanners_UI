import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.css'
})
export class NoDataComponent implements OnInit {

  mensaje!: Message[];

  ngOnInit(): void {
    this.mensaje = [{severity: 'info', summary:'Información', detail:'No hay datos para mostrar.'}]
  }
}

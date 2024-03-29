import { Component, Input, OnInit } from '@angular/core';
import { Rastreo } from '../../interfaces/Rastreo.interface';
import { RastreoItem } from '../../interfaces/RastreoItem.interface';

@Component({
  selector: 'rastreo-detail',
  templateUrl: './rastreo-detail.component.html',
  styleUrl: './rastreo-detail.component.css'
})
export class RastreoDetailComponent implements OnInit{

  @Input() data!: Rastreo[] | undefined;
  pasos!: RastreoItem[];
  color: string = "#2ECC71";
  imagen: string = '';

  constructor() {
   
  }

  ngOnInit(): void {
    this.mapearItems(this.data!);
  }

  private mapearItems(data: Rastreo[]) {
    this.pasos = data.map((rastreo: Rastreo) => {
      return {
        dispositivo: rastreo.dispositivo,
        ip: rastreo.ip,
        puerto: rastreo.puerto,
        ubicacion: rastreo.ubicacion,
        fecha: rastreo.fecha,
        codigo: rastreo.codigo,
        color: '#2ECC71',
        image: ''
      }
    })
  }

  mostrar(data: any) {
    console.log(data)
  }
}

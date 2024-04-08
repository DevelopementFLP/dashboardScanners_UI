import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Rastreo } from '../../interfaces/Rastreo.interface';
import { RastreoItem } from '../../interfaces/RastreoItem.interface';

@Component({
  selector: 'rastreo-detail',
  templateUrl: './rastreo-detail.component.html',
  styleUrl: './rastreo-detail.component.css'
})
export class RastreoDetailComponent implements OnInit, OnChanges{

  @Input() data!: Rastreo[] | undefined;
  @Input() barcode: string = '';
  
  pasos!: RastreoItem[];
  color: string = "#2ECC71";
  imagen: string = '';

  constructor() {}

  ngOnInit(): void {
    this.pasos = [];
    this.mapearItems(this.data!);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'] && changes['data'].currentValue !== undefined) {
      this.data = changes['data'].currentValue;
      this.mapearItems(this.data!);
    }
  }

  private mapearItems(data: Rastreo[]) {
    this.pasos = [];
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

}

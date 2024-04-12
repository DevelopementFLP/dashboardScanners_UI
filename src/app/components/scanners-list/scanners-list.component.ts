import { Component, OnInit } from '@angular/core';
import { RatioResponse } from '../../interfaces/RatioResponse.interface';
import { DashboardService } from '../../services/dashboard.service';
import { RatioResult } from '../../interfaces/RatioResult.interface';
import { interval } from 'rxjs';
import { RatioErrorResponse } from '../../interfaces/RatioErrorResponse.interface';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-scanners-list',
  templateUrl: './scanners-list.component.html',
  styleUrl: './scanners-list.component.css'
})
export class ScannersListComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    private commonService: CommonService
    ) {}

  public dayData?: RatioResponse;
  public weekData?: RatioResponse;
  public datos: RatioResult = new RatioResult()
  public chartData: any;
  public options: any;

  ngOnInit(): void {
    this.fetchData();

    interval(300000).subscribe(() => {
      this.fetchData();
    });
  }

  private fetchData(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.dashboardService.checkServerConnection();

    const fechaActual: Date = new Date();
    const fechaDesde: Date = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate(), 0, 0, 0);
    const fechaHasta: Date = new Date(fechaDesde.getFullYear(), fechaDesde.getMonth(), fechaDesde.getDate(), fechaDesde.getHours() + 23 , 59, 59);
    const formattedFechaDesde = this.commonService.formatDate(fechaDesde);
    const formattedFechaHasta = this.commonService.formatDate(fechaHasta);
    const fechaInicioWeek: Date = this.commonService.getFirstDayOfWeek(fechaDesde);
    const fechaFin: Date = this.commonService.getLastDayOfWeek(fechaDesde);
    const fechaFinWeek: Date = new Date(fechaFin.getFullYear(), fechaFin.getMonth(), fechaFin.getDate(), fechaFin.getHours() + 23, 59, 59);
    const formattedInicioWeek = this.commonService.formatDate(fechaInicioWeek);
    const formattedFinWeek = this.commonService.formatDate(fechaFinWeek);

    this.dashboardService
      .getRatioError(formattedFechaDesde, formattedFechaHasta)
      .subscribe((dayData: RatioResponse) => {
        this.dayData = dayData;
        this.datos.dayData = this.dayData; 
        
        this.commonService.ordenarPorDispositivo(this.datos.dayData);
      });

      this.dashboardService
      .getRatioError(formattedInicioWeek, formattedFinWeek)
      .subscribe((weekData: RatioResponse) => {
        this.weekData = weekData;
        this.datos.weekData = this.weekData;
    
        this.commonService.ordernarSumaOkNoRead(this.datos.weekData);

        this.chartData = {
          labels: this.getNombresDispositivos(this.datos.weekData!),
          datasets: [
              {
                  label: 'Lecturas',
                  backgroundColor: documentStyle.getPropertyValue('--primary-400'),
                  borderColor: documentStyle.getPropertyValue('--primary-400'),
                  data: this.getLecturas(this.datos.weekData)
              },
              {
                  label: 'Correctas',
                  backgroundColor: documentStyle.getPropertyValue('--green-400'),
                  borderColor: documentStyle.getPropertyValue('--green-400'),
                  data: this.getCorrectas(this.datos.weekData)
              },
              {
                  label: 'Error',
                  backgroundColor: documentStyle.getPropertyValue('--red-400'),
                  borderColor: documentStyle.getPropertyValue('--red-400'),
                  data: this.getError(this.datos.weekData)
              }
          ]
      };
      });

      

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }

        }
    };
  }

  
  getData(i: number) : RatioErrorResponse | undefined{
    const dispositivo = this.weekData?.data[i].dispositivo;
    const dispositivoBuscado = this.buscarDispositivoPorNombre(dispositivo!);

    return dispositivoBuscado || undefined;
  }

  private buscarDispositivoPorNombre(nombre: string) {
    const dispositivo = this.dayData?.data.find(disp => disp.dispositivo === nombre);
    return dispositivo;
  }

  private getNombresDispositivos(lecturas: RatioResponse): string[] {
    const dispositivos: string[] = [];
    lecturas.data.forEach(lect => {
      dispositivos.push(lect.dispositivo)
    });
    return dispositivos;
  }

  private getLecturas(lecturas: RatioResponse): number[] {
    const datos: number[] = [];
    lecturas.data.forEach(lect => {
      datos.push(lect.ok + lect.noRead)
    })
    return datos;
  }

  private getCorrectas(lecturas: RatioResponse): number[] {
    const datos: number[] = [];
    lecturas.data.forEach(lect => {
      datos.push(lect.ok)
    })
    return datos;
  }

  private getError(lecturas: RatioResponse): number[] {
    const datos: number[] = [];
    lecturas.data.forEach(lect => {
      datos.push(lect.noRead)
    })
    return datos;
  }
}

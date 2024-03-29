import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { RastreoResponse } from '../../interfaces/RastreoResponse.interface';

@Component({
  selector: 'app-rastreo',
  templateUrl: './rastreo.component.html',
  styleUrl: './rastreo.component.css'
})
export class RastreoComponent implements OnInit, AfterViewInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;
  barcode: string = '';
  data?: RastreoResponse;
  hayData: boolean = false;

  constructor(
    private router: Router,
    private dashService: DashboardService
    ) {
      this.data = undefined;
    }

  ngOnInit(): void {
    
  }

  ngAfterViewInit (): void {
    this.txtBuscar.nativeElement.focus();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const navbar = document.querySelector('.navBar');
    if(navbar){
      if(window.scrollY > 0)
        navbar.classList.add('scrolled');
      else
        navbar.classList.remove('scrolled');
    }
  }

  rastrearCaja() {
    if(this.barcode === '') return;

    this.dashService.getRastreoCaja(this.barcode)
      .subscribe( data => {
        this.data = data;
        this.hayData = this.data.data.length > 0;
      })
  }

  seleccionarTexto(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.select();
  }
}

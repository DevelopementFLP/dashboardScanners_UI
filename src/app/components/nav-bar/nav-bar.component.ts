import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input() enMain!: boolean;
  barcode: string = '';

  constructor(private router: Router) {}

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

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToRastreo(): void {
    this.router.navigate(['rastreo']);
  }

  goSIR() {
    parent.location.href = "http://192.168.0.107:83"
  }
}

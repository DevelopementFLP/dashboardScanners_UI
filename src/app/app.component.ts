import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { RatioErrorResponse } from './interfaces/RatioErrorResponse.interface';
import { RatioResult } from './interfaces/RatioResult.interface';
import { RatioResponse } from './interfaces/RatioResponse.interface';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboardScanner';
  
  
}

import { Component, Input, OnInit } from '@angular/core';
import { RatioResponse } from '../../interfaces/RatioResponse.interface';
import { RatioErrorResponse } from '../../interfaces/RatioErrorResponse.interface';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent implements OnInit {
  @Input() dayData?: RatioErrorResponse;
  @Input() weekData?: RatioErrorResponse;

  @Input() dispositivo: string = "";



  ngOnInit(): void {
  
  }


}

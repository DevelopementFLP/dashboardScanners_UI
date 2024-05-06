import { Component, HostListener, Input, input } from '@angular/core';
import { RatioResponse } from '../../interfaces/RatioResponse.interface';
import { RatioErrorResponse } from '../../interfaces/RatioErrorResponse.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() correctas: number = 0;
  @Input() error: number = 0;
  @Input() ratio: number = 0;

  @Input() timeLapse: string = "";
  @Input() data?: RatioErrorResponse;

}

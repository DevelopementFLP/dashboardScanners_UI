import { NgModule } from '@angular/core';

//PimeNg Components
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  exports: [
    CardModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    TimelineModule
  ]
})
export class PrimengModule { }

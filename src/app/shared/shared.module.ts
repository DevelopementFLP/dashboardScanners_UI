import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoConnectionComponent } from './pages/no-connection/no-connection.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    NoConnectionComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }

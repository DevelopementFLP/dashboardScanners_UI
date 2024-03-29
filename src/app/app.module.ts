import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { DataViewerComponent } from './components/data-viewer/data-viewer.component';
import { CardComponent } from './components/card/card.component';
import { PrimengModule } from './primeng/primeng.module';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ScanComponent } from './components/scan/scan.component';
import { ScannersListComponent } from './components/scanners-list/scanners-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { RastreoComponent } from './components/rastreo/rastreo.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { RastreoDetailComponent } from './components/rastreo-detail/rastreo-detail.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ApiInterceptor } from './interceptors/api.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DataViewerComponent,
    CardComponent,
    CardContainerComponent,
    ScanComponent,
    ScannersListComponent,
    NavBarComponent,
    RastreoComponent,
    NoDataComponent,
    RastreoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    PrimengModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

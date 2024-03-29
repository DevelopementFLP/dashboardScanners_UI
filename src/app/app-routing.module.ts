import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanComponent } from './components/scan/scan.component';
import { ScannersListComponent } from './components/scanners-list/scanners-list.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { NoConnectionComponent } from './shared/pages/no-connection/no-connection.component';
import { RastreoComponent } from './components/rastreo/rastreo.component';

const routes: Routes = [
  {
    path:'list',
    component: ScannersListComponent
  },
  {
    path: 'scan/:id',
    component: ScanComponent
  },
  {
    path: 'rastreo',
    component: RastreoComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'no-connection',
    component: NoConnectionComponent
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

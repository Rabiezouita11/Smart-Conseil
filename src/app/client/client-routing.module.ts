import { Whoarewe1Component } from './whoarewe1/whoarewe1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueillComponent } from './accueill/accueill.component';
import { Whoarewe2Component } from './whoarewe2/whoarewe2.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueillComponent  }   ,
  { path: 'whoarewe1', component: Whoarewe1Component  }   ,
  { path: 'whoarewe2', component: Whoarewe2Component  }   ,


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

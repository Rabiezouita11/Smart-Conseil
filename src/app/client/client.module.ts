import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ComponentClientComponent } from './component-client/component-client.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueillComponent } from './accueill/accueill.component';
import { CounterDirective } from './counter.directive';
import { Whoarewe1Component } from './whoarewe1/whoarewe1.component';
import { Whoarewe2Component } from './whoarewe2/whoarewe2.component';


@NgModule({
  declarations: [
    ComponentClientComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AccueillComponent,
    CounterDirective,
    Whoarewe1Component,
    Whoarewe2Component

  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

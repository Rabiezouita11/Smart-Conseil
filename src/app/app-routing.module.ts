import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentClientComponent } from './client/component-client/component-client.component';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';

const routes: Routes = [


  {
    path: '',
    component: ComponentClientComponent,
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },


  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

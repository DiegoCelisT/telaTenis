import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaTenisComponent } from './tela-tenis/tela-tenis.component';

const ROUTES: Routes = [
  { path: "", component:TelaTenisComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(ROUTES, { useHash: true });

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

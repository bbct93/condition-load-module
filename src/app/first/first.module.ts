// lazy.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FirstComponent }
];

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FirstModule { }

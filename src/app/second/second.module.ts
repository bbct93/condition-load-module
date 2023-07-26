// lazy.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SecondComponent }
];

@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondModule { }

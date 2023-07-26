import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuard} from "./auth.guard";
import { CustomAuthGuard } from './custom-auth.guard'
import { GlobalService } from './global.service'; // 导入你的全局服务

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, GlobalService, CustomAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

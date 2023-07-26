import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomAuthGuard } from './custom-auth.guard';
import { GlobalService } from './global.service'; // 导入全局服务



const routes: Routes = [
  { path: 'lazy',
    canLoad: [CustomAuthGuard],
    loadChildren: () => {
      const shouldLoadFirstModule = GlobalService.shouldLoadFirstModule; // 获取 GlobalService 中的数据
      console.log('shouldLoadFirstModule--->', shouldLoadFirstModule)
      return shouldLoadFirstModule
        ? import('./first/first.module').then(m => m.FirstModule) // 加载 FirstModule
        : import('./second/second.module').then(m => m.SecondModule); // 加载 SecondModule
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

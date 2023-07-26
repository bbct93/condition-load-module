import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { GlobalService } from "./global.service";

@Injectable()
export class CustomAuthGuard implements CanLoad {
  constructor() {}
  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    try {
      const data = await this.getDataFromServer();
      GlobalService.shouldLoadFirstModule = data.shouldLoadFirstModule;
      console.log('AuthGuard',GlobalService.shouldLoadFirstModule )
    } catch (error) {
      console.error('Error fetching data from server:', error);
    }
    return true;
  }
  private getDataFromServer(): Promise<{ shouldLoadFirstModule: boolean }> {
    // 假设这里从服务器获取数据并返回一个 Promise
    return new Promise<{ shouldLoadFirstModule: boolean }>((resolve) => {
      // 模拟异步操作
      setTimeout(() => {
        resolve({ shouldLoadFirstModule: false });
      }, 5000);
    });
  }
}

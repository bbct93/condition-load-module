import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { GlobalService } from "./global.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private globalService: GlobalService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // 在这里编写你的拦截逻辑
    // 如果用户满足某个条件，允许访问路由，否则重定向到其他路由或返回 false 阻止访问
    GlobalService.shouldLoadFirstModule = true
    console.log('AuthGuard',GlobalService.shouldLoadFirstModule )
    return true
  }
}

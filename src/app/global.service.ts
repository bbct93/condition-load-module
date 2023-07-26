import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  static shouldLoadFirstModule: boolean = false;
}

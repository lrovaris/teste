import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleBasketService {

  @Output() fire: EventEmitter<any> = new EventEmitter();

  change() {
    this.fire.emit(false);
  }
  getEmittedValue() {
    return this.fire;
  }

  constructor() { }
}

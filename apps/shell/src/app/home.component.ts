import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DecrementButtonComponent} from  '@poc-nx-module-federation/decrement-button'
import {IncrementButtonComponent} from  '@poc-nx-module-federation/increment-button'
import {ResetButtonComponent} from  '@poc-nx-module-federation/reset-button'
import { Observable } from 'rxjs';
import {CounterDataService} from '@poc-nx-module-federation/counter-data'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DecrementButtonComponent, IncrementButtonComponent, ResetButtonComponent],
  template: 
  `<h1> Hello, it's meee --home-- </h1>
  <div>Counter: {{ count$ | async }}</div>
  <lib-decrement-button></lib-decrement-button>
  <lib-increment-button></lib-increment-button>
  <lib-reset-button></lib-reset-button>`,
})
export class HomeComponent {
  count$: Observable<number>;

  constructor(private counterDataService: CounterDataService) {
    this.count$ = this.counterDataService.currentCount;
  }
}

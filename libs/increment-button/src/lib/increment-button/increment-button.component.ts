import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterDataService} from '@poc-nx-module-federation/counter-data'

@Component({
  selector: 'lib-increment-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './increment-button.component.html',
})
export class IncrementButtonComponent {
  constructor (private counterDataService : CounterDataService){}

  increment() {
    this.counterDataService.increment();
  }
}

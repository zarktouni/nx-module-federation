import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterDataService} from '@poc-nx-module-federation/counter-data'

@Component({
  selector: 'lib-reset-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reset-button.component.html',
})
export class ResetButtonComponent {
  constructor (private counterDataService : CounterDataService){}

  reset() {
    this.counterDataService.reset();
  }
}

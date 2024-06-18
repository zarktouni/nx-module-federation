import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-remote-app1-entry',
  template: `<h1>Hello, it's remote app1</h1>`,
})
export class RemoteEntryComponent {}

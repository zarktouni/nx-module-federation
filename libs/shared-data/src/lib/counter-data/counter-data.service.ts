import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterDataService {
  
  private count = new BehaviorSubject<number>(0);
  currentCount = this.count.asObservable();

  increment() : void {
    this.count.next(this.count.value + 1);
  }

  decrement() : void {
    this.count.next(this.count.value - 1);
  }

  reset() : void {
    this.count.next(0);
  }
}

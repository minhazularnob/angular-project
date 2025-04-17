import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.css',
})

export class CounterComponentComponent {
  count = 0;

  handleCount(value: string) {
    if (value == 'Inc') {
      this.count++;
    }
    else if (value == 'Dec' && this.count > 0) {
      this.count--;
    }
    else {
      this.count = 0;
    }
  }
}

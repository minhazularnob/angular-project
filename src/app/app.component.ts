import { Component } from '@angular/core';
import { CounterComponentComponent } from "./counter-component/counter-component.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
  gethere = "";
  setHere = "";

  getInput(value: string) {
    this.gethere = value;
  }

  setInput(value: HTMLInputElement) {
    this.setHere = "Minhaz"
  }
}
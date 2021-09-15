import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  startValue = 0;
  height = 0;

  result: string[] = [];


  calc(): void {

    let value = this.startValue;

    for (let i = 0; i <= this.height; i++) {
      const result = value * (i+2);
      this.result.push(`${value} * ${i+2} = ${result}`);
      value = result;
    }

    for (let i = 0; i <= this.height; i++) {
      const result = value / (i+2);
      this.result.push(`${value} / ${i+2} = ${result}`);
      value = result;
    }

  }
}

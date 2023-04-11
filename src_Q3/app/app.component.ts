import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 [style.color]="'blue'">Marvellous Infosystems</h1>
  <input type="text">`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment6';
}

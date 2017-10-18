import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular kiraly es netacademia is cool :)';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;
  klikkeljunke = false;
  inputContent: string;

  pipeDemo = [
    {
      'id': 1,
      'name': 'puffancs'
    },
    {
      'id': 2,
      'name': 'Toj'
    },
    {
      'id': 3,
      'name': 'Balu'
    }
  ];

  toggle() {
    this.show = !this.show;
    this.inputContent = 'ot, csip, RVT, ugyelet';
  }

  demo(ev: MouseEvent) {
    console.log(ev);
  }
}

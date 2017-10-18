import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;
  klikkeljunke = false;
  inputContent: string;

  toggle() {
    this.show = !this.show;
    this.inputContent = 'ot, csip, RVT, ugyelet';
  }

  demo(ev: MouseEvent) {
    console.log(ev);
  }
}

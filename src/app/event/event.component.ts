import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  title = 'sziasztok, mi itt vagyunk';

  constructor() {
    console.log(`${this.title} itt lehet folytatni folyo szoveggel, azt amit meg ki szeretnek irni`);
    this.greetings();
  }

  greetings() {
    console.log('not implemented yet!');
  }
}

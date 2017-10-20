import { Component } from '@angular/core';
import { EventModel } from './event-model';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  // XSS challange, image tag src, miau szoveggel szeretnek egy alert-et
  events: EventModel[];

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'http://sziget.hu/templates/sziget2017-2/images/logo.png'
      },
      {
        id: 33,
        name: 'fezen',
        pic: 'http://www.fezenklub.hu/_user/browser/Image/2016_17/FEZEN_2017_WHITE%20(1).jpg'
      },
      {
        id: 2,
        name: 'rockmaraton',
        pic: 'http://hammerworld.hu/images/upload/01arokka17.jpg?20110201-164743'
      }
    ];
    console.log('megjott a listdemo cmp');
    // const puf = this.events.reduce((x: EventModel, y: EventModel) => {
    //   // if (x.id > y.id) {
    //   //   return x;
    //   // } else {
    //   //   return y;
    //   // }
    //   //
    //   // (logikai vizsgalat) ? haigaz : hahamis;
    //   return x.id > y.id ? x : y;
    // }).id;
    // console.log(puf);
  }

  add(newEventNameInput: HTMLInputElement, newEventInputPic: HTMLInputElement) {
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value, newEventInputPic.value)];
    newEventNameInput.value = '';
    newEventInputPic.value = '';
  }

  delete(id: number) {
    // filter [o,x,o,x,](?o?) -> [o,o]
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

}

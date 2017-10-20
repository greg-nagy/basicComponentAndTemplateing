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
  modifyEvent: EventModel;

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'http://sziget.hu/templates/sziget2017-2/images/logo.png'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'http://www.fezenklub.hu/_user/browser/Image/2016_17/FEZEN_2017_WHITE%20(1).jpg'
      },
      {
        id: 3,
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

    this.modifyEvent = new EventModel('');
  }

  save(newEventNameInput: HTMLInputElement, newEventInputPic: HTMLInputElement) {
    if (this.modifyEvent.id === 0) {
      // itt meg tudjuk, hogy uj elemet akarunk letrehozni, hiszen biztositjuk
      // mindenhol mashol, hogy ha nem szerkesztunk akkor id 0 legyen
      const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel(newEventNameInput.value, maxId + 1, newEventInputPic.value)];
    } else {
      // itt tudjuk, hogy edit szakasz van, azaz meg kell keresni a megfelelo elemet az id alapjan
      this.events = this.events.map((ev) => {
        if (ev.id === this.modifyEvent.id) {
          // itt tudjuk, hogy ezt az elemet kell szerkeszteni
          return {
            id: ev.id,
            name: newEventNameInput.value,
            pic: newEventInputPic.value
          };
        } else {
          // itt tudjuk, hogy nem akarunk modositani
          return ev;
        }
      });

      // takaritsunk fel magunk utan
      this.modifyEvent = new EventModel('');
    }
    newEventNameInput.value = '';
    newEventInputPic.value = '';
  }

  edit(id: number) {
    // HA biztos hogy van ilyen
    // HA tudom hogy mindig CSAK 1 ilyen
    this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
  }

  delete(id: number) {
    // filter [o,x,o,x,](?o?) -> [o,o]
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

}

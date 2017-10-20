export class EventModel {
  id: number;
  name: string;
  pic?: string;

  constructor(name: string, id = 0, pic = '') {
    // Object.assign(this, param)
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}

import { Injectable } from '@angular/core';
import { notEqual } from 'assert';
import { Journal } from './journal.model';

@Injectable({
  providedIn: 'root'
})
export class JournalsService {

  journals: Journal[] = new Array<Journal>();


  constructor() { }

  get(id: number) {
    return this.journals[id];
  }

  getId(journal: Journal) {
    return this.journals.indexOf(journal);
  }

  getAll() {
    return this.journals
  }

  add(journal: Journal) {
    let length = this.journals.push(journal);
    //returning index
    return length - 1;
  }

  update(id: number, title:string, body: string) {
    let journal = this.journals[id];
    journal.date = title;
    journal.body = body;
  }

  delete(id: number) {
    this.journals.splice(id, 1);
  }
}

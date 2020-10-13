import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Journal } from 'src/app/shared/journal.model';

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.scss']
})
export class JournalDetailsComponent implements OnInit {

  journal: Journal;

  constructor() { }

  ngOnInit(): void {
    this.journal = new Journal();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}

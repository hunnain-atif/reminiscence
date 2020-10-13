import { animate, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Journal } from 'src/app/shared/journal.model';
import { JournalsService } from 'src/app/shared/journals.service';
import { trigger, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(68)
      ])
    ])
  ]
})
export class JournalListComponent implements OnInit {

  journals: Journal[] = new Array<Journal>();

  constructor(private journalService: JournalsService) { }

  ngOnInit(): void {
    this.journals = this.journalService.getAll();
  }

  deleteJournal(id: number) {
    this.journalService.delete(id);
  }

}

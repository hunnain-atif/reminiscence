import { Component, OnInit } from '@angular/core';
import { Journal } from 'src/app/shared/journal.model';
import { JournalsService } from 'src/app/shared/journals.service';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
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

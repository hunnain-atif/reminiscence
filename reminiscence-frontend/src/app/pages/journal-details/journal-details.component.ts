import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Journal } from 'src/app/shared/journal.model';
import { JournalsService } from 'src/app/shared/journals.service';

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.scss']
})
export class JournalDetailsComponent implements OnInit {

  journal: Journal;

  constructor(private journalService: JournalsService, private router: Router) { }

  ngOnInit(): void {
    this.journal = new Journal();
  }

  onSubmit(form: NgForm) {
    this.journalService.add(form.value);
    this.router.navigateByUrl('/');
    
  }

}

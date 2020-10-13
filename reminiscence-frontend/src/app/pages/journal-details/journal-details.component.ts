import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Journal } from 'src/app/shared/journal.model';
import { JournalsService } from 'src/app/shared/journals.service';

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.scss']
})
export class JournalDetailsComponent implements OnInit {

  journal: Journal;
  journalID: number;
  isNew: boolean;

  constructor(private journalService: JournalsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.journal = new Journal();
      if (params.id) {
        this.journal = this.journalService.get(params.id);
        this.journalID = params.id
        this.isNew = false;
      } else {
        this.isNew = true;
      }
    })
  }

  onSubmit(form: NgForm) {
    if(this.isNew) {
      this.journalService.add(form.value);
      this.router.navigateByUrl('/');
    } else {
      this.journalService.update(this.journalID, form.value.date, form.value.body);
      this.router.navigateByUrl('/');
    }
    
    
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}

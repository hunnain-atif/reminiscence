import { Component, OnInit } from '@angular/core';
import { Journal } from 'src/app/shared/journal.model';
import { JournalsService } from 'src/app/shared/journals.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations'

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
        animate(70)
      ]),

      transition('* => void', [
        animate(50, style({
          transform: 'scale(1.05)'
        })),
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        animate('120ms ease-out', style({
          opacity: 0,
          transform: 'scale(0.68)'
        })),
        animate('150ms ease-out', style({
          height: 0,
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
          
        }))
      ])
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0,
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class JournalListComponent implements OnInit {

  journals: Journal[] = new Array<Journal>();
  filteredJournals: Journal[] = new Array<Journal>();

  constructor(private journalService: JournalsService) { }

  ngOnInit(): void {
    this.journals = this.journalService.getAll();
    this.filteredJournals = this.journals;
  }

  deleteJournal(id: number) {
    this.journalService.delete(id);
  }

  filter(query: string) {
    let allResults: Journal[] = new Array<Journal>();
    query = query.toLowerCase().trim();
    let searchTerms: string[] = query.split(' ');
    searchTerms = this.removeDuplicates(searchTerms);
    searchTerms.forEach(searchTerm => {
      let results = this.filterAlgorithm(searchTerm);
      allResults = [...allResults,...results]
    })
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredJournals = uniqueResults

  }

  removeDuplicates(arr: Array<any>): Array<any> {
    let results: Set<any> = new Set<any>();
    arr.forEach(e  => results.add(e));
    return Array.from(results);
  }

  filterAlgorithm(query: string): Array<Journal> {
    query = query.toLowerCase().trim();
    let relevantJournals = this.journals.filter(journal => {
      if (journal.date && journal.date.toLowerCase().includes(query)) {
        return true;
      } if (journal.body && journal.body.toLowerCase().includes(query)) {
        return true 
      }
        return false;
    })

    return relevantJournals
  }

}

import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.scss']
})
export class JournalCardComponent implements OnInit {
  @Input('title') title: string;
  @Input('body') body: string;

  @ViewChild('truncator', {static: false}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', {static: false}) bodyText: ElementRef<HTMLElement>;

  
  

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

}
